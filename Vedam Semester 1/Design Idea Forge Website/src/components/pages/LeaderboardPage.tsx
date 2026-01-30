import { motion } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Trophy, Medal, Award, ArrowLeft, TrendingUp } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  points: number;
  casesCompleted: number;
  avgScore: number;
  badges: string[];
  trend?: "up" | "down" | "same";
}

const mockLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Alex Kim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    points: 2847,
    casesCompleted: 12,
    avgScore: 94,
    badges: ["Top Contributor", "Perfect Score"],
    trend: "up",
  },
  {
    rank: 2,
    name: "Jordan Lee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    points: 2156,
    casesCompleted: 8,
    avgScore: 91,
    badges: ["Rising Star"],
    trend: "same",
  },
  {
    rank: 3,
    name: "Sam Patel",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    points: 1923,
    casesCompleted: 15,
    avgScore: 88,
    badges: ["Most Cases", "Consistent"],
    trend: "up",
  },
  {
    rank: 4,
    name: "Maya Rodriguez",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    points: 1654,
    casesCompleted: 7,
    avgScore: 92,
    badges: ["High Scorer"],
    trend: "down",
  },
  {
    rank: 5,
    name: "Chen Wei",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    points: 1432,
    casesCompleted: 9,
    avgScore: 86,
    badges: ["Fast Solver"],
    trend: "up",
  },
  {
    rank: 6,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    points: 1298,
    casesCompleted: 6,
    avgScore: 89,
    badges: ["Quality Focus"],
  },
  {
    rank: 7,
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    points: 1157,
    casesCompleted: 10,
    avgScore: 84,
    badges: ["Dedicated"],
  },
  {
    rank: 8,
    name: "Sarah Miller",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    points: 1089,
    casesCompleted: 5,
    avgScore: 90,
    badges: ["Newcomer"],
    trend: "up",
  },
  {
    rank: 9,
    name: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    points: 967,
    casesCompleted: 8,
    avgScore: 82,
    badges: ["Steady"],
  },
  {
    rank: 10,
    name: "Lisa Wang",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    points: 845,
    casesCompleted: 4,
    avgScore: 88,
    badges: ["Rising"],
    trend: "up",
  },
];

interface LeaderboardPageProps {
  onNavigate?: (page: string) => void;
}

export function LeaderboardPage({ onNavigate }: LeaderboardPageProps) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-8 w-8 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-8 w-8 text-gray-400" />;
    if (rank === 3) return <Medal className="h-8 w-8 text-orange-600" />;
    return null;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
    if (rank === 2) return "bg-gray-400/20 text-gray-400 border-gray-400/30";
    if (rank === 3) return "bg-orange-600/20 text-orange-600 border-orange-600/30";
    return "bg-primary/20 text-primary border-primary/30";
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
              onClick={() => onNavigate?.("case-studies")}
              className="mb-6 text-white/80 hover:text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-12 w-12 text-yellow-300" />
              <h1 className="text-4xl md:text-5xl text-white font-['Poppins']">
                Global Leaderboard
              </h1>
            </div>
            <p className="text-xl text-white/80 max-w-2xl">
              Top performers solving real business challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top 3 Podium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {mockLeaderboard.slice(0, 3).map((entry, index) => (
              <Card
                key={entry.rank}
                className={`border-border/50 shadow-xl ${
                  entry.rank === 1 ? "md:order-2 md:scale-110 md:z-10" : entry.rank === 2 ? "md:order-1" : "md:order-3"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{getRankIcon(entry.rank)}</div>
                  <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={entry.avatar} alt={entry.name} />
                    <AvatarFallback>{entry.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="mb-2">{entry.name}</h3>
                  <p className="text-3xl mb-3 text-primary">{entry.points}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {entry.casesCompleted} cases • {entry.avgScore}% avg
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {entry.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="text-xs rounded-full"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Full Leaderboard Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left text-sm text-muted-foreground">
                        <th className="p-4 w-16">Rank</th>
                        <th className="p-4">User</th>
                        <th className="p-4 text-center hidden md:table-cell">Cases</th>
                        <th className="p-4 text-center hidden lg:table-cell">Avg Score</th>
                        <th className="p-4 text-right">Points</th>
                        <th className="p-4 text-center w-16 hidden sm:table-cell">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockLeaderboard.map((entry, index) => (
                        <motion.tr
                          key={entry.rank}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                        >
                          <td className="p-4">
                            <Badge
                              variant="outline"
                              className={`rounded-full ${getRankBadgeColor(entry.rank)}`}
                            >
                              #{entry.rank}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={entry.avatar} alt={entry.name} />
                                <AvatarFallback>{entry.name[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{entry.name}</p>
                                <div className="flex gap-1 mt-1">
                                  {entry.badges.slice(0, 2).map((badge) => (
                                    <Badge
                                      key={badge}
                                      variant="secondary"
                                      className="text-xs rounded-full"
                                    >
                                      {badge}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-center hidden md:table-cell">
                            {entry.casesCompleted}
                          </td>
                          <td className="p-4 text-center hidden lg:table-cell">
                            <Badge variant="outline" className="rounded-full">
                              {entry.avgScore}%
                            </Badge>
                          </td>
                          <td className="p-4 text-right">
                            <span className="text-primary">{entry.points}</span>
                          </td>
                          <td className="p-4 text-center hidden sm:table-cell">
                            {entry.trend === "up" && (
                              <TrendingUp className="h-4 w-4 text-green-500 mx-auto" />
                            )}
                            {entry.trend === "down" && (
                              <TrendingUp className="h-4 w-4 text-red-500 mx-auto rotate-180" />
                            )}
                            {entry.trend === "same" && (
                              <div className="w-4 h-0.5 bg-muted-foreground mx-auto" />
                            )}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Want to climb the leaderboard? Complete more case studies!
              </p>
              <Button
                onClick={() => onNavigate?.("case-studies")}
                className="gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
              >
                <Award className="h-4 w-4 mr-2" />
                Browse Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
