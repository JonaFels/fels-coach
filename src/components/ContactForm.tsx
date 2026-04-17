import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";
import { trackContactFormSubmit, trackFormInteraction } from "@/lib/tracking";

const contactSchema = z.object({
  name: z.string().trim().min(1, "required").max(100),
  email: z.string().trim().email("invalidEmail").max(255),
  message: z.string().trim().min(1, "required").max(2000),
  website: z.string().max(0, "bot").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Honeypot
    if (formData.website && formData.website.length > 0) {
      setIsSuccess(true);
      return;
    }

    // Validate
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      // NOT tracking here – only on success
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      const netlifyBody = new URLSearchParams();
      netlifyBody.append("form-name", "contact");
      netlifyBody.append("name", formData.name);
      netlifyBody.append("email", formData.email);
      netlifyBody.append("message", formData.message);

      const netlifyRes = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyBody.toString(),
      });

      if (!netlifyRes.ok) {
        throw new Error(`Netlify form error: ${netlifyRes.statusText}`);
      }

      setIsSuccess(true);
      trackContactFormSubmit(true);
      toast({
        title: t("contactForm.success"),
        description: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: t("contactForm.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="bg-card/95 backdrop-blur-sm">
        <CardContent className="pt-8">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" aria-hidden="true" />
            <p className="text-foreground font-medium">{t("contactForm.success")}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/95 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-serif text-xl">{t("contactForm.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {Object.keys(errors).length > 0 && (
            <span>Es gibt Fehler im Formular. Bitte überprüfe deine Eingaben.</span>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="website"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-2">
            <Label htmlFor="contact-name">
              {t("contactForm.name")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onFocus={() => trackFormInteraction("contact_form", "name", "focus")}
              className={errors.name ? "border-destructive" : ""}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive">
                {t(`contactForm.${errors.name}`)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">
              {t("contactForm.email")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onFocus={() => trackFormInteraction("contact_form", "email", "focus")}
              className={errors.email ? "border-destructive" : ""}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive">
                {t(`contactForm.${errors.email}`)}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">
              {t("contactForm.message")} <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="contact-message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onFocus={() => trackFormInteraction("contact_form", "message", "focus")}
              className={errors.message ? "border-destructive" : ""}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-destructive">
                {t(`contactForm.${errors.message}`)}
              </p>
            )}
          </div>

          {/* Honeypot */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <Label htmlFor="contact-website">Website (nicht ausfüllen)</Label>
            <Input
              id="contact-website"
              type="text"
              name="website"
              value={formData.website || ""}
              onChange={(e) => handleChange("website", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("contactForm.privacyNotice")}{" "}
            <Link to="/datenschutz" className="underline hover:text-secondary">
              {t("contactForm.privacyLink")}
            </Link>{" "}
            zu.
          </p>

          <Button 
            type="submit" 
            className="w-full min-h-[44px]" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                {t("contactForm.submit")}...
              </>
            ) : (
              t("contactForm.submit")
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
