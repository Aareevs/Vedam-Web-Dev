import { Moon, Sun, Sparkles, User, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export function Navbar({ isDark, toggleTheme, currentPage, onNavigate, isLoggedIn = false, onLogout }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Navigation links change based on login state
  const navLinks = isLoggedIn 
    ? ["Home", "Idea Analyser", "Case Studies", "Community", "Pricing"]
    : ["Home", "Case Studies", "Idea Analyser", "Community", "Pricing", "About"];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("Home")}
            className="transition-transform hover:scale-105"
          >
            <span className="font-['Poppins'] text-2xl text-gradient-lavender font-bold">
              Motif.
            </span>
          </button>

          {/* Center Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => onNavigate(link)}
                className={`transition-colors hover:text-primary ${
                  currentPage === link ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right side - Mobile menu + Theme toggle + Auth/Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu - Three Dots */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full"
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link}
                      onClick={() => {
                        onNavigate(link);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left py-2 px-4 rounded-lg transition-colors hover:bg-accent ${
                        currentPage === link ? "text-primary bg-accent" : "text-foreground/70"
                      }`}
                    >
                      {link}
                    </button>
                  ))}
                  {isLoggedIn && (
                    <button
                      onClick={() => {
                        onLogout?.();
                        setMobileMenuOpen(false);
                      }}
                      className="text-left py-2 px-4 rounded-lg transition-colors hover:bg-accent text-foreground/70"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Theme Toggle */}
            {!isDark && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                <Moon className="h-5 w-5" />
              </Button>
            )}
            {isDark && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                <Sun className="h-5 w-5" />
              </Button>
            )}
            
            {/* User Avatar/Login Button - Hidden on small mobile */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => onNavigate("Profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>View Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onNavigate("Membership")}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    <span>Your Plan</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout}>
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                className="gradient-lavender hover:opacity-90 rounded-[16px] px-4 sm:px-6 shadow-lavender"
                onClick={() => onNavigate("Auth")}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="hidden xs:inline">Start for Free</span>
                <span className="xs:hidden">Start</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}