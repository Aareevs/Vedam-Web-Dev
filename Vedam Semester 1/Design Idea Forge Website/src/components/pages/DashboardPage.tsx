import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Lightbulb, BookOpen, Zap, ArrowRight, TrendingUp, Users, CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface DashboardPageProps {
  onNavigate?: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [userName] = useState("Alex Johnson");
  const [currentTip, setCurrentTip] = useState(0);

  const stats = [
    {
      label: "Ideas Submitted",
      value: "12",
      icon: Lightbulb,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Cases Attempted",
      value: "8",
      icon: BookOpen,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      label: "Credits Remaining",
      value: "15",
      icon: Zap,
      color: "text-[#FFD19C]",
      bgColor: "bg-[#FFD19C]/10",
    },
  ];

  const recentActivity = [
    {
      type: "idea",
      title: "AI-powered meal planning app analyzed",
      date: "2 hours ago",
      status: "completed",
      icon: Lightbulb,
    },
    {
      type: "case",
      title: "Uber - Urban Transportation case started",
      date: "5 hours ago",
      status: "in-progress",
      icon: BookOpen,
    },
    {
      type: "comment",
      title: "You received feedback on 'Blockchain marketplace'",
      date: "1 day ago",
      status: "new",
      icon: Users,
    },
    {
      type: "idea",
      title: "No-code platform idea saved",
      date: "2 days ago",
      status: "completed",
      icon: Lightbulb,
    },
    {
      type: "case",
      title: "Airbnb case study completed - Score: 88%",
      date: "3 days ago",
      status: "completed",
      icon: CheckCircle2,
    },
  ];

  const aiTips = [
    "💡 Start with a clear problem statement - it's the foundation of every successful pitch.",
    "🚀 Focus on one key feature that differentiates you from competitors.",
    "📊 Validate your assumptions with real user feedback before building.",
    "💰 Your first 100 users are more valuable than your first dollar.",
    "🎯 Niche down - it's easier to dominate a small market first.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % aiTips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-[#A9F5D0] bg-[#A9F5D0]/10";
      case "in-progress":
        return "text-[#FFD19C] bg-[#FFD19C]/10";
      case "new":
        return "text-primary bg-primary/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C9A7EB]/20 via-background to-background py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-2">Welcome back, {userName} 👋</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your ideas and progress
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-surface border-border/50 hover:shadow-lavender transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                          </div>
                          <div>
                            <p className="text-3xl mb-1">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="glass-surface border-border/50">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
                        >
                          <div className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center flex-shrink-0">
                            <activity.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="mb-1 truncate">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.date}</p>
                          </div>
                          <Badge className={`${getStatusColor(activity.status)} border-0 capitalize`}>
                            {activity.status === "in-progress" ? "In Progress" : activity.status}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Go to Profile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="glass-surface border-border/50 bg-gradient-to-br from-[#C9A7EB]/10 to-[#B084E8]/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h3 className="mb-2">Complete Your Profile</h3>
                        <p className="text-sm text-muted-foreground">
                          Add more details to help the community know you better
                        </p>
                      </div>
                      <Button
                        className="gradient-lavender hover:opacity-90 rounded-xl shadow-lavender whitespace-nowrap"
                        onClick={() => onNavigate?.("Profile")}
                      >
                        Go to Profile
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="glass-surface border-border/50">
                  <CardHeader>
                    <CardTitle className="text-base">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl hover:gradient-lavender hover:text-white hover:border-transparent transition-all group"
                      onClick={() => onNavigate?.("Idea Analyser")}
                    >
                      <Lightbulb className="w-4 h-4 mr-2 group-hover:text-white" />
                      Analyze Idea
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl hover:gradient-lavender hover:text-white hover:border-transparent transition-all group"
                      onClick={() => onNavigate?.("Case Studies")}
                    >
                      <BookOpen className="w-4 h-4 mr-2 group-hover:text-white" />
                      Solve Case
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl hover:gradient-lavender hover:text-white hover:border-transparent transition-all group"
                      onClick={() => onNavigate?.("Pitch Creator")}
                    >
                      <Sparkles className="w-4 h-4 mr-2 group-hover:text-white" />
                      Create Pitch
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tips from AI */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="glass-surface border-border/50 bg-gradient-to-br from-[#C9A7EB]/10 to-[#B084E8]/10">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Tips from AI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div
                      key={currentTip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-sm leading-relaxed"
                    >
                      {aiTips[currentTip]}
                    </motion.div>
                    <div className="flex gap-1 mt-4 justify-center">
                      {aiTips.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 rounded-full transition-all ${
                            index === currentTip ? "w-6 bg-primary" : "w-1.5 bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Upgrade CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="glass-surface border-primary/50 border-2 gradient-lavender text-white">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-10 h-10 mx-auto mb-3" />
                    <h4 className="mb-2">Upgrade to Premium</h4>
                    <p className="text-sm text-white/90 mb-4">
                      Unlock unlimited analyses and exclusive features
                    </p>
                    <Button
                      className="w-full bg-white text-primary hover:bg-white/90 rounded-xl"
                      onClick={() => onNavigate?.("Membership")}
                    >
                      View Plans
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
