import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { toast } from "sonner@2.0.3";
import { Camera, Users, Lightbulb, BookOpen, Mail, Linkedin, ThumbsUp, CheckCircle2, Shield, Bell, Palette, Trash2, Upload, X, Smile } from "lucide-react";

// Mock user data
const mockUser = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  about: "Founder & entrepreneur passionate about AI, SaaS, and building products that matter. Always looking to connect with fellow innovators.",
  linkedin: "https://linkedin.com/in/alexjohnson",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  connections: 342,
  ideasSaved: 28,
  caseStudiesSaved: 15,
};

const upvotedIdeas = [
  {
    id: 1,
    title: "AI-powered meal planning app for busy professionals",
    date: "2024-11-05",
    upvotes: 234,
  },
  {
    id: 2,
    title: "Blockchain-based freelancer marketplace with escrow",
    date: "2024-11-03",
    upvotes: 189,
  },
  {
    id: 3,
    title: "No-code platform for building internal tools",
    date: "2024-11-01",
    upvotes: 156,
  },
  {
    id: 4,
    title: "Virtual reality training platform for medical students",
    date: "2024-10-28",
    upvotes: 142,
  },
  {
    id: 5,
    title: "Sustainable packaging marketplace for e-commerce",
    date: "2024-10-25",
    upvotes: 128,
  },
];

const solvedCases = [
  {
    id: 1,
    title: "Uber - Urban Transportation Disruption",
    completedDate: "2024-11-04",
    difficulty: "Advanced",
    score: 95,
  },
  {
    id: 2,
    title: "Airbnb - Trust in Peer-to-Peer Marketplace",
    completedDate: "2024-10-30",
    difficulty: "Advanced",
    score: 88,
  },
  {
    id: 3,
    title: "Spotify - Music Streaming Revolution",
    completedDate: "2024-10-22",
    difficulty: "Intermediate",
    score: 92,
  },
  {
    id: 4,
    title: "Slack - Team Communication Platform",
    completedDate: "2024-10-18",
    difficulty: "Beginner",
    score: 100,
  },
];

interface ProfilePageProps {
  onNavigate?: (page: string) => void;
}

const emojis = ["😊", "🚀", "💡", "🎯", "⭐", "🔥", "💪", "🌟", "🎨", "🧠", "👨‍💼", "👩‍💼", "🦄", "🌈", "⚡"];

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const [user, setUser] = useState(mockUser);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [editForm, setEditForm] = useState({
    name: user.name,
    email: user.email,
    about: user.about,
    linkedin: user.linkedin,
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  // Settings state
  const [settings, setSettings] = useState({
    makeIdeasPublic: true,
    emailUpdates: true,
    aiInsights: true,
    darkMode: false,
  });

  const handleSaveProfile = () => {
    setUser({
      ...user,
      ...editForm,
    });
    setIsEditOpen(false);
  };

  const handleCancel = () => {
    setEditForm({
      name: user.name,
      email: user.email,
      about: user.about,
      linkedin: user.linkedin,
    });
    setIsEditOpen(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

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

  const handleSettingChange = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    toast.success("Settings saved");
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    toast.success("Account deletion request submitted");
  };

  const handleAvatarChange = (type: "emoji" | "upload" | "remove") => {
    if (type === "emoji" && selectedEmoji) {
      setUser({ ...user, avatar: "" }); // Would set emoji as avatar
      toast.success("Profile picture updated to emoji");
      setIsAvatarModalOpen(false);
    } else if (type === "upload") {
      toast.info("File upload would be handled here");
      setIsAvatarModalOpen(false);
    } else if (type === "remove") {
      setUser({ ...user, avatar: "" });
      toast.success("Profile picture removed");
      setIsAvatarModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-border/50 shadow-lg mb-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(181, 199, 255, 0.05) 0%, rgba(162, 108, 253, 0.05) 100%)' }}>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Profile Picture */}
                <div className="relative group">
                  <Avatar className="h-32 w-32 border-4" style={{ borderColor: 'rgba(181, 199, 255, 0.3)' }}>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-3xl">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <button
                    onClick={() => setIsAvatarModalOpen(true)}
                    className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <Camera className="h-8 w-8 text-white" />
                  </button>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h1 className="text-3xl mb-2" style={{ color: '#D8E0FF' }}>{user.name}</h1>
                  <p className="text-muted-foreground max-w-2xl mb-4">
                    {user.about}
                  </p>
                </div>

                {/* Edit Button */}
                <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                  <DialogTrigger asChild>
                    <Button className="gradient-lavender hover:opacity-90 rounded-[16px] px-6 shadow-lavender" style={{ boxShadow: '0 0 12px rgba(165, 187, 255, 0.25)' }}>
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Update your profile information and social links.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={editForm.email}
                          onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="about">About</Label>
                        <Textarea
                          id="about"
                          rows={4}
                          value={editForm.about}
                          onChange={(e) => setEditForm({ ...editForm, about: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile</Label>
                        <Input
                          id="linkedin"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={editForm.linkedin}
                          onChange={(e) => setEditForm({ ...editForm, linkedin: e.target.value })}
                        />
                      </div>
                    </div>
                    <DialogFooter className="gap-2">
                      <Button variant="outline" onClick={handleCancel} className="rounded-[16px]">
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile} className="gradient-lavender hover:opacity-90 rounded-[16px] shadow-lavender">
                        Save Changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow" style={{ background: 'rgba(180, 200, 255, 0.05)' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl" style={{ background: 'rgba(181, 199, 255, 0.15)' }}>
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-3xl mb-1">{user.connections}</p>
                  <p className="text-muted-foreground">Connections</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow" style={{ background: 'rgba(180, 200, 255, 0.05)' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl" style={{ background: 'rgba(181, 199, 255, 0.15)' }}>
                  <Lightbulb className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <p className="text-3xl mb-1">{user.ideasSaved}</p>
                  <p className="text-muted-foreground">Ideas Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-md hover:shadow-lg transition-shadow" style={{ background: 'rgba(180, 200, 255, 0.05)' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl" style={{ background: 'rgba(181, 199, 255, 0.15)' }}>
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <p className="text-3xl mb-1">{user.caseStudiesSaved}</p>
                  <p className="text-muted-foreground">Cases Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* History Section - Tabbed View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-border/50 shadow-lg" style={{ background: 'rgba(180, 200, 255, 0.05)' }}>
              <CardHeader>
                <CardTitle style={{ color: '#D8E0FF' }}>Activity History & Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="ideas" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="ideas" style={{ borderBottom: '2px solid transparent' }} className="data-[state=active]:border-b-2 data-[state=active]:border-[rgba(181,199,255,0.6)]">Ideas</TabsTrigger>
                    <TabsTrigger value="cases" style={{ borderBottom: '2px solid transparent' }} className="data-[state=active]:border-b-2 data-[state=active]:border-[rgba(181,199,255,0.6)]">Cases</TabsTrigger>
                    <TabsTrigger value="settings" style={{ borderBottom: '2px solid transparent' }} className="data-[state=active]:border-b-2 data-[state=active]:border-[rgba(181,199,255,0.6)]">Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="ideas" className="space-y-3">
                    {upvotedIdeas.map((idea) => (
                      <div
                        key={idea.id}
                        className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="mb-2">{idea.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                {idea.upvotes} upvotes
                              </span>
                              <span>{formatDate(idea.date)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="cases" className="space-y-3">
                    {solvedCases.map((caseStudy) => (
                      <div
                        key={caseStudy.id}
                        className="p-4 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4>{caseStudy.title}</h4>
                              <Badge variant="outline" className={`${getDifficultyColor(caseStudy.difficulty)} rounded-full`}>
                                {caseStudy.difficulty}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Score: {caseStudy.score}%
                              </span>
                              <span>{formatDate(caseStudy.completedDate)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-6">
                    {/* Privacy Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-primary" />
                        <h4>Privacy</h4>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div>
                          <p className="mb-1">Make my ideas public</p>
                          <p className="text-sm text-muted-foreground">Allow others to see your submitted ideas</p>
                        </div>
                        <Switch
                          checked={settings.makeIdeasPublic}
                          onCheckedChange={() => handleSettingChange("makeIdeasPublic")}
                        />
                      </div>
                    </div>

                    {/* Notifications Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Bell className="w-5 h-5 text-primary" />
                        <h4>Notifications</h4>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div>
                          <p className="mb-1">Email updates</p>
                          <p className="text-sm text-muted-foreground">Receive email notifications about your activity</p>
                        </div>
                        <Switch
                          checked={settings.emailUpdates}
                          onCheckedChange={() => handleSettingChange("emailUpdates")}
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div>
                          <p className="mb-1">AI insights</p>
                          <p className="text-sm text-muted-foreground">Get AI-powered tips and recommendations</p>
                        </div>
                        <Switch
                          checked={settings.aiInsights}
                          onCheckedChange={() => handleSettingChange("aiInsights")}
                        />
                      </div>
                    </div>

                    {/* Theme Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Palette className="w-5 h-5 text-primary" />
                        <h4>Theme</h4>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                        <div>
                          <p className="mb-1">Dark mode</p>
                          <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                        </div>
                        <Switch
                          checked={settings.darkMode}
                          onCheckedChange={() => handleSettingChange("darkMode")}
                        />
                      </div>
                    </div>

                    {/* Account Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-primary" />
                        <h4>Account</h4>
                      </div>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full justify-start rounded-xl"
                        >
                          Change Password
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start rounded-xl text-destructive hover:text-destructive"
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="border-border/50 shadow-lg" style={{ background: 'rgba(180, 200, 255, 0.05)' }}>
              <CardHeader>
                <CardTitle style={{ color: '#D8E0FF' }}>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="p-2 rounded-lg" style={{ background: 'rgba(181, 199, 255, 0.15)' }}>
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href={`mailto:${user.email}`}
                      className="text-sm hover:text-primary transition-colors truncate block"
                    >
                      {user.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="p-2 rounded-lg" style={{ background: 'rgba(181, 199, 255, 0.15)' }}>
                    <Linkedin className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <a
                      href={user.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-600 transition-colors truncate block"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl"
                  onClick={() => onNavigate?.("Membership")}
                >
                  View Your Plan
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl"
                  onClick={() => onNavigate?.("Community")}
                >
                  Browse Community
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl"
                  onClick={() => onNavigate?.("Case Studies")}
                >
                  Explore Case Studies
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button
              variant="outline"
              className="flex-1 rounded-xl"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              className="flex-1 rounded-xl"
              onClick={handleDeleteAccount}
            >
              Confirm Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Profile Picture Modal */}
      <Dialog open={isAvatarModalOpen} onOpenChange={setIsAvatarModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile Picture</DialogTitle>
            <DialogDescription>
              Choose an emoji, upload a photo, or remove your current picture.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Option 1: Choose Emoji */}
            <div>
              <Label className="mb-3 block">Choose an Emoji</Label>
              <div className="grid grid-cols-5 gap-2">
                {emojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`text-3xl p-3 rounded-xl hover:bg-primary/10 transition-colors border-2 ${
                      selectedEmoji === emoji ? "border-primary bg-primary/10" : "border-transparent"
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              {selectedEmoji && (
                <Button
                  onClick={() => handleAvatarChange("emoji")}
                  className="w-full mt-3 gradient-lavender hover:opacity-90 rounded-xl shadow-lavender"
                >
                  <Smile className="h-4 w-4 mr-2" />
                  Use {selectedEmoji} as Avatar
                </Button>
              )}
            </div>

            {/* Option 2: Upload Photo */}
            <div>
              <Label className="mb-3 block">Upload Photo</Label>
              <Button
                variant="outline"
                onClick={() => handleAvatarChange("upload")}
                className="w-full rounded-xl"
              >
                <Upload className="h-4 w-4 mr-2" />
                Choose File
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: JPG, PNG (Max 5MB)
              </p>
            </div>

            {/* Option 3: Remove Current */}
            <div>
              <Button
                variant="outline"
                onClick={() => handleAvatarChange("remove")}
                className="w-full rounded-xl text-destructive hover:text-destructive"
              >
                <X className="h-4 w-4 mr-2" />
                Remove Current Picture
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
