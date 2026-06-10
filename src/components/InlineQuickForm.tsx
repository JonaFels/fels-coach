import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackCallbackRequestSubmit } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  contact: z.string().trim().min(3, "required").max(100),
  website: z.string().max(0, "bot").optional(),
});

interface InlineQuickFormProps {
  className?: string;
  onClose?: () => void;
}

export const InlineQuickForm = ({ className, onClose }: InlineQuickFormProps) => {
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
        toast({ title: t("quickRequest.error.send"), variant: "destructive" });
      } else {
        setIsSuccess(true);
        const contactType = contact.includes("@") ? "email" : "phone";
        trackCallbackRequestSubmit(contactType, true);
        toast({ title: t("quickRequest.success") });
      }
    } catch (err) {
      console.error("Quick request error:", err);
      toast({ title: t("quickRequest.error.send"), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("text-center py-4 animate-fade-in-up", className)}>
        <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-2" aria-hidden="true" />
        <p className="text-foreground font-medium text-sm">{t("quickRequest.success")}</p>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-md mx-auto animate-fade-in-up", className)}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2" noValidate>
        <div className="flex-1">
          <Input
            type="text"
            placeholder={t("quickRequest.placeholder")}
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              if (error) setError(null);
            }}
            className={cn("min-h-[44px]", error ? "border-destructive" : "")}
            aria-invalid={!!error}
            aria-describedby={error ? "inline-contact-error" : undefined}
          />
          {error && (
            <p id="inline-contact-error" className="text-xs text-destructive mt-1">
              {error}
            </p>
          )}
        </div>

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

        <Button type="submit" className="min-h-[44px] whitespace-nowrap" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <>
              <Phone className="h-4 w-4 mr-1" aria-hidden="true" />
              {t("quickRequest.button")}
            </>
          )}
        </Button>
      </form>
      {onClose && (
        <button
          onClick={onClose}
          className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
        >
          Abbrechen
        </button>
      )}
    </div>
  );
};
