import { motion } from "motion/react";
import { Button } from "../ui/button";
import { FeatureCard } from "../FeatureCard";
import { TestimonialCard } from "../TestimonialCard";
import { IdeaCard } from "../IdeaCard";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Lightbulb,
  Target,
  Rocket,
  Users,
  TrendingUp,
  Bot,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "AI Idea Analyzer",
    description: "Get instant feedback on your startup idea with our advanced AI analysis engine.",
  },
  {
    icon: Target,
    title: "Market Fit Finder",
    description: "Discover your target audience and validate market demand in seconds.",
  },
  {
    icon: Rocket,
    title: "Prototype Generator",
    description: "Turn ideas into visual prototypes with AI-powered design tools.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with fellow founders, share ideas, and get valuable feedback.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy Builder",
    description: "Create a customized growth roadmap based on your unique business model.",
  },
  {
    icon: Bot,
    title: "AI Mentor Assistant",
    description: "Get 24/7 guidance from your personal AI startup mentor.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    image: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?w=100&h=100&fit=crop",
    quote: "Motif helped me validate my SaaS idea in just 2 days. The AI insights were spot on!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO, GrowthStack",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "The community feedback feature is invaluable. I found my co-founder here!",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Best platform for early-stage founders. The AI mentor feels like having a YC partner on demand.",
    rating: 5,
  },
];

const communityIdeas = [
  {
    title: "AI-powered meal planning app for busy professionals",
    upvotes: 234,
    comments: 45,
    tags: ["AI", "HealthTech", "Mobile"],
    author: "Alex Kim",
  },
  {
    title: "Blockchain-based freelancer marketplace with escrow",
    upvotes: 189,
    comments: 32,
    tags: ["Web3", "Marketplace", "Fintech"],
    author: "Jordan Lee",
  },
  {
    title: "No-code platform for building internal tools",
    upvotes: 156,
    comments: 28,
    tags: ["SaaS", "No-Code", "B2B"],
    author: "Sam Patel",
  },
];

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-lavender py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl text-white mb-6 font-['Poppins']">
              Turn Your Ideas into Reality with AI
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Validate, analyze, and launch your startup idea using AI and a community of innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-[16px] px-8 shadow-lavender"
                onClick={() => onNavigate?.("Auth")}
              >
                Start Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white/10 rounded-[16px] px-8"
              >
                Explore Features
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">The Challenge Every Founder Faces</h2>
              <p className="text-muted-foreground mb-4">
                Most startup ideas fail not because they're bad, but because founders skip validation. 
                Without proper market research and community feedback, even brilliant ideas can miss the mark.
              </p>
              <p className="text-muted-foreground">
                Traditional validation takes weeks or months. By then, your window of opportunity might be gone.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">How Motif Helps</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">AI-Powered Analysis</p>
                    <p className="text-muted-foreground">Get instant insights on market fit, competition, and viability.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Community Support</p>
                    <p className="text-muted-foreground">Tap into a network of experienced founders for feedback.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Rapid Prototyping</p>
                    <p className="text-muted-foreground">Generate visual prototypes and pitch decks in minutes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Powerful Features for Founders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to validate, build, and launch your startup idea with confidence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">How It Works</h2>
            <p className="text-muted-foreground">Four simple steps to validate your idea</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Enter your idea", desc: "Describe your startup concept in your own words" },
              { num: "02", title: "Get instant AI insights", desc: "Our AI analyzes market fit and potential" },
              { num: "03", title: "Share with the community", desc: "Get feedback from fellow founders" },
              { num: "04", title: "Successfully deploy your product", desc: "Launch with confidence using our roadmap" },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="gradient-lavender text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-['Poppins']">
                  {step.num}
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Case Studies Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Real Business Challenges</h2>
            <p className="text-muted-foreground">Practice solving real-world startup problems and learn from the best</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                company: "TechFlow",
                logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
                title: "Scaling User Acquisition",
                description: "Grow from 100 to 1000 users with $5k budget",
                difficulty: "Medium",
                category: "Marketing",
                attempts: 234,
              },
              {
                company: "GrowthStack",
                logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
                title: "Product-Market Fit Crisis",
                description: "Find the right market for your AI tool",
                difficulty: "Hard",
                category: "Product",
                attempts: 189,
              },
              {
                company: "MealPal",
                logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop",
                title: "Optimizing Operations",
                description: "Reduce delivery time by 30% while cutting costs",
                difficulty: "Medium",
                category: "Operations",
                attempts: 156,
              },
            ].map((caseItem, index) => (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="glass-surface border-border/50 hover:shadow-lavender transition-all cursor-pointer h-full"
                  onClick={() => onNavigate?.("CaseDetail")}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4 mb-4">
                      <img
                        src={caseItem.logo}
                        alt={caseItem.company}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-1 truncate">{caseItem.title}</h3>
                        <p className="text-muted-foreground text-sm">{caseItem.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={caseItem.difficulty === "Hard" ? "bg-[#FF7C7C] text-white" : "bg-[#FFD19C] text-[#0E1020]"}>
                        {caseItem.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {caseItem.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-[16px] px-8"
              onClick={() => onNavigate?.("CaseStudies")}
            >
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Community Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Trending Ideas in the Community</h2>
            <p className="text-muted-foreground">See what other founders are building</p>
          </motion.div>
          <div className="space-y-4 max-w-4xl mx-auto mb-8">
            {communityIdeas.map((idea, index) => (
              <motion.div
                key={idea.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <IdeaCard {...idea} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-[16px] px-8"
              onClick={() => onNavigate?.("Community")}
            >
              Join the Community
            </Button>
          </div>
        </div>
      </section>

      {/* Best Startups Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Best Startups Grown from Our Platform</h2>
            <p className="text-muted-foreground">Success stories from founders who started here</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "TechFlow",
                logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop",
                tagline: "AI-powered workflow automation",
                description: "From idea validation to $2M ARR in 18 months",
                metrics: { users: "50K+", funding: "$5M", growth: "+300%" },
              },
              {
                name: "GrowthStack",
                logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
                tagline: "Analytics platform for startups",
                description: "Built MVP on Motif, now serving 10K+ companies",
                metrics: { users: "10K+", funding: "$3M", growth: "+250%" },
              },
              {
                name: "MealPal",
                logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop",
                tagline: "Smart meal planning for health",
                description: "Validated concept here, launched in 3 cities",
                metrics: { users: "100K+", funding: "$8M", growth: "+400%" },
              },
            ].map((startup, index) => (
              <motion.div
                key={startup.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-surface border-border/50 hover:shadow-lavender transition-all h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={startup.logo}
                        alt={startup.name}
                        className="w-20 h-20 rounded-2xl object-cover mb-4"
                      />
                      <h3 className="mb-2">{startup.name}</h3>
                      <p className="text-muted-foreground mb-4">{startup.tagline}</p>
                      <p className="text-sm text-muted-foreground mb-6">{startup.description}</p>
                      <div className="w-full grid grid-cols-3 gap-4 pt-4 border-t border-border">
                        <div>
                          <div className="text-primary">{startup.metrics.users}</div>
                          <div className="text-xs text-muted-foreground">Users</div>
                        </div>
                        <div>
                          <div className="text-primary">{startup.metrics.funding}</div>
                          <div className="text-xs text-muted-foreground">Funding</div>
                        </div>
                        <div>
                          <div className="text-primary">{startup.metrics.growth}</div>
                          <div className="text-xs text-muted-foreground">Growth</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-8">Proudly sponsored by</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["Partner A", "Partner B", "Partner C", "Partner D"].map((partner) => (
                <Badge key={partner} variant="outline" className="px-6 py-3 text-base">
                  {partner}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Ads Section */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center bg-background/50">
            <p className="text-muted-foreground">Google Ads Placeholder</p>
            <p className="text-sm text-muted-foreground mt-2">Advertisement space</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden gradient-lavender py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Start building your next idea today — it's free to try</h2>
          <p className="text-white/90 mb-8">No credit card required. Get started in 60 seconds.</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-[16px] px-8 shadow-lg" onClick={() => onNavigate?.("Auth")}>
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}