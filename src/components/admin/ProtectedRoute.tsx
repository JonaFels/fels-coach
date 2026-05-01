import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Lade…</p>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin/login" replace />;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
        <h1 className="font-serif text-2xl mb-3">Kein Zugriff</h1>
        <p className="text-muted-foreground max-w-md">
          Dein Konto hat keine Admin-Rechte. Bitte bestätige mit dem Entwickler, dass deine
          Benutzer-ID in der Rollen-Tabelle als „admin" hinterlegt ist.
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
