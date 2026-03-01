import { useMutation } from "@tanstack/react-query";
import type { ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function useContact() {
  const { toast } = useToast();
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

  return useMutation<
    { success: true },
    Error,
    ContactInput
  >({
    mutationFn: async (data: ContactInput) => {
      if (!accessKey?.trim()) {
        throw new Error(
          "Contact form is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in .env (get a free key at https://web3forms.com)."
        );
      }

      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          message: data.message,
          subject: "Portfolio contact",
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          json.body?.message || json.message || "Failed to send message. Please try again."
        );
      }

      if (json.success !== true) {
        throw new Error(
          json.body?.message || json.message || "Failed to send message. Please try again."
        );
      }

      return { success: true as const };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
        className: "bg-background border-primary text-foreground border",
      });
    },
    onError: (error) => {
      toast({
        title: "Delivery Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
