import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardContent className="p-6">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
