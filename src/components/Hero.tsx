import { Button } from "@/components/ui/button";
import { Play, Star, Users, Headphones } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, value: "10M+", label: "Active Listeners" },
    { icon: Headphones, value: "50K+", label: "Radio Stations" },
    { icon: Star, value: "4.8", label: "User Rating" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: "3s"}} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Stream Everything
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everywhere
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover unlimited radio stations, music, podcasts, and live sports from around the world. 
            Your ultimate streaming destination starts here.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg px-8 py-4 text-lg font-semibold rounded-xl transition-spring hover:scale-105"
            >
              <Play className="w-6 h-6 mr-2" />
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-accent/10 hover:border-accent px-8 py-4 text-lg rounded-xl transition-smooth"
            >
              Explore Content
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;