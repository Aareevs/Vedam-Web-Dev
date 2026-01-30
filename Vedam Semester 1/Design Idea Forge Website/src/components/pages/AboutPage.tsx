import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Target, Rocket, Users, Award } from "lucide-react";

const team = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    initials: "SM",
  },
  {
    name: "David Park",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    initials: "DP",
  },
  {
    name: "Maya Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    initials: "MR",
  },
  {
    name: "James Chen",
    role: "Lead AI Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    initials: "JC",
  },
];

const timeline = [
  { year: "2023", event: "Motif founded", desc: "Started with a vision to democratize startup validation" },
  { year: "2023 Q3", event: "Beta Launch", desc: "Released to 100 early adopter founders" },
  { year: "2024 Q1", event: "AI Integration", desc: "Launched advanced AI analysis engine" },
  { year: "2024 Q3", event: "Community Milestone", desc: "Reached 10,000+ active founders" },
  { year: "2025", event: "Series A Funding", desc: "Raised to expand globally and add more features" },
];

export function AboutPage() {
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
              Empowering founders to turn ideas into action
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We believe every great company starts with a validated idea and a supportive community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Idea Forge, we're on a mission to eliminate the guesswork from starting a company. 
                Too many brilliant ideas never see the light of day because founders lack the tools and 
                community to validate them properly.
              </p>
              <p className="text-muted-foreground mb-4">
                We combine cutting-edge AI technology with the wisdom of an engaged founder community 
                to help you make informed decisions about your startup journey.
              </p>
              <p className="text-muted-foreground">
                Whether you're a first-time founder or a serial entrepreneur, we're here to accelerate 
                your path from idea to market.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Target className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="mb-2">10,000+</h3>
                  <p className="text-muted-foreground">Ideas Validated</p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="mb-2">50,000+</h3>
                  <p className="text-muted-foreground">Active Founders</p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Rocket className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="mb-2">1,200+</h3>
                  <p className="text-muted-foreground">Launched Startups</p>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="mb-2">$50M+</h3>
                  <p className="text-muted-foreground">Funding Raised</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Story</h2>
            <p className="text-muted-foreground">The journey from idea to impact</p>
          </motion.div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="gradient-lavender text-white w-24 h-24 rounded-2xl flex items-center justify-center font-['Poppins']">
                    {item.year}
                  </div>
                </div>
                <Card className="flex-1 border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              A group of founders, builders, and dreamers committed to your success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Our Vision for the Future</h2>
            <p className="text-muted-foreground mb-4">
              We envision a world where anyone with a great idea has the tools, knowledge, and community 
              to turn it into reality. No barriers, no gatekeepers—just pure innovation powered by AI 
              and human collaboration.
            </p>
            <p className="text-muted-foreground">
              In the next five years, we aim to help launch 100,000 new startups and create a global 
              network of founders who support, inspire, and learn from each other.
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Team */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate minds behind Motif, working to empower founders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Agrima Gupta */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:shadow-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <Avatar className="h-32 w-32 border-4 border-primary/30 ring-4 ring-primary/10">
                      <AvatarFallback className="text-3xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        AG
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="mb-2">Agrima Gupta</h3>
                  <Badge variant="secondary" className="mb-4 rounded-full">
                    Founder
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate about empowering entrepreneurs with AI-driven tools. 
                    With a background in product design and startup strategy, Agrima leads 
                    the vision of making idea validation accessible to everyone.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Awaneesh Gupta */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all hover:shadow-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <Avatar className="h-32 w-32 border-4 border-primary/30 ring-4 ring-primary/10">
                      <AvatarFallback className="text-3xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        AW
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="mb-2">Awaneesh Gupta</h3>
                  <Badge variant="secondary" className="mb-4 rounded-full">
                    Co-Founder
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    A technology enthusiast and community builder dedicated to creating 
                    platforms that connect founders. Awaneesh brings expertise in AI, 
                    machine learning, and building scalable systems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
