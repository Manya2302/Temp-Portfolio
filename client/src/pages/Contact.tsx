import { PageHeader } from "@/components/PageHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-contact";
import { Loader2, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const mutation = useContact();
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader 
        title="Transmission Terminal" 
        code="05" 
        description="Establish secure connection. All fields required for protocol compliance." 
      />

      <div className="bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--grid-line))] p-1">
        <div className="border border-[hsl(var(--grid-line))] p-8 md:p-12 bg-[hsl(var(--bg-primary))]">
          
          <div className="mb-8 flex items-center gap-2 text-xs-mono text-[hsl(var(--accent-primary))]">
            <div className="w-2 h-2 bg-[hsl(var(--accent-primary))] animate-pulse" />
            READY_TO_RECEIVE
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs-mono">SENDER_IDENTITY</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="ENTER NAME" 
                          {...field} 
                          className="font-mono bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] focus:border-[hsl(var(--accent-primary))] rounded-none h-12" 
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs-mono">RETURN_ADDRESS</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="ENTER EMAIL" 
                          {...field} 
                          className="font-mono bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] focus:border-[hsl(var(--accent-primary))] rounded-none h-12" 
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs-mono">TOPIC_HEADER</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="ENTER SUBJECT" 
                        {...field} 
                        className="font-mono bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] focus:border-[hsl(var(--accent-primary))] rounded-none h-12" 
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs-mono">DATA_PACKET_CONTENT</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="TYPE MESSAGE..." 
                        {...field} 
                        className="font-mono bg-[hsl(var(--bg-secondary))] border-[hsl(var(--grid-line))] focus:border-[hsl(var(--accent-primary))] rounded-none min-h-[150px] resize-none p-4" 
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full h-14 bg-[hsl(var(--text-primary))] text-[hsl(var(--bg-primary))] hover:bg-[hsl(var(--accent-primary))] hover:text-white rounded-none font-display font-bold text-lg uppercase tracking-wider transition-all duration-300"
              >
                {mutation.isPending ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> UPLOADING...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    INITIATE_TRANSMISSION <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
