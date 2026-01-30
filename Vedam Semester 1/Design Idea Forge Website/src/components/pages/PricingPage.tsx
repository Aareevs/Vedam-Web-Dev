import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Check, Sparkles, Zap, Crown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface PricingPageProps {
  onNavigate?: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Free",
      icon: Sparkles,
      price: billingPeriod === "monthly" ? "0" : "0",
      period: "forever",
      description: "Perfect for exploring and getting started",
      features: [
        "5 AI idea analyses per month",
        "Access to community ideas",
        "3 case studies per month",
        "Basic pitch templates",
        "Community support",
      ],
      cta: "Get Started",
      popular: false,
      ctaVariant: "outline" as const,
    },
    {
      name: "Premium",
      icon: Crown,
      price: billingPeriod === "monthly" ? "29" : "290",
      period: billingPeriod === "monthly" ? "per month" : "per year",
      savings: billingPeriod === "annual" ? "Save $58/year" : null,
      description: "For serious founders ready to build",
      features: [
        "Unlimited AI idea analyses",
        "Unlimited case studies",
        "Advanced pitch creator",
        "AI mentor assistant (24/7)",
        "Priority community features",
        "Download all reports as PDF",
        "Early access to new features",
        "1-on-1 founder consultation",
      ],
      cta: "Upgrade to Premium",
      popular: true,
      ctaVariant: "default" as const,
    },
  ];

  const faqs = [
    {
      question: "What's included in the Free plan?",
      answer: "The Free plan includes 5 AI idea analyses per month, access to community ideas, 3 case studies per month, basic pitch templates, and community support. It's perfect for exploring the platform and getting started with idea validation.",
    },
    {
      question: "Can I upgrade anytime?",
      answer: "Yes! You can upgrade from Free to Premium at any time. Your upgraded features will be available immediately, and you'll be charged on a prorated basis if you're switching mid-cycle.",
    },
    {
      question: "How do credits work?",
      answer: "Credits are used for AI analyses and advanced features. Free users get 5 credits per month, while Premium users get unlimited credits. Credits reset at the beginning of each billing cycle.",
    },
    {
      question: "What happens if I cancel Premium?",
      answer: "If you cancel Premium, you'll continue to have access to Premium features until the end of your current billing period. After that, your account will revert to the Free plan, and you'll keep all your saved data and progress.",
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! We offer a 50% discount for students and educators. Please contact our support team with your valid student ID or educational institution email to receive your discount code.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C9A7EB]/20 via-background to-background py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-gradient-lavender mb-4">Simple, Transparent Pricing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the plan that's right for you. No hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1 bg-muted/50 rounded-full">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingPeriod === "monthly"
                    ? "gradient-lavender text-white shadow-lavender"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annual")}
                className={`px-6 py-2 rounded-full transition-all ${
                  billingPeriod === "annual"
                    ? "gradient-lavender text-white shadow-lavender"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <Badge className="ml-2 bg-[#A9F5D0] text-[#0E1020] border-0">
                  Save 17%
                </Badge>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={plan.popular ? "md:scale-105" : ""}
              >
                <Card
                  className={`relative glass-surface border-border/50 h-full transition-all hover:shadow-lavender ${
                    plan.popular ? "border-primary/50" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="gradient-lavender border-0 px-4 py-1 shadow-lavender">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    {/* Plan Header */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 rounded-xl gradient-lavender flex items-center justify-center mx-auto mb-4">
                        <plan.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                      <div className="mb-2">
                        <span className="text-5xl">${plan.price}</span>
                        <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                      </div>
                      {plan.savings && (
                        <Badge variant="outline" className="text-[#A9F5D0] border-[#A9F5D0]">
                          {plan.savings}
                        </Badge>
                      )}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant={plan.ctaVariant}
                      className={`w-full rounded-xl h-12 ${
                        plan.popular
                          ? "gradient-lavender hover:opacity-90 shadow-lavender"
                          : ""
                      }`}
                      onClick={() => onNavigate?.(plan.name === "Free" ? "Auth" : "Membership")}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-surface border-border/50">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-left hover:text-primary hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* Help CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Card className="glass-surface border-border/50 bg-gradient-to-br from-[#C9A7EB]/10 to-[#B084E8]/10">
              <CardContent className="p-8">
                <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="mb-2">Need more help?</h3>
                <p className="text-muted-foreground mb-6">
                  Our support team is here to answer any questions you might have
                </p>
                <Button
                  variant="outline"
                  className="rounded-xl"
                  onClick={() => onNavigate?.("Contact")}
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden gradient-lavender py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to validate your next big idea?</h2>
          <p className="text-white/90 mb-8">Join thousands of founders building with Motif</p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-[16px] px-8 shadow-lg"
            onClick={() => onNavigate?.("Auth")}
          >
            Start Free Today
          </Button>
        </div>
      </section>
    </div>
  );
}
