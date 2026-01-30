import { Linkedin, MessageSquare, Github, Twitter, Mail } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Tagline */}
          <div>
            <h3 className="font-['Poppins'] text-2xl text-gradient-lavender font-bold mb-4">
              Motif.
            </h3>
            <p className="text-muted-foreground mb-4">
              AI-powered platform helping founders validate and launch successful startups.
            </p>
            <a 
              href="mailto:support@motif.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">support@motif.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Case Studies", "Idea Analyser", "Community", "Resources", "About"].map((link) => (
                <button
                  key={link}
                  onClick={() => onNavigate(link)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4">Features</h4>
            <div className="flex flex-col gap-2">
              {["Pitch Creator", "Pricing", "Contact", "Resources"].map((link) => (
                <button
                  key={link}
                  onClick={() => onNavigate(link)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          © 2025 Motif. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
