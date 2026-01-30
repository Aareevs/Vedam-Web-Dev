import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { DifficultyBadge } from "../DifficultyBadge";
import { LeaderboardWidget } from "../LeaderboardWidget";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ArrowLeft, Clock, Save, Send, Bold, Italic, List, Paperclip, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Progress } from "../ui/progress";

interface CaseDetailPageProps {
  caseId?: string;
  onNavigate?: (page: string) => void;
}

export function CaseDetailPage({ caseId, onNavigate }: CaseDetailPageProps) {
  const [solution, setSolution] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showEvaluationModal, setShowEvaluationModal] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [evaluationData, setEvaluationData] = useState<any>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  // Mock case data
  const caseData = {
    id: caseId || "1",
    company: "TechFlow",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
    title: "Scaling User Acquisition on a Limited Budget",
    description: "TechFlow is a B2B SaaS platform that helps companies manage their workflow automation. They've found initial product-market fit with 100 paying customers, but growth has plateaued.",
    problem: "The company needs to grow from 100 to 1000 users in 3 months with only $5,000 marketing budget. Traditional paid advertising channels are too expensive for their current CAC:LTV ratio. The team consists of 2 founders and 1 developer - no dedicated marketing expertise.",
    difficulty: "Medium" as const,
    category: "Marketing",
    tags: ["Growth", "Marketing", "B2B", "SaaS"],
    estimatedTime: "45 minutes",
    reward: "500 points",
    publishedDate: "Nov 5, 2025",
  };

  // Auto-save simulation
  useEffect(() => {
    if (solution.length > 0) {
      const timer = setTimeout(() => {
        setIsSaving(true);
        setTimeout(() => {
          setIsSaving(false);
          setLastSaved(new Date());
        }, 500);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [solution]);

  const handleSaveDraft = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setLastSaved(new Date());
    }, 500);
  };

  const handleSubmit = () => {
    setIsEvaluating(true);
    // Simulate AI evaluation
    setTimeout(() => {
      setEvaluationData({
        score: Math.floor(Math.random() * 30) + 70, // 70-100
        verdict: Math.random() > 0.3 ? "Pass" : "Try Again",
        feedback: [
          "Strong understanding of low-cost acquisition channels",
          "Good emphasis on content marketing and SEO strategy",
          "Consider adding more detail on measurement and KPIs",
        ],
      });
      setIsEvaluating(false);
      setShowEvaluationModal(true);
    }, 2000);
  };

  const handleBack = () => {
    if (solution.length > 10 && !lastSaved) {
      setShowExitWarning(true);
    } else {
      onNavigate?.("CaseStudies");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-gradient-to-r from-[#C9A7EB]/10 to-transparent">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <img
                src={caseData.logo}
                alt={caseData.company}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h1 className="mb-2">{caseData.title}</h1>
                <p className="text-muted-foreground">{caseData.company}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="rounded-xl"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to List
              </Button>
              <Button
                className="gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
                onClick={() => document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Solving
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <DifficultyBadge difficulty={caseData.difficulty} />
            {caseData.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-lg">
                {tag}
              </Badge>
            ))}
            <Badge variant="secondary" className="rounded-lg ml-auto">
              {caseData.publishedDate}
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Problem Overview */}
            <Card className="glass-surface border-border/50">
              <CardContent className="p-6">
                <h2 className="mb-4">Problem Overview</h2>
                <p className="text-muted-foreground mb-6">{caseData.description}</p>
                <div className="glass-surface p-4 rounded-xl border border-border/30">
                  <h3 className="mb-3">The Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">{caseData.problem}</p>
                </div>
              </CardContent>
            </Card>

            {/* Info Bar */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="glass-surface border-border/50">
                <CardContent className="p-4 text-center">
                  <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground">Estimated Time</p>
                  <p>{caseData.estimatedTime}</p>
                </CardContent>
              </Card>
              <Card className="glass-surface border-border/50">
                <CardContent className="p-4 text-center">
                  <DifficultyBadge difficulty={caseData.difficulty} className="mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Difficulty</p>
                  <p>{caseData.difficulty}</p>
                </CardContent>
              </Card>
              <Card className="glass-surface border-border/50">
                <CardContent className="p-4 text-center">
                  <Badge className="mx-auto mb-2 bg-[#A9F5D0] text-[#0E1020]">
                    {caseData.reward}
                  </Badge>
                  <p className="text-sm text-muted-foreground">Reward</p>
                  <p>Points</p>
                </CardContent>
              </Card>
            </div>

            {/* Workspace Panel */}
            <Card id="workspace" className="glass-surface border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2>Your Solution</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {isSaving ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full"
                        />
                        <span>Saving...</span>
                      </>
                    ) : lastSaved ? (
                      <span>Saved {lastSaved.toLocaleTimeString()}</span>
                    ) : null}
                  </div>
                </div>

                {/* Editor Toolbar */}
                <div className="flex gap-2 mb-4 p-2 bg-muted/30 rounded-lg">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                </div>

                {/* Editor */}
                <Textarea
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  placeholder="Describe your solution strategy here...&#10;&#10;Consider:&#10;• What channels would you prioritize?&#10;• How would you allocate the $5k budget?&#10;• What metrics would you track?&#10;• What's your 90-day execution plan?"
                  className="min-h-[300px] mb-4 rounded-xl resize-none"
                />

                {/* Submission Controls */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={handleSaveDraft}
                    disabled={isSaving}
                    className="rounded-xl"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button
                    className="gradient-lavender hover:opacity-90 rounded-xl shadow-lavender flex-1"
                    onClick={handleSubmit}
                    disabled={solution.length < 50 || isEvaluating}
                  >
                    {isEvaluating ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Evaluating...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Solution
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <LeaderboardWidget />

            {/* Progress Card */}
            <Card className="glass-surface border-border/50">
              <CardContent className="p-6">
                <Tabs defaultValue="history">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="badges">Badges</TabsTrigger>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                    <TabsTrigger value="report">Report</TabsTrigger>
                  </TabsList>
                  <TabsContent value="history" className="mt-4">
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground text-center py-8">
                        No previous attempts
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="badges" className="mt-4">
                    <div className="text-sm text-muted-foreground text-center py-8">
                      Complete cases to earn badges
                    </div>
                  </TabsContent>
                  <TabsContent value="notes" className="mt-4">
                    <Textarea
                      placeholder="Add your notes here..."
                      className="min-h-[120px] rounded-xl resize-none"
                    />
                  </TabsContent>
                  <TabsContent value="report" className="mt-4">
                    {evaluationData ? (
                      <div className="space-y-4">
                        {/* Case Summary */}
                        <div>
                          <h4 className="mb-2 text-sm">Case Summary</h4>
                          <Card className="glass-surface border-border/30">
                            <CardContent className="p-3 text-xs text-muted-foreground">
                              Completed on {new Date().toLocaleDateString()}
                            </CardContent>
                          </Card>
                        </div>

                        {/* AI Evaluation */}
                        <div>
                          <h4 className="mb-2 text-sm">AI Evaluation</h4>
                          <Card className="glass-surface border-border/30">
                            <CardContent className="p-3">
                              <div className="text-center mb-3">
                                <div className="text-2xl text-gradient-lavender mb-1">{evaluationData.score}</div>
                                <Progress value={evaluationData.score} className="h-1.5" />
                              </div>
                              <div className="text-xs text-muted-foreground space-y-1">
                                {evaluationData.feedback.map((item: string, i: number) => (
                                  <div key={i} className="flex gap-1">
                                    <span className="text-primary">•</span>
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Improvement Suggestions */}
                        <div>
                          <h4 className="mb-2 text-sm">Suggestions</h4>
                          <Card className="glass-surface border-border/30">
                            <CardContent className="p-3 text-xs text-muted-foreground space-y-2">
                              <div className="flex gap-2">
                                <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                <span>Consider more specific metrics and KPIs</span>
                              </div>
                              <div className="flex gap-2">
                                <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                <span>Add competitive analysis details</span>
                              </div>
                              <div className="flex gap-2">
                                <CheckCircle2 className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                                <span>Include risk mitigation strategies</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Export Button */}
                        <Button
                          variant="outline"
                          className="w-full rounded-xl text-xs h-8"
                          title="Export as PDF (mock)"
                        >
                          Export Report
                        </Button>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground text-center py-8">
                        Complete the case to view your report
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Evaluation Modal */}
      <Dialog open={showEvaluationModal} onOpenChange={setShowEvaluationModal}>
        <DialogContent className="sm:max-w-[500px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <DialogHeader>
              <DialogTitle className="text-center text-2xl">
                Your Submission Has Been Evaluated
              </DialogTitle>
            </DialogHeader>
            {evaluationData && (
              <div className="py-6 space-y-6">
                {/* Score */}
                <div className="text-center">
                  <div className="text-5xl mb-2 text-gradient-lavender">
                    {evaluationData.score}
                  </div>
                  <p className="text-muted-foreground">out of 100</p>
                  <Progress value={evaluationData.score} className="mt-4" />
                </div>

                {/* Verdict */}
                <div className="text-center">
                  {evaluationData.verdict === "Pass" ? (
                    <div className="flex items-center justify-center gap-2 text-[#A9F5D0]">
                      <CheckCircle2 className="h-6 w-6" />
                      <span className="text-xl">Passed!</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-[#FFD19C]">
                      <AlertCircle className="h-6 w-6" />
                      <span className="text-xl">Try Again</span>
                    </div>
                  )}
                </div>

                {/* Feedback */}
                <div className="space-y-2">
                  <h4>Feedback:</h4>
                  <ul className="space-y-2">
                    {evaluationData.feedback.map((item: string, index: number) => (
                      <li key={index} className="flex gap-2 text-muted-foreground text-sm">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowEvaluationModal(false)}
                    className="flex-1 rounded-xl"
                  >
                    Close
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Leaderboard
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </DialogContent>
      </Dialog>

      {/* Exit Warning Modal */}
      <Dialog open={showExitWarning} onOpenChange={setShowExitWarning}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unsaved Progress</DialogTitle>
            <DialogDescription>
              You have unsaved changes. Are you sure you want to leave?
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button
              className="flex-1 gradient-lavender hover:opacity-90 rounded-xl"
              onClick={() => setShowExitWarning(false)}
            >
              Stay
            </Button>
            <Button
              variant="ghost"
              className="flex-1 rounded-xl"
              onClick={() => {
                setShowExitWarning(false);
                onNavigate?.("CaseStudies");
              }}
            >
              Leave
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
