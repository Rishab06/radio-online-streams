import { Radio, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Radio Stations", href: "#radio" },
      { name: "Music Streaming", href: "#music" },
      { name: "Podcasts", href: "#podcasts" },
      { name: "Live Sports", href: "#sports" },
      { name: "Mobile Apps", href: "#apps" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Blog", href: "#blog" },
      { name: "Investors", href: "#investors" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Support", href: "#support" },
      { name: "System Status", href: "#status" },
      { name: "API Documentation", href: "#api" },
      { name: "Community", href: "#community" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "DMCA", href: "#dmca" },
      { name: "Content Guidelines", href: "#guidelines" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#facebook" },
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "YouTube", icon: Youtube, href: "#youtube" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Radio className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">RadioOnline</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your ultimate streaming destination for radio, music, podcasts, and live sports. 
                Experience unlimited entertainment with crystal clear quality.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>24/7 Support: 866-408-0361</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>support@radioonline.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-smooth">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-smooth">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-smooth">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-smooth">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-center md:text-left">
              <p>© {currentYear} RadioOnline. All rights reserved.</p>
              <p className="text-sm mt-1">
                All content is licensed and copyright-free for streaming purposes.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;