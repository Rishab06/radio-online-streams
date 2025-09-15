import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radio, Music, Mic, Trophy, Play, Globe, Clock, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "radio",
      icon: Radio,
      title: "Live Radio",
      description: "50,000+ radio stations from around the world. Local and international stations covering every genre and language.",
      features: ["AM/FM Stations", "Internet Radio", "Talk Shows", "News & Weather"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "music",
      icon: Music,
      title: "Music Streaming",
      description: "Millions of songs, albums, and playlists. Discover new artists and enjoy your favorite tracks in high quality.",
      features: ["40M+ Songs", "HD Audio Quality", "Custom Playlists", "Offline Downloads"],
      color: "from-green-500 to-green-600",
    },
    {
      id: "podcasts",
      icon: Mic,
      title: "Podcasts",
      description: "Thousands of podcasts covering every topic imaginable. From true crime to comedy, education to entertainment.",
      features: ["100K+ Podcasts", "Original Content", "Exclusive Shows", "Auto Downloads"],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "sports",
      icon: Trophy,
      title: "Live Sports",
      description: "Never miss a game with live sports coverage. Football, basketball, soccer, and more from leagues worldwide.",
      features: ["Live Matches", "Sports Radio", "Game Highlights", "Team Coverage"],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            All Your Entertainment
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              In One Place
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stream radio, music, podcasts, and live sports with crystal clear quality and zero interruptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} className="card-gradient border-border/50 hover:border-accent/50 transition-smooth group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-spring`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-smooth">
                  <Play className="w-4 h-4 mr-2" />
                  Start Listening
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;