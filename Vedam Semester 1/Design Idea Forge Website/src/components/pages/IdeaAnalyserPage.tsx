import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Sparkles, Target, TrendingUp, Users, DollarSign, AlertCircle, CheckCircle, Lightbulb, Zap, FileText, Download, FolderOpen } from "lucide-react";
import { Progress } from "../ui/progress";

interface AnalysisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  marketSize: string;
  competition: string;
  viability: string;
}

export function IdeaAnalyserPage() {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [targetMarket, setTargetMarket] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [showDemoReportModal, setShowDemoReportModal] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        score: 78,
        strengths: [
          "Clear problem-solution fit",
          "Large addressable market",
          "Scalable business model",
          "Strong differentiation potential"
        ],
        weaknesses: [
          "High customer acquisition cost",
          "Competitive market landscape",
          "Technical implementation complexity"
        ],
        recommendations: [
          "Start with a niche market segment to validate the concept",
          "Build an MVP with core features only",
          "Focus on one key differentiator",
          "Establish partnerships early for distribution",
          "Consider a freemium pricing model for initial traction"
        ],
        marketSize: "Large ($10B+ TAM)",
        competition: "Moderate - 5-10 direct competitors",
        viability: "High potential with proper execution"
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "from-green-500/20 to-emerald-500/20";
    if (score >= 60) return "from-yellow-500/20 to-amber-500/20";
    return "from-red-500/20 to-orange-500/20";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C9A7EB]/20 via-background to-background py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-lavender mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-gradient-lavender mb-4">AI Idea Analyser</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant AI-powered feedback on your startup idea. Analyze market potential, competition, and viability in seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Form - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      Tell Us About Your Idea
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onNavigate?.("saved-ideas")}
                      className="rounded-xl"
                    >
                      <FolderOpen className="w-4 h-4 mr-2" />
                      View Saved Ideas
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Idea Title */}
                  <div className="space-y-2">
                    <Label htmlFor="ideaTitle">Idea Title</Label>
                    <Input
                      id="ideaTitle"
                      placeholder="e.g., AI-powered fitness coach for busy professionals"
                      value={ideaTitle}
                      onChange={(e) => setIdeaTitle(e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Idea Description */}
                  <div className="space-y-2">
                    <Label htmlFor="ideaDescription">Detailed Description</Label>
                    <Textarea
                      id="ideaDescription"
                      placeholder="Example: A platform that helps students manage study schedules with AI reminders."
                      value={ideaDescription}
                      onChange={(e) => setIdeaDescription(e.target.value)}
                      className="min-h-[160px] rounded-xl resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      {ideaDescription.length}/1000 characters
                    </p>
                  </div>

                  {/* Target Market */}
                  <div className="space-y-2">
                    <Label htmlFor="targetMarket">Target Market</Label>
                    <Input
                      id="targetMarket"
                      placeholder="e.g., Working professionals aged 25-40"
                      value={targetMarket}
                      onChange={(e) => setTargetMarket(e.target.value)}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Analyze Button */}
                  <Button
                    onClick={handleAnalyze}
                    disabled={!ideaTitle || !ideaDescription || isAnalyzing}
                    className="w-full h-12 gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
                  >
                    {isAnalyzing ? (
                      <>
                        <Zap className="w-4 h-4 mr-2 animate-pulse" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Analyze My Idea
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Stats - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Analysis Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Ideas Analyzed</span>
                    <span className="font-medium">12,450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="font-medium text-green-600">67%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Score</span>
                    <span className="font-medium">72/100</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50 bg-gradient-to-br from-[#C9A7EB]/10 to-[#B084E8]/10">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Sparkles className="w-8 h-8 mx-auto text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Our AI analyzes market data, competition, and trends to give you actionable insights.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Analysis Results */}
          {analysisResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 space-y-6"
            >
              {/* Score Card */}
              <Card className={`glass-card border-border/50 bg-gradient-to-br ${getScoreBg(analysisResult.score)}`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                      <h3 className="mb-2">Overall Viability Score</h3>
                      <p className="text-muted-foreground">
                        Based on market analysis, competition, and execution feasibility
                      </p>
                    </div>
                    <div className="text-center">
                      <div className={`text-6xl ${getScoreColor(analysisResult.score)}`}>
                        {analysisResult.score}
                      </div>
                      <div className="text-muted-foreground">out of 100</div>
                      <Progress value={analysisResult.score} className="mt-4 h-2 w-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="glass-card border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Market Size</div>
                        <div className="font-medium">{analysisResult.marketSize}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Competition</div>
                        <div className="font-medium">{analysisResult.competition}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Viability</div>
                        <div className="font-medium">{analysisResult.viability}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {analysisResult.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-600">
                      <AlertCircle className="w-5 h-5" />
                      Areas to Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {analysisResult.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Recommendations */}
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    AI Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {analysisResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5 flex-shrink-0">
                          {index + 1}
                        </Badge>
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="glass-card border-border/50 bg-gradient-to-br from-[#C9A7EB]/10 to-[#B084E8]/10">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="mb-1">Ready to validate your idea?</h3>
                      <p className="text-sm text-muted-foreground">
                        Join our community and get feedback from fellow founders
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="rounded-xl">
                        Save Report
                      </Button>
                      <Button className="gradient-lavender hover:opacity-90 rounded-xl">
                        Share in Community
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* How It Works - When no results */}
          {!analysisResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <h2 className="text-center mb-8">How Our AI Analysis Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card border-border/50 text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl gradient-lavender flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-base">Market Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      We analyze market size, growth trends, and addressable opportunities
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50 text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl gradient-lavender flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-base">Competition Check</h3>
                    <p className="text-sm text-muted-foreground">
                      Identify competitors and find your unique positioning
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50 text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl gradient-lavender flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-base">Viability Score</h3>
                    <p className="text-sm text-muted-foreground">
                      Get an overall score based on multiple success factors
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Demo Section - See how AI analyzes your idea */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-center mb-8">See how AI analyzes your idea</h2>
            <Card className="glass-card border-border/50 hover:border-primary/50 hover:shadow-lavender transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="mb-2">AI-Powered Personal Finance Assistant</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="rounded-full">Fintech</Badge>
                          <Badge variant="outline" className="rounded-full">Automation</Badge>
                          <Badge variant="outline" className="rounded-full">Productivity</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      An AI-powered mobile app that automatically categorizes expenses, provides personalized budgeting recommendations, and sends smart alerts to help users achieve their financial goals. The app learns from user behavior to offer increasingly accurate insights over time.
                    </p>
                    <div className="flex gap-3">
                      <Button
                        className="gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
                        onClick={() => setShowDemoReportModal(true)}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        View Report
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-32 flex md:flex-col items-center justify-center gap-4 md:gap-2 p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                    <div className="text-center">
                      <div className="text-4xl text-green-600 mb-1">85</div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Demo Idea Report Modal */}
      <Dialog open={showDemoReportModal} onOpenChange={setShowDemoReportModal}>
        <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>AI Analysis Report</DialogTitle>
            <DialogDescription>
              Comprehensive analysis for AI-Powered Personal Finance Assistant
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Idea Overview */}
            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Idea Overview
              </h4>
              <Card className="glass-surface border-border/50">
                <CardContent className="p-4 text-sm text-muted-foreground">
                  An AI-powered mobile app targeting millennials and Gen Z users who want to improve their financial literacy and achieve savings goals. The app uses machine learning to provide personalized insights.
                </CardContent>
              </Card>
            </div>

            {/* Market Analysis */}
            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Market Analysis
              </h4>
              <Card className="glass-surface border-border/50">
                <CardContent className="p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Size:</span>
                    <span>$12B (TAM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Growth Rate:</span>
                    <span className="text-green-600">+18% YoY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Maturity:</span>
                    <span>Growing</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Competitor Insights */}
            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Competitor Insights
              </h4>
              <Card className="glass-surface border-border/50">
                <CardContent className="p-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Mint and YNAB dominate but lack AI personalization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Opportunity for better mobile-first UX with gamification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Few competitors focus on behavioral finance insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Feasibility Score */}
            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Feasibility Score
              </h4>
              <Card className="glass-surface border-border/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl text-green-600">85%</span>
                    <Badge className="bg-green-500 text-white border-0">High Viability</Badge>
                  </div>
                  <Progress value={85} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Strong market demand, proven business model, and manageable technical complexity
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations */}
            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                AI Recommendations
              </h4>
              <Card className="glass-surface border-border/50">
                <CardContent className="p-4 space-y-3">
                  <div className="flex gap-3">
                    <Badge variant="outline" className="flex-shrink-0">1</Badge>
                    <p className="text-sm text-muted-foreground">
                      Focus on one specific user persona initially (e.g., freelancers with irregular income)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Badge variant="outline" className="flex-shrink-0">2</Badge>
                    <p className="text-sm text-muted-foreground">
                      Partner with banks for secure API access to simplify onboarding
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                className="flex-1 rounded-xl"
                onClick={() => setShowDemoReportModal(false)}
              >
                Close
              </Button>
              <Button className="flex-1 gradient-lavender hover:opacity-90 rounded-xl shadow-lavender">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
