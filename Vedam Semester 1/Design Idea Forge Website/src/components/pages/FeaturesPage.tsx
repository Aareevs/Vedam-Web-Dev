import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Lightbulb, Target, Rocket, BarChart3, FileText } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const tools = [
  {
    icon: Lightbulb,
    title: "AI Idea Analyzer",
    description: "Get comprehensive analysis of your startup idea including market potential, competitive landscape, and viability scores. Our AI considers hundreds of data points to give you actionable insights.",
    image: "https://images.unsplash.com/photo-1752650733352-aa3e47a1f3d6?w=600&h=400&fit=crop",
  },
  {
    icon: Target,
    title: "Market Fit Finder",
    description: "Discover your ideal customer profile, understand market size, and identify the perfect positioning for your product. Get detailed demographic and psychographic insights powered by real market data.",
    image: "https://images.unsplash.com/photo-1759884247134-89b8fc25f726?w=600&h=400&fit=crop",
  },
  {
    icon: Rocket,
    title: "Prototype Generator",
    description: "Transform your idea into visual prototypes, wireframes, and mockups. Our AI understands your concept and generates professional-looking designs that you can share with stakeholders.",
    image: "https://images.unsplash.com/photo-1758876022213-fbf6e54ad52e?w=600&h=400&fit=crop",
  },
  {
    icon: BarChart3,
    title: "SWOT Planner",
    description: "Automatically generate detailed SWOT analysis for your startup idea. Understand your strengths, weaknesses, opportunities, and threats before you invest time and resources.",
    image: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?w=600&h=400&fit=crop",
  },
  {
    icon: FileText,
    title: "Pitch Deck Assistant",
    description: "Create investor-ready pitch decks in minutes. Our AI helps structure your story, suggests compelling content, and generates professional slides based on proven frameworks.",
    image: "https://images.unsplash.com/photo-1749068372588-39d41a281e22?w=600&h=400&fit=crop",
  },
];

export function FeaturesPage() {
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
              Powerful Tools for Every Stage
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From initial concept to investor pitch, we've got you covered with AI-powered tools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Showcase */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <tool.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2>{tool.title}</h2>
                      <p className="text-muted-foreground text-lg">{tool.description}</p>
                      <Button className="gradient-lavender hover:opacity-90 rounded-[16px] shadow-lavender">
                        Try It Now
                      </Button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
                      <ImageWithFallback
                        src={tool.image}
                        alt={tool.title}
                        className="relative rounded-3xl shadow-2xl w-full h-auto"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative md:order-1">
                      <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
                      <ImageWithFallback
                        src={tool.image}
                        alt={tool.title}
                        className="relative rounded-3xl shadow-2xl w-full h-auto"
                      />
                    </div>
                    <div className="space-y-6 md:order-2">
                      <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                        <tool.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2>{tool.title}</h2>
                      <p className="text-muted-foreground text-lg">{tool.description}</p>
                      <Button className="gradient-lavender hover:opacity-90 rounded-[16px] shadow-lavender">
                        Try It Now
                      </Button>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden gradient-lavender py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to validate your idea?</h2>
          <p className="text-white/90 mb-8">Start using all features for free today</p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
}
