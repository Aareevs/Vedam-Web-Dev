import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { Mail, MessageSquare, Twitter } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-lavender py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl text-white mb-6 font-['Poppins']">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border/50 shadow-xl">
                <CardContent className="p-8">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us what's on your mind..."
                          rows={6}
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full gradient-lavender hover:opacity-90 rounded-[16px] h-12 shadow-lavender"
                      >
                        Send Message
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-2">Thank you for reaching out!</h3>
                      <p className="text-muted-foreground mb-6">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="outline"
                        className="rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6">Other Ways to Connect</h2>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? We're active on multiple channels and always happy to chat.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1">Email</h4>
                        <p className="text-muted-foreground mb-2">
                          For general inquiries and support
                        </p>
                        <a
                          href="mailto:hello@ideaforge.com"
                          className="text-primary hover:underline"
                        >
                          hello@ideaforge.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1">Discord Community</h4>
                        <p className="text-muted-foreground mb-2">
                          Join our active founder community
                        </p>
                        <a
                          href="#"
                          className="text-primary hover:underline"
                        >
                          discord.gg/ideaforge
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Twitter className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1">Twitter</h4>
                        <p className="text-muted-foreground mb-2">
                          Follow us for updates and tips
                        </p>
                        <a
                          href="#"
                          className="text-primary hover:underline"
                        >
                          @ideaforge
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="p-6 bg-muted/50 rounded-2xl">
                <h4 className="mb-3">Office Hours</h4>
                <p className="text-muted-foreground mb-2">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                </p>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
