import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { BookOpen, FileText, Download, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const blogPosts = [
  {
    title: "How to Validate Your Startup Idea in 7 Days",
    category: "Validation",
    image: "https://images.unsplash.com/photo-1752650733352-aa3e47a1f3d6?w=400&h=250&fit=crop",
    excerpt: "A step-by-step guide to testing your idea before building anything.",
    readTime: "8 min read",
  },
  {
    title: "The Ultimate Guide to Product-Market Fit",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1759884247134-89b8fc25f726?w=400&h=250&fit=crop",
    excerpt: "Learn how to find and measure product-market fit for your startup.",
    readTime: "12 min read",
  },
  {
    title: "Building Your MVP: What to Include and What to Skip",
    category: "Development",
    image: "https://images.unsplash.com/photo-1758876022213-fbf6e54ad52e?w=400&h=250&fit=crop",
    excerpt: "Smart strategies for building your minimum viable product efficiently.",
    readTime: "10 min read",
  },
  {
    title: "Fundraising 101: Your First Pitch Deck",
    category: "Funding",
    image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?w=400&h=250&fit=crop",
    excerpt: "Essential elements every investor pitch deck must have.",
    readTime: "7 min read",
  },
  {
    title: "Using AI to Accelerate Your Startup Journey",
    category: "AI Tools",
    image: "https://images.unsplash.com/photo-1749068372588-39d41a281e22?w=400&h=250&fit=crop",
    excerpt: "Practical ways to leverage AI in your early-stage startup.",
    readTime: "9 min read",
  },
  {
    title: "Community-Driven Growth: Lessons from Successful Founders",
    category: "Growth",
    image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?w=400&h=250&fit=crop",
    excerpt: "How to build and leverage community for sustainable growth.",
    readTime: "11 min read",
  },
];

const caseStudies = [
  {
    title: "How TaskFlow went from idea to $1M ARR in 8 months",
    company: "TaskFlow",
    result: "$1M ARR",
    category: "SaaS Success",
  },
  {
    title: "Building a marketplace: The journey of LocalCraft",
    company: "LocalCraft",
    result: "10K Users",
    category: "Marketplace",
  },
  {
    title: "From side project to Series A: The HealthHub story",
    company: "HealthHub",
    result: "$5M Raised",
    category: "HealthTech",
  },
];

const downloadables = [
  {
    title: "Startup Idea Validation Checklist",
    description: "50-point checklist to validate any startup idea",
    icon: FileText,
  },
  {
    title: "Market Research Template",
    description: "Complete framework for understanding your market",
    icon: TrendingUp,
  },
  {
    title: "Pitch Deck Template (Figma)",
    description: "Professional pitch deck with investor-proven structure",
    icon: BookOpen,
  },
  {
    title: "MVP Planning Worksheet",
    description: "Define your MVP scope and priorities",
    icon: FileText,
  },
];

export function ResourcesPage() {
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
              Resources to Help You Succeed
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Guides, templates, and case studies from successful founders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">
              Learn from experts and experienced founders
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary rounded-full">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" className="group-hover:text-primary">
                        Read More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-muted-foreground">
              Real results from founders who used Idea Forge
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 h-full">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-4 rounded-full">
                      {study.category}
                    </Badge>
                    <h3 className="mb-4 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <div className="mb-4 p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                      <p className="text-sm text-muted-foreground mb-1">Result</p>
                      <p className="text-2xl font-['Poppins'] text-gradient-lavender">
                        {study.result}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full rounded-full">
                      Read Case Study
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadables */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4">Free Templates & Guides</h2>
            <p className="text-muted-foreground">
              Download our proven frameworks and templates
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {downloadables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <Button variant="outline" className="rounded-full">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden gradient-lavender py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Want more resources?</h2>
          <p className="text-white/90 mb-8">Join our community to access exclusive content and webinars</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
            Join Community
          </Button>
        </div>
      </section>
    </div>
  );
}
