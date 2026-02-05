 import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
 import { Resend } from "https://esm.sh/resend@2.0.0";
 import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
 
 const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
 
 const corsHeaders = {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Headers":
     "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
 };
 
 interface CallbackRequest {
   contact: string;
 }
 
 const handler = async (req: Request): Promise<Response> => {
   // Handle CORS preflight requests
   if (req.method === "OPTIONS") {
     return new Response(null, { headers: corsHeaders });
   }
 
   try {
     const { contact }: CallbackRequest = await req.json();
 
     // Validate required fields
     if (!contact) {
       return new Response(
         JSON.stringify({ error: "Missing contact information" }),
         { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
       );
     }
 
     // Detect if it's an email or phone number
     const isEmail = contact.includes("@");
     const contactType = isEmail ? "E-Mail" : "Telefonnummer";
 
     // Save to Supabase
     const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
     const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
     const supabase = createClient(supabaseUrl, supabaseKey);
 
     const { error: dbError } = await supabase
       .from("callback_requests")
       .insert({ contact, contact_type: contactType.toLowerCase() });
 
     if (dbError) {
       console.error("Database error:", dbError);
       // Continue even if DB save fails - email is more important
     }
 
     // Send email via Resend
     const emailResponse = await resend.emails.send({
       from: "Rückruf Anfrage <anfrage@send.fels-coach.de>",
       to: ["info@fels-coach.de"],
       subject: `Neue Rückruf-Anfrage (${contactType})`,
       html: `
 <!DOCTYPE html>
 <html lang="de">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
 </head>
 <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
   <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
     <tr>
       <td align="center">
         <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
           <!-- Header -->
           <tr>
             <td style="padding: 32px 40px 24px; border-bottom: 1px solid #e5e5e5;">
               <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #1a1a1a;">Neue Rückruf-Anfrage</h1>
               <p style="margin: 8px 0 0; font-size: 14px; color: #666;">${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin", dateStyle: "full", timeStyle: "short" })}</p>
             </td>
           </tr>
           
           <!-- Contact Details -->
           <tr>
             <td style="padding: 24px 40px 32px;">
               <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                 <tr>
                   <td style="padding: 16px 20px; background-color: #f9f9f9; border-radius: 6px; border-left: 4px solid #999;">
                     <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">${contactType}</p>
                     <p style="margin: 0; font-size: 18px; color: #1a1a1a; font-weight: 500;">${contact}</p>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
           
           <!-- Footer -->
           <tr>
             <td style="padding: 20px 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e5e5;">
               <p style="margin: 0; font-size: 13px; color: #666; text-align: center;">
                 Diese Anfrage wurde über das Rückruf-Formular auf <strong>fels-coach.de</strong> gesendet.
               </p>
             </td>
           </tr>
         </table>
       </td>
     </tr>
   </table>
 </body>
 </html>
       `,
     });
 
     console.log("Email response:", emailResponse);
 
     // Check if Resend returned an error
     if (emailResponse.error) {
       console.error("Resend error:", emailResponse.error);
       return new Response(
         JSON.stringify({ error: "E-Mail konnte nicht gesendet werden: " + emailResponse.error.message }),
         { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
       );
     }
 
     return new Response(
       JSON.stringify({ success: true }),
       { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
     );
   } catch (error: any) {
     console.error("Error in send-callback-request function:", error);
     return new Response(
       JSON.stringify({ error: error.message }),
       { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
     );
   }
 };
 
 serve(handler);