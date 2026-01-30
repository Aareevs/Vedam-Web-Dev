import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Presentation, Sparkles, Download, RefreshCw, CheckCircle, Lightbulb, Target, Users, TrendingUp } from "lucide-react";

interface PitchCreatorPageProps {
  onNavigate?: (page: string) => void;
}

export function PitchCreatorPage({ onNavigate }: PitchCreatorPageProps) {
  const [formData, setFormData] = useState({
    ideaName: "",
    problem: "",
    solution: "",
    audience: "",
    market: "",
    usp: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [generatedSlides, setGeneratedSlides] = useState<any>(null);

  const handleGeneratePitch = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedSlides({
        slides: [
          {
            title: "The Problem",
            content: formData.problem || "Market gap that needs addressing",
            icon: "problem",
          },
          {
            title: "Our Solution",
            content: formData.solution || "Innovative approach to solving the problem",
            icon: "solution",
          },
          {
            title: "Market Opportunity",
            content: formData.market || "Large and growing addressable market",
            icon: "market",
          },
          {
            title: "The Product",
            content: formData.ideaName || "Product overview and key features",
            icon: "product",
          },
        ],
      });
      setIsGenerating(false);
      setShowPitchModal(true);
    }, 2000);
  };

  const isFormValid = formData.ideaName && formData.problem && formData.solution;

  const slideIcons: Record<string, any> = {
    problem: Target,
    solution: Lightbulb,
    market: TrendingUp,
    product: Sparkles,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C9A7EB]/20 via-background to-background py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-lavender mb-6">
              <Presentation className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-gradient-lavender mb-4">Create Your Startup Pitch with AI</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Turn your idea into a professional presentation in minutes. Our AI helps you craft a compelling pitch deck.
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
              <Card className="glass-surface border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Pitch Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Idea Name */}
                  <div className="space-y-2">
                    <Label htmlFor="ideaName">Idea Name *</Label>
                    <Input
                      id="ideaName"
                      placeholder="e.g., AI-powered Fitness Coach"
                      value={formData.ideaName}
                      onChange={(e) => setFormData({ ...formData, ideaName: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Problem */}
                  <div className="space-y-2">
                    <Label htmlFor="problem">Problem Statement *</Label>
                    <Textarea
                      id="problem"
                      placeholder="What problem does your idea solve?"
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      className="min-h-[100px] rounded-xl resize-none"
                    />
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <Label htmlFor="solution">Your Solution *</Label>
                    <Textarea
                      id="solution"
                      placeholder="How does your idea solve this problem?"
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="min-h-[100px] rounded-xl resize-none"
                    />
                  </div>

                  {/* Target Audience */}
                  <div className="space-y-2">
                    <Label htmlFor="audience">Target Audience</Label>
                    <Input
                      id="audience"
                      placeholder="e.g., Busy professionals aged 25-40"
                      value={formData.audience}
                      onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Market Size */}
                  <div className="space-y-2">
                    <Label htmlFor="market">Market Opportunity</Label>
                    <Input
                      id="market"
                      placeholder="e.g., $10B fitness tech market"
                      value={formData.market}
                      onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* USP */}
                  <div className="space-y-2">
                    <Label htmlFor="usp">Unique Selling Proposition</Label>
                    <Textarea
                      id="usp"
                      placeholder="What makes your solution unique?"
                      value={formData.usp}
                      onChange={(e) => setFormData({ ...formData, usp: e.target.value })}
                      className="min-h-[80px] rounded-xl resize-none"
                    />
                  </div>

                  {/* Generate Button */}
                  <Button
                    onClick={handleGeneratePitch}
                    disabled={!isFormValid || isGenerating}
                    className="w-full h-12 gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
                  >
                    {isGenerating ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Generating Pitch...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Pitch
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tips & Info - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="glass-surface border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">Quick Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Keep your problem statement clear and concise</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Focus on the unique value you bring</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p>Use data to support your market claims</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-surface border-border/50 bg-gradient-to-br from-[#C9A7EB]/10 to-[#B084E8]/10">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <Sparkles className="w-8 h-8 mx-auto text-primary" />
                    <p className="text-sm text-muted-foreground">
                      AI will generate a professional pitch deck based on your inputs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <Card className="glass-surface border-border/50">
              <CardHeader>
                <CardTitle>Learn What Makes a Great Pitch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1">Problem First</h4>
                      <p className="text-sm text-muted-foreground">
                        Start with a clear problem that resonates with your audience
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1">Simple Solution</h4>
                      <p className="text-sm text-muted-foreground">
                        Explain your solution in terms anyone can understand
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-lavender flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1">Show Traction</h4>
                      <p className="text-sm text-muted-foreground">
                        Include metrics and validation to build credibility
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <Button
                    variant="outline"
                    className="rounded-xl"
                    onClick={() => onNavigate?.("Resources")}
                  >
                    View Full Pitch Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pitch Output Modal */}
      <Dialog open={showPitchModal} onOpenChange={setShowPitchModal}>
        <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Your AI-Generated Pitch</DialogTitle>
            <DialogDescription>
              Review your pitch deck slides. You can download or regenerate as needed.
            </DialogDescription>
          </DialogHeader>
          {generatedSlides && (
            <div className="space-y-4 py-4">
              {/* Slides Preview */}
              {generatedSlides.slides.map((slide: any, index: number) => {
                const IconComponent = slideIcons[slide.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass-surface border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl gradient-lavender flex items-center justify-center flex-shrink-0">
                            {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                          </div>
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2">
                              Slide {index + 1}
                            </Badge>
                            <h4 className="mb-2">{slide.title}</h4>
                            <p className="text-sm text-muted-foreground">{slide.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={() => setShowPitchModal(false)}
                >
                  Close
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={handleGeneratePitch}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate
                </Button>
                <Button className="flex-1 gradient-lavender hover:opacity-90 rounded-xl shadow-lavender">
                  <Download className="w-4 h-4 mr-2" />
                  Download Slides
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
