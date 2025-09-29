import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  MessageSquare, 
  Mail,
  Clock,
  FileText,
  Settings,
  AlertTriangle,
  CheckCircle,
  Book,
  Video,
  Users,
  ExternalLink
} from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat Support",
      description: "Get instant help with our live chat system",
      action: "Start Chat",
      availability: "24/7 Available",
      color: "text-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions via email",
      action: "Send Email",
      availability: "Response in 24h",
      color: "text-green-500"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Browse our comprehensive guides",
      action: "View Docs",
      availability: "Always Updated",
      color: "text-purple-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      action: "Watch Videos",
      availability: "HD Quality",
      color: "text-red-500"
    }
  ];

  const commonIssues = [
    {
      question: "App won't install on my device",
      answer: "Make sure you have enabled 'Unknown Sources' in your device settings and have sufficient storage space (at least 1GB free).",
      type: "installation"
    },
    {
      question: "Videos are exporting with watermark",
      answer: "Ensure you downloaded the Pro version from our official link. The watermark should be automatically removed in the Pro version.",
      type: "feature"
    },
    {
      question: "App crashes when opening",
      answer: "Try clearing the app cache, restart your device, or reinstall the app. Make sure your Android version is 5.0 or higher.",
      type: "technical"
    },
    {
      question: "Can't access premium effects",
      answer: "All premium effects should be unlocked by default. If not, try restarting the app or downloading the latest version.",
      type: "feature"
    },
    {
      question: "Export quality is poor",
      answer: "Check your export settings and ensure you're selecting the highest quality option (4K if your device supports it).",
      type: "quality"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'installation': return Settings;
      case 'feature': return CheckCircle;
      case 'technical': return AlertTriangle;
      case 'quality': return Video;
      default: return HelpCircle;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'installation': return 'text-blue-500';
      case 'feature': return 'text-green-500';
      case 'technical': return 'text-red-500';
      case 'quality': return 'text-purple-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              <HelpCircle className="w-4 h-4 mr-2" />
              We're Here to Help
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get help with CapCut Pro APK installation, features, and troubleshooting. 
              Our support team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-all border-primary/20 group cursor-pointer">
                <CardContent className="p-6">
                  <option.icon className={`w-12 h-12 ${option.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                  <Badge variant="outline" className="mb-4">{option.availability}</Badge>
                  <Button variant="outline" size="sm" className="w-full">
                    {option.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Issues & Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick fixes for the most frequently asked questions
            </p>
          </div>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {commonIssues.map((issue, index) => {
              const IconComponent = getTypeIcon(issue.type);
              return (
                <Card key={index} className="shadow-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <IconComponent className={`w-5 h-5 mr-3 ${getTypeColor(issue.type)}`} />
                      {issue.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{issue.answer}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  Installation Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Step-by-step instructions for installing CapCut Pro APK on your Android device.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/installation-guide">
                    View Guide
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Settings className="w-5 h-5 mr-2 text-green-500" />
                  Troubleshooting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Solutions for common problems and technical issues you might encounter.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/troubleshooting">
                    Get Help
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <HelpCircle className="w-5 h-5 mr-2 text-purple-500" />
                  FAQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Find answers to frequently asked questions about CapCut Pro APK.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="/faq">
                    View FAQ
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="max-w-2xl mx-auto shadow-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Still Need Help?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Support
                  </a>
                </Button>
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Live Chat
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mt-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>Quick Response</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;