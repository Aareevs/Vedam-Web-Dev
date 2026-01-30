import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Check, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Access to 5 case studies per month",
      "Basic idea validation",
      "Community access",
      "Save up to 10 ideas",
      "Email support",
    ],
    limitations: [
      "Limited AI analysis",
      "No priority support",
      "Basic features only",
    ],
    cta: "Current Plan",
    highlighted: false,
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "$29",
    period: "per month",
    description: "For serious founders and entrepreneurs",
    features: [
      "Unlimited case studies access",
      "Advanced AI idea validation",
      "Priority community access",
      "Unlimited idea saves",
      "Early access to new features",
      "Priority email & chat support",
      "Exclusive webinars & workshops",
      "Custom workspace organization",
      "Detailed analytics & insights",
      "Export your analysis reports",
    ],
    cta: "Upgrade to Premium",
    highlighted: true,
  },
];

interface MembershipPageProps {
  onNavigate?: (page: string) => void;
}

export function MembershipPage({ onNavigate }: MembershipPageProps) {
  const [activePlan, setActivePlan] = useState("free");

  const handleSubscribe = (planId: string) => {
    if (planId === activePlan) return;
    // Simulate subscription
    setActivePlan(planId);
    alert(`Subscribed to ${plans.find(p => p.id === planId)?.name}!`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-lavender py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl text-white mb-6 font-['Poppins']">
              Choose Your Plan
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Select the perfect plan for your startup journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full border-2 transition-all ${
                    plan.highlighted
                      ? "border-primary shadow-2xl shadow-primary/20 scale-105"
                      : "border-border/50 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {/* Active Badge */}
                  {activePlan === plan.id && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="gradient-lavender text-white px-4 py-1 rounded-full shadow-lavender">
                        Active Plan
                      </Badge>
                    </div>
                  )}

                  {/* Popular Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-3 right-4">
                      <Badge className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8 pt-8">
                    <div className="mb-4 flex justify-center">
                      {plan.highlighted ? (
                        <div className="p-4 rounded-2xl gradient-lavender shadow-lavender">
                          <Zap className="h-8 w-8 text-white" />
                        </div>
                      ) : (
                        <div className="p-4 rounded-2xl bg-muted">
                          <Sparkles className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features List */}
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <div className={`rounded-full p-1 ${
                              plan.highlighted ? "bg-primary/10" : "bg-muted"
                            }`}>
                              <Check className={`h-4 w-4 ${
                                plan.highlighted ? "text-primary" : "text-muted-foreground"
                              }`} />
                            </div>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`w-full rounded-[16px] ${
                        plan.highlighted
                          ? "gradient-lavender hover:opacity-90 shadow-lavender"
                          : activePlan === plan.id
                          ? "bg-muted text-muted-foreground cursor-not-allowed"
                          : "border-2 border-primary text-primary hover:bg-primary/10"
                      }`}
                      onClick={() => handleSubscribe(plan.id)}
                      disabled={activePlan === plan.id}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {activePlan === plan.id ? "Current Plan" : plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="border-border/50 shadow-lg max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="mb-4">Need help choosing?</h3>
                <p className="text-muted-foreground mb-6">
                  Not sure which plan is right for you? We're here to help! Contact our team
                  for personalized recommendations based on your startup goals.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="rounded-[16px] px-6"
                    onClick={() => onNavigate?.("Contact")}
                  >
                    Contact Sales
                  </Button>
                  <Button
                    className="gradient-lavender hover:opacity-90 rounded-[16px] px-6 shadow-lavender"
                    onClick={() => onNavigate?.("Community")}
                  >
                    Join Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="mb-2">Can I switch plans anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="mb-2">What payment methods do you accept?</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept all major credit cards, PayPal, and bank transfers for annual plans.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="mb-2">Is there a free trial for Premium?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! New users get a 14-day free trial of the Premium plan with full access to all features.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h4 className="mb-2">Can I cancel anytime?</h4>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. You can cancel your subscription at any time with no cancellation fees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
