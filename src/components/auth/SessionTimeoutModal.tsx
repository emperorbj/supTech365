import { useState, useEffect } from "react";
import { Clock, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { authApi, ApiError } from "@/lib/api";
import { toast } from "sonner";

interface SessionTimeoutModalProps {
  open: boolean;
  timeRemaining: number; // in seconds
  onExtend: () => void;
  onLogout: () => void;
}

export function SessionTimeoutModal({
  open,
  timeRemaining,
  onExtend,
  onLogout,
}: SessionTimeoutModalProps) {
  const { extendSession } = useAuth();
  const [isExtending, setIsExtending] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [displayTime, setDisplayTime] = useState(timeRemaining);

  useEffect(() => {
    setDisplayTime(timeRemaining);
  }, [timeRemaining]);

  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setDisplayTime((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [open]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStayLoggedIn = async () => {
    setIsExtending(true);
    try {
      await extendSession();
      toast.success("Session extended. You’re still signed in.");
      onExtend();
    } catch (err) {
      if (err instanceof ApiError) {
        toast.error(err.message || "Failed to extend session");
      } else {
        toast.error("Connection error. Please try again.");
      }
    } finally {
      setIsExtending(false);
    }
  };

  const handleSaveAndLogout = async () => {
    setIsLoggingOut(true);
    try {
      await authApi.logout();
      toast.success("You have been signed out.");
      onLogout();
    } catch (err) {
      if (err instanceof ApiError) {
        toast.error(err.message || "Failed to sign out");
      } else {
        toast.error("Connection error. Please try again.");
      }
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Dialog open={open} modal={true}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Session Expiring Soon
          </DialogTitle>
          <DialogDescription>
            Your session will expire in {formatTime(displayTime)} due to inactivity.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 text-sm text-yellow-800">
            <p>Any unsaved changes will be lost.</p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleSaveAndLogout}
              disabled={isExtending || isLoggingOut}
            >
              {isLoggingOut ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing out...
                </>
              ) : (
                "Logout"
              )}
            </Button>
            <Button
              className="flex-1"
              onClick={handleStayLoggedIn}
              disabled={isExtending || isLoggingOut}
            >
              {isExtending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Extending...
                </>
              ) : (
                "Stay Logged In"
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
