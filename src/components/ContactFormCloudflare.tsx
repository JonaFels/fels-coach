import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";

/**
 * ContactFormCloudflare
 * --------------------
 * Variante des Kontaktformulars, die NICHT Supabase, sondern den
 * Cloudflare Pages Function Endpoint `/api/contact` aufruft.
 *
 * Funktioniert ausschließlich, wenn die Seite tatsächlich auf
 * Cloudflare Pages deployed ist (functions/api/contact.ts wird dort
 * automatisch zur serverlosen Function).
 *
 * Bestehendes <ContactForm /> (Supabase) bleibt unangetastet.
 */
export const ContactFormCloudflare = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // Honeypot
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!formData.name.trim()) next.name = "Bitte gib deinen Namen an.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = "Bitte gib eine gültige E-Mail-Adresse an.";
    if (!formData.message.trim()) next.message = "Bitte schreibe eine kurze Nachricht.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: stille Erfolgsanzeige
    if (formData.website && formData.website.length > 0) {
      setIsSuccess(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          website: formData.website,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string; success?: boolean };

      if (!res.ok || !data.success) {
        toast({
          title: "Senden fehlgeschlagen",
          description: data.error || "Bitte versuche es später erneut.",
          variant: "destructive",
        });
        return;
      }

      setIsSuccess(true);
      toast({ title: "Vielen Dank! Deine Nachricht ist angekommen." });
    } catch (err) {
      console.error("Contact (Cloudflare) error:", err);
      toast({
        title: "Senden fehlgeschlagen",
        description: "Es gab ein Verbindungsproblem. Bitte versuche es später erneut.",
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
            <p className="text-foreground font-medium">
              Vielen Dank! Deine Nachricht ist angekommen.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card/95 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-serif text-xl">Schreib mir</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="space-y-2">
            <Label htmlFor="cf-name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="cf-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              autoComplete="name"
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cf-email">
              E-Mail <span className="text-destructive">*</span>
            </Label>
            <Input
              id="cf-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
              autoComplete="email"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cf-message">
              Nachricht <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="cf-message"
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>

          {/* Honeypot – darf nicht ausgefüllt werden */}
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <Label htmlFor="cf-website">Website (nicht ausfüllen)</Label>
            <Input
              id="cf-website"
              type="text"
              name="website"
              value={formData.website}
              onChange={(e) => handleChange("website", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <Button type="submit" className="w-full min-h-[44px]" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                Senden...
              </>
            ) : (
              "Nachricht senden"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
