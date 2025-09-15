import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, HelpCircle, Clock, Globe } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "24/7 Phone Support",
      description: "Talk to our experts anytime, day or night",
      contact: "866-408-0361",
      action: "Call Now",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions and get responses within 2 hours",
      contact: "support@radioonline.com",
      action: "Send Email",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const faqs = [
    {
      question: "How do I start my free trial?",
      answer: "Simply click 'Start Free Trial' and create your account. No credit card required for the first 30 days.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! You can cancel your subscription at any time from your account settings. No cancellation fees.",
    },
    {
      question: "Is RadioOnline available worldwide?",
      answer: "RadioOnline is available in 180+ countries. Content may vary by region due to licensing agreements.",
    },
    {
      question: "What audio quality do you offer?",
      answer: "We offer multiple quality levels: Standard (128kbps), HD (320kbps), and Ultra HD (FLAC) for Elite subscribers.",
    },
  ];

  return (
    <section id="support" className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            We're Here to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Help You
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get support when you need it. Our team is available 24/7 to ensure you have the best streaming experience.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {supportOptions.map((option, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:border-accent/50 transition-smooth text-center group">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center group-hover:scale-110 transition-spring`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground mb-2">{option.title}</CardTitle>
                <p className="text-muted-foreground">{option.description}</p>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-accent mb-4">{option.contact}</div>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-smooth">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-4">Need Immediate Help?</h4>
              <p className="text-muted-foreground mb-6">
                Our toll-free support line is available 24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg text-lg px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 866-408-0361
                </Button>
                <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Help Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Support;