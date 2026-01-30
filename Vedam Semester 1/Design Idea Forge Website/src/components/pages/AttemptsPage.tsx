import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { ArrowLeft, Eye, CheckCircle2, XCircle, Clock } from "lucide-react";

interface Attempt {
  id: string;
  caseName: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  score: number;
  status: "completed" | "in-progress" | "failed";
  date: string;
  timeSpent: string;
}

const mockAttempts: Attempt[] = [
  {
    id: "1",
    caseName: "TechStart Expansion Strategy",
    difficulty: "Advanced",
    score: 94,
    status: "completed",
    date: "2024-11-07",
    timeSpent: "45 min",
  },
  {
    id: "2",
    caseName: "HealthCare App User Acquisition",
    difficulty: "Intermediate",
    score: 87,
    status: "completed",
    date: "2024-11-05",
    timeSpent: "38 min",
  },
  {
    id: "3",
    caseName: "E-commerce Conversion Optimization",
    difficulty: "Intermediate",
    score: 0,
    status: "in-progress",
    date: "2024-11-04",
    timeSpent: "12 min",
  },
  {
    id: "4",
    caseName: "SaaS Pricing Strategy",
    difficulty: "Advanced",
    score: 72,
    status: "completed",
    date: "2024-11-02",
    timeSpent: "52 min",
  },
  {
    id: "5",
    caseName: "Mobile App Launch Planning",
    difficulty: "Beginner",
    score: 91,
    status: "completed",
    date: "2024-10-30",
    timeSpent: "28 min",
  },
  {
    id: "6",
    caseName: "Supply Chain Optimization",
    difficulty: "Advanced",
    score: 65,
    status: "failed",
    date: "2024-10-28",
    timeSpent: "42 min",
  },
  {
    id: "7",
    caseName: "Digital Marketing Campaign",
    difficulty: "Intermediate",
    score: 89,
    status: "completed",
    date: "2024-10-25",
    timeSpent: "35 min",
  },
  {
    id: "8",
    caseName: "Customer Retention Strategy",
    difficulty: "Beginner",
    score: 96,
    status: "completed",
    date: "2024-10-22",
    timeSpent: "22 min",
  },
];

interface AttemptsPageProps {
  onNavigate?: (page: string, caseId?: string) => void;
}

export function AttemptsPage({ onNavigate }: AttemptsPageProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "failed":
        return "Not Passed";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const completedAttempts = mockAttempts.filter((a) => a.status === "completed");
  const avgScore = completedAttempts.length
    ? Math.round(completedAttempts.reduce((sum, a) => sum + a.score, 0) / completedAttempts.length)
    : 0;
  const totalTime = mockAttempts.reduce((sum, a) => {
    const minutes = parseInt(a.timeSpent);
    return sum + minutes;
  }, 0);

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
              onClick={() => onNavigate?.("case-studies")}
              className="mb-6 text-white/80 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Button>
            <h1 className="text-4xl md:text-5xl text-white mb-4 font-['Poppins']">
              Your Attempts
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Track your progress and performance across all case studies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          >
            <Card className="border-border/50 shadow-md">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Total Attempts</p>
                <p className="text-3xl">{mockAttempts.length}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Completed</p>
                <p className="text-3xl text-green-500">{completedAttempts.length}</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                <p className="text-3xl text-primary">{avgScore}%</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-md">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Total Time</p>
                <p className="text-3xl">{Math.round(totalTime / 60)}h {totalTime % 60}m</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Attempts Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="mb-2">Attempt History</h3>
                  <p className="text-sm text-muted-foreground">
                    Review all your case study attempts and scores
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Case Name</TableHead>
                        <TableHead className="hidden md:table-cell">Difficulty</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Score</TableHead>
                        <TableHead className="hidden lg:table-cell">Time Spent</TableHead>
                        <TableHead className="hidden sm:table-cell">Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockAttempts.map((attempt, index) => (
                        <motion.tr
                          key={attempt.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-border/50"
                        >
                          <TableCell>
                            <div>
                              <p className="font-medium">{attempt.caseName}</p>
                              <Badge
                                variant="outline"
                                className={`mt-1 rounded-full md:hidden ${getDifficultyColor(attempt.difficulty)}`}
                              >
                                {attempt.difficulty}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge
                              variant="outline"
                              className={`rounded-full ${getDifficultyColor(attempt.difficulty)}`}
                            >
                              {attempt.difficulty}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center gap-2">
                              {getStatusIcon(attempt.status)}
                              <span className="text-sm hidden xl:inline">
                                {getStatusText(attempt.status)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            {attempt.status === "completed" || attempt.status === "failed" ? (
                              <Badge
                                variant="outline"
                                className={`rounded-full ${
                                  attempt.score >= 80
                                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                                    : attempt.score >= 60
                                    ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                    : "bg-red-500/10 text-red-500 border-red-500/20"
                                }`}
                              >
                                {attempt.score}%
                              </Badge>
                            ) : (
                              <span className="text-sm text-muted-foreground">—</span>
                            )}
                          </TableCell>
                          <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                            {attempt.timeSpent}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                            {formatDate(attempt.date)}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onNavigate?.("case-detail", attempt.id)}
                              className="rounded-xl"
                            >
                              <Eye className="h-4 w-4" />
                              <span className="ml-2 hidden xl:inline">View</span>
                            </Button>
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
