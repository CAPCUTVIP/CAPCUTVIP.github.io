import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, 
  Search, 
  Download, 
  Shield, 
  Smartphone,
  Crown,
  Settings,
  AlertTriangle,
  CheckCircle,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          q: "What is CapCut Pro APK?",
          a: "CapCut Pro APK is a modified version of the official CapCut app that unlocks all premium features for free, including no watermark exports, premium effects, and advanced editing tools."
        },
        {
          q: "Is CapCut Pro APK safe to use?",
          a: "Yes, our CapCut Pro APK is completely safe. All APK files are scanned for malware and viruses before distribution. We only provide clean, tested files from trusted sources."
        },
        {
          q: "Do I need to root my Android device?",
          a: "No, you don't need to root your device. CapCut Pro APK can be installed on any Android device running version 5.0 or higher without requiring root access."
        },
        {
          q: "Is this the official CapCut app?",
          a: "No, this is a modified version of CapCut. We are not affiliated with ByteDance Ltd. or the official CapCut team. This is an independent modification that unlocks premium features."
        }
      ]
    },
    {
      category: "Download & Installation",
      icon: Download,
      questions: [
        {
          q: "How do I download CapCut Pro APK?",
          a: "Click the download button on our website to get the latest version. The file is approximately 317MB and will be saved to your device's Downloads folder."
        },
        {
          q: "Why can't I install the APK file?",
          a: "You need to enable 'Unknown Sources' in your Android settings. Go to Settings > Security > Unknown Sources and toggle it on. Some newer Android versions require per-app permission."
        },
        {
          q: "What are the system requirements?",
          a: "Android 5.0 or higher, 4GB RAM (recommended), 500MB free storage space, and a 64-bit processor. Most modern Android devices meet these requirements."
        },
        {
          q: "Can I install it alongside the official CapCut app?",
          a: "It depends on your device and Android version. Some devices allow both versions to coexist, while others may require you to uninstall the official app first."
        }
      ]
    },
    {
      category: "Premium Features",
      icon: Crown,
      questions: [
        {
          q: "What premium features are unlocked?",
          a: "All premium features including no watermark exports, premium effects and filters, advanced editing tools, 4K export quality, premium music library, and AI-powered features."
        },
        {
          q: "Do I need to sign in or create an account?",
          a: "No account creation or login is required. All premium features are automatically unlocked when you install the APK. You can start using all features immediately."
        },
        {
          q: "Will I receive updates automatically?",
          a: "No, you'll need to manually download and install updates from our website. We typically release updates within 24-48 hours of official CapCut updates."
        },
        {
          q: "Can I export videos without watermark?",
          a: "Yes, one of the main benefits of CapCut Pro APK is the ability to export videos without any watermark. Your videos will be completely clean and professional."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: Settings,
      questions: [
        {
          q: "The app crashes when I try to export videos. What should I do?",
          a: "This usually happens due to insufficient storage space or memory. Free up space on your device, close other apps, and try again. Also ensure you've granted all necessary permissions."
        },
        {
          q: "Some effects are not working properly. How can I fix this?",
          a: "Make sure you've downloaded the complete APK file and installed it properly. Clear the app's cache and data, then restart the app. If issues persist, try reinstalling."
        },
        {
          q: "The app says 'Parse Error' during installation. What's wrong?",
          a: "This usually means the APK file is corrupted or incompatible with your device. Re-download the file from our website and ensure your Android version is supported (5.0+)."
        },
        {
          q: "Can I transfer my projects from the official CapCut app?",
          a: "Project compatibility may vary. It's recommended to complete your projects in the original app before switching, or export them and re-import into CapCut Pro APK."
        }
      ]
    },
    {
      category: "Security & Legal",
      icon: Shield,
      questions: [
        {
          q: "Is using CapCut Pro APK legal?",
          a: "Using modified APK files exists in a legal gray area. While not illegal for personal use in most jurisdictions, it does violate the original app's terms of service. Use at your own discretion."
        },
        {
          q: "Will my Google account get banned?",
          a: "There's no evidence of Google account bans for using modified apps. However, we cannot guarantee complete safety. Use a secondary account if you're concerned."
        },
        {
          q: "Does the app collect my personal data?",
          a: "The modified app has the same data collection practices as the official version. However, since it's modified, some tracking features may be disabled. Check our Privacy Policy for more details."
        },
        {
          q: "What should I do if I encounter malware warnings?",
          a: "Some antivirus software may flag modified APKs as potentially harmful due to code modifications. Our files are clean and safe. You can add an exception in your antivirus if needed."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item => 
        item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Find answers to common questions about CapCut Pro APK installation, 
            features, and troubleshooting.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">25+ Questions</h3>
                <p className="text-muted-foreground text-sm">Comprehensive FAQ coverage</p>
              </CardContent>
            </Card>
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Instant Answers</h3>
                <p className="text-muted-foreground text-sm">Get help immediately</p>
              </CardContent>
            </Card>
            <Card className="shadow-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Still Need Help?</h3>
                <p className="text-muted-foreground text-sm">Contact our support team</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {(searchTerm ? filteredFAQs : faqCategories).map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{category.category}</h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-medium text-foreground">{item.q}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Still Need Help */}
          <Card className="shadow-card mt-12 border-primary/20 text-center">
            <CardContent className="p-8">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help you 
                with any questions about CapCut Pro APK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="shadow-primary">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download CapCut Pro APK
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Popular Topics */}
          <Card className="shadow-card mt-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {["Installation Guide", "Premium Features", "No Watermark", "System Requirements", "Troubleshooting", "Safety", "Updates"].map((topic, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;