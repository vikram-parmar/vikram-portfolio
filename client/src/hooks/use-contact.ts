import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput, type ContactResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useContact() {
  const { toast } = useToast();

  return useMutation<ContactResponse, Error, ContactInput>({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message. Please try again.");
      }

      return res.json();
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
