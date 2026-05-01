import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ImageUploaderProps {
  onUploaded: (publicUrl: string) => void;
  keyHint: string;
}

export const ImageUploader = ({ onUploaded, keyHint }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({ title: "Fehler", description: "Bitte eine Bilddatei wählen.", variant: "destructive" });
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      toast({ title: "Datei zu groß", description: "Maximal 8 MB.", variant: "destructive" });
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const safeKey = keyHint.replace(/[^a-z0-9_-]/gi, "_");
      const path = `${safeKey}/${Date.now()}.${ext}`;
      const { error } = await supabase.storage
        .from("cms-images")
        .upload(path, file, { cacheControl: "3600", upsert: false, contentType: file.type });
      if (error) throw error;
      const { data } = supabase.storage.from("cms-images").getPublicUrl(path);
      onUploaded(data.publicUrl);
      toast({ title: "Bild hochgeladen", description: "URL wurde eingetragen." });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Upload fehlgeschlagen";
      toast({ title: "Fehler", description: message, variant: "destructive" });
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
      >
        {uploading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Lade hoch…
          </>
        ) : (
          <>
            <Upload className="h-4 w-4" />
            Bild hochladen
          </>
        )}
      </Button>
    </>
  );
};
