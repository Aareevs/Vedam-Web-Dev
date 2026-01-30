import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Search, ArrowLeft, Edit, BarChart3, Trash2, Filter } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface SavedIdea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  createdDate: string;
  score?: number;
  shared: boolean;
}

const mockSavedIdeas: SavedIdea[] = [
  {
    id: "1",
    title: "AI-powered meal planning app for busy professionals",
    description: "An AI-powered assistant that helps users manage daily meal planning using predictive nutrition analysis.",
    tags: ["AI", "HealthTech", "Mobile"],
    createdDate: "2024-11-05",
    score: 85,
    shared: true,
  },
  {
    id: "2",
    title: "Sustainable packaging marketplace",
    description: "Connect e-commerce brands with eco-friendly packaging suppliers featuring carbon footprint tracking.",
    tags: ["Sustainability", "E-commerce", "B2B"],
    createdDate: "2024-11-03",
    score: 78,
    shared: false,
  },
  {
    id: "3",
    title: "Virtual reality training for medical students",
    description: "Immersive VR simulations for medical procedures in a safe, controlled environment.",
    tags: ["VR", "EdTech", "Healthcare"],
    createdDate: "2024-11-01",
    score: 92,
    shared: true,
  },
  {
    id: "4",
    title: "No-code platform for building internal tools",
    description: "Empower teams to build custom workflows without writing code.",
    tags: ["SaaS", "No-Code", "B2B"],
    createdDate: "2024-10-28",
    score: 81,
    shared: false,
  },
  {
    id: "5",
    title: "Mental health chatbot for college students",
    description: "AI-powered 24/7 mental health support with crisis intervention.",
    tags: ["AI", "HealthTech", "EdTech"],
    createdDate: "2024-10-25",
    shared: false,
  },
  {
    id: "6",
    title: "Smart parking solution for urban areas",
    description: "IoT-enabled parking with real-time availability and dynamic pricing.",
    tags: ["IoT", "Smart City", "Mobile"],
    createdDate: "2024-10-20",
    score: 76,
    shared: true,
  },
];

interface SavedIdeasPageProps {
  onNavigate?: (page: string) => void;
}

export function SavedIdeasPage({ onNavigate }: SavedIdeasPageProps) {
  const [ideas, setIdeas] = useState<SavedIdea[]>(mockSavedIdeas);
  const [sortBy, setSortBy] = useState<"date" | "az" | "tags">("date");
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
    setDeleteId(null);
    toast.success("Idea deleted successfully");
  };

  const handleAnalyzeAgain = (idea: SavedIdea) => {
    toast.success("Redirecting to Idea Analyzer...");
    onNavigate?.("idea-analyzer");
  };

  const handleEdit = (idea: SavedIdea) => {
    toast.info("Opening editor...");
  };

  // Sort ideas
  const sortedIdeas = [...ideas].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
    } else if (sortBy === "az") {
      return a.title.localeCompare(b.title);
    } else {
      return a.tags[0]?.localeCompare(b.tags[0] || "") || 0;
    }
  });

  // Filter by search
  const filteredIdeas = sortedIdeas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden gradient-lavender py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => onNavigate?.("home")}
              className="mb-6 text-white/80 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl text-white mb-4 font-['Poppins']">
              My Ideas Vault
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              All your generated and saved ideas in one place
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters & Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
              <div className="flex gap-2 flex-wrap items-center">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <Button
                  variant={sortBy === "date" ? "default" : "outline"}
                  onClick={() => setSortBy("date")}
                  className="rounded-full"
                  size="sm"
                >
                  Sort by Date
                </Button>
                <Button
                  variant={sortBy === "az" ? "default" : "outline"}
                  onClick={() => setSortBy("az")}
                  className="rounded-full"
                  size="sm"
                >
                  A–Z
                </Button>
                <Button
                  variant={sortBy === "tags" ? "default" : "outline"}
                  onClick={() => setSortBy("tags")}
                  className="rounded-full"
                  size="sm"
                >
                  Tags
                </Button>
              </div>

              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search your ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>
                {filteredIdeas.length} {filteredIdeas.length === 1 ? "idea" : "ideas"} saved
              </p>
              <p>
                {filteredIdeas.filter((i) => !i.shared).length} private
              </p>
            </div>
          </motion.div>

          {/* Ideas Grid */}
          {filteredIdeas.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-muted-foreground mb-4">
                {searchQuery ? "No ideas match your search" : "No saved ideas yet"}
              </p>
              <Button
                onClick={() => onNavigate?.("idea-analyzer")}
                className="gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
              >
                Generate Your First Idea
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIdeas.map((idea, index) => (
                <motion.div
                  key={idea.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 hover:shadow-lg transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="flex-1 mb-2 line-clamp-2">{idea.title}</h3>
                        {!idea.shared && (
                          <Badge variant="secondary" className="ml-2 rounded-full text-xs">
                            Private
                          </Badge>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {idea.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {idea.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="rounded-full text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {idea.score && (
                        <div className="mb-4 p-3 rounded-xl bg-primary/10">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Validation Score</span>
                            <span className="font-medium text-primary">{idea.score}/100</span>
                          </div>
                        </div>
                      )}

                      <div className="text-xs text-muted-foreground mb-4">
                        Created {formatDate(idea.createdDate)}
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(idea)}
                          className="flex-1 rounded-xl"
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleAnalyzeAgain(idea)}
                          className="flex-1 rounded-xl gradient-lavender hover:opacity-90"
                        >
                          <BarChart3 className="h-3 w-3 mr-1" />
                          Analyze
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setDeleteId(idea.id)}
                          className="rounded-xl text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Idea?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your saved idea.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && handleDelete(deleteId)}
              className="gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
