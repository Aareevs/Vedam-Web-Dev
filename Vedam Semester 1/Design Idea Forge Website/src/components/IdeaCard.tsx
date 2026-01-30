import { useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface IdeaCardProps {
  title: string;
  description?: string;
  upvotes: number;
  comments: number;
  tags: string[];
  author: string;
  authorAvatar?: string;
  onCommentClick?: () => void;
}

export function IdeaCard({ title, description, upvotes, comments, tags, author, authorAvatar, onCommentClick }: IdeaCardProps) {
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [currentUpvotes, setCurrentUpvotes] = useState(upvotes);

  const handleUpvote = () => {
    if (hasUpvoted) {
      // If already upvoted, remove upvote
      setHasUpvoted(false);
      setCurrentUpvotes(currentUpvotes - 1);
    } else {
      // Add upvote
      setHasUpvoted(true);
      setCurrentUpvotes(currentUpvotes + 1);
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow border-border/50">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <button 
              onClick={handleUpvote}
              className={`hover:bg-primary/10 rounded-lg p-2 transition-all ${
                hasUpvoted ? "bg-primary/20" : ""
              }`}
            >
              <ArrowUp className={`h-5 w-5 ${hasUpvoted ? "text-primary fill-primary" : "text-primary"}`} />
            </button>
            <span className="text-sm">{currentUpvotes}</span>
          </div>
          <div className="flex-1">
            <h4 className="mb-2 hover:text-primary cursor-pointer transition-colors">
              {title}
            </h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
            {description && (
              <p className="text-sm text-[#B0B3C3] mb-3 line-clamp-2 md:line-clamp-3 leading-[22px]">
                {description}
              </p>
            )}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={authorAvatar} alt={author} />
                  <AvatarFallback>{author[0]}</AvatarFallback>
                </Avatar>
                <span>by {author}</span>
              </div>
              <button
                onClick={onCommentClick}
                className="flex items-center gap-1 hover:text-primary transition-colors group"
                title="View Comments"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>{comments}</span>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
