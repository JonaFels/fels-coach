import { useState } from "react";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackCallbackRequestSubmit } from "@/lib/tracking";

const contactSchema = z.object({
  contact: z.string().trim().min(3, "required").max(100),
  website: z.string().max(0, "bot").optional(),
});

export const QuickRequestForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contact, setContact] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (honeypot.length > 0) {
      setIsSuccess(true);
      return;
    }

    const result = contactSchema.safeParse({ contact, website: honeypot });
    if (!result.success) {
      setError(t("quickRequest.error.required"));
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-callback-request", {
        body: { contact },
      });

      if (error) {
        console.error("Edge function error:", error);
        // Do NOT fire callback_request_submit on failure
        toast({
          title: t("quickRequest.error.send"),
          variant: "destructive",
        });
      } else {
        setIsSuccess(true);
        const contactType = contact.includes("@") ? "email" : "phone";
        trackCallbackRequestSubmit(contactType, true);
        toast({
          title: t("quickRequest.success"),
        });
      }
    } catch (err) {
      console.error("Quick request error:", err);
      toast({
        title: t("quickRequest.error.send"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="bg-card/95 backdrop-blur-sm border-secondary/20">
        <CardContent className="pt-8">
          <div className="text-center py-6">
            <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <p className="text-foreground font-medium">{t("quickRequest.success")}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/95 backdrop-blur-sm border-secondary/20">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-3">
          <Phone className="h-5 w-5 text-secondary" aria-hidden="true" />
          <h3 className="font-serif text-lg font-medium text-foreground">
            {t("quickRequest.title")}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {t("quickRequest.description")}
        </p>
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <Input
            type="text"
            placeholder={t("quickRequest.placeholder")}
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              if (error) setError(null);
            }}
            className={error ? "border-destructive" : ""}
            aria-invalid={!!error}
            aria-describedby={error ? "contact-error" : undefined}
          />
          {error && (
            <p id="contact-error" className="text-sm text-destructive">
              {error}
            </p>
          )}

          {/* Honeypot */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <Input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <Button
            type="submit"
            className="w-full min-h-[44px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                {t("quickRequest.button")}...
              </>
            ) : (
              t("quickRequest.button")
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
