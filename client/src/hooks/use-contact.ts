import { useMutation } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to transmit message");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "TRANSMISSION SUCCESSFUL",
        description: "Data packet received by host system.",
        className: "font-mono border border-primary/50 bg-background text-foreground rounded-none",
      });
    },
    onError: (error) => {
      toast({
        title: "TRANSMISSION FAILED",
        description: error.message,
        variant: "destructive",
        className: "font-mono rounded-none",
      });
    },
  });
}
