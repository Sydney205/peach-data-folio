import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter, MessageSquare, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mpqgeaqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        throw new Error("Formspree submission failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
          {/* Left column stays exactly the same as your original design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              LET'S <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8">SYNC</span> DATA.
            </h2>
            <p className="text-xl text-background/60 mb-12 max-w-md leading-relaxed">
              Open for consulting, collaborative research, or full-time opportunities. 
              Let's turn your variables into victories.
            </p>

            <div className="space-y-6">
              <a href="mailto:diekechi@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-background/5 border border-background/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-background/40 uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-bold">diekechi@gmail.com</p>
                </div>
              </a>
              <div className="flex gap-4 pt-6">
                {[
                  { icon: <Github size={24} />, href: "https://github.com/Sydney205" },
                  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/chinedu-dieke-4860b2247" },
                  { icon: <Twitter size={24} />, href: "https://x.com/Sydney2O5" },
                  { icon: <MessageSquare size={24} />, href: "sms:+2347079745372" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-14 h-14 rounded-2xl bg-background/5 border border-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-background/5 border border-background/10 backdrop-blur-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-background/60 font-bold uppercase tracking-widest text-xs">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} disabled={isSubmitting} className="bg-background/5 border-background/10 text-background h-14 rounded-xl focus:border-accent transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-background/60 font-bold uppercase tracking-widest text-xs">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} disabled={isSubmitting} className="bg-background/5 border-background/10 text-background h-14 rounded-xl focus:border-accent transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-background/60 font-bold uppercase tracking-widest text-xs">Project Details</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your data challenge..." {...field} disabled={isSubmitting} className="bg-background/5 border-background/10 text-background min-h-[150px] rounded-xl focus:border-accent transition-colors resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl font-black text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      TRANSMITTING...
                    </>
                  ) : (
                    "SEND SIGNAL"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
