import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Play, Radio, Music, Mic, Trophy } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Radio", href: "#radio", icon: Radio },
    { name: "Music", href: "#music", icon: Music },
    { name: "Podcasts", href: "#podcasts", icon: Mic },
    { name: "Sports", href: "#sports", icon: Trophy },
    { name: "Plans", href: "#plans", icon: Play },
    { name: "Support", href: "#support", icon: Menu },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Radio className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">RadioOnline</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-smooth"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-smooth">
              Start Streaming
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-lg text-muted-foreground hover:text-accent transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </a>
                ))}
                <div className="flex flex-col space-y-3 mt-6">
                  <Button variant="ghost" className="justify-start">
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    Start Streaming
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;