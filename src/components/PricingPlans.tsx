import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for casual listeners",
      icon: Zap,
      features: [
        "10,000+ Radio Stations",
        "Basic Music Library",
        "Limited Podcasts",
        "Sports Highlights",
        "Ads Included",
        "Standard Quality"
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "9.99",
      period: "month",
      description: "Most popular for music lovers",
      icon: Star,
      features: [
        "50,000+ Radio Stations",
        "40M+ Songs Library",
        "100K+ Podcasts",
        "Live Sports Coverage",
        "Ad-Free Experience",
        "HD Audio Quality",
        "Offline Downloads",
        "Custom Playlists"
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Elite",
      price: "19.99",
      period: "month",
      description: "Ultimate streaming experience",
      icon: Crown,
      features: [
        "Everything in Premium",
        "Exclusive Content",
        "Early Access",
        "Multi-Device Sync",
        "Family Sharing (6 users)",
        "Priority Support",
        "Ultra HD Audio",
        "Concert Live Streams"
      ],
      buttonText: "Go Elite",
      popular: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your 
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Streaming Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade anytime. All plans include access to our vast library of content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative card-gradient border-border/50 hover:border-accent/50 transition-smooth ${
                plan.popular ? 'ring-2 ring-accent glow-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                    plan.name === 'Free' ? 'from-gray-500 to-gray-600' :
                    plan.name === 'Premium' ? 'from-primary to-primary-glow' :
                    'from-accent to-accent-glow'
                  } flex items-center justify-center`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-foreground mb-2">{plan.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg animate-pulse-glow' 
                      : 'bg-gradient-to-r from-muted to-muted-foreground hover:from-primary hover:to-accent'
                  } transition-smooth`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;