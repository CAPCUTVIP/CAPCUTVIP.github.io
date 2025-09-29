import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Users, FileText, AlertCircle } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "September 28, 2025";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "We may collect certain information when you visit our website, including IP addresses, browser type, and pages visited.",
        "We do not collect personal information unless voluntarily provided through contact forms or newsletters.",
        "The CapCut Pro APK itself does not collect additional data beyond what the original app would collect.",
        "No payment information is collected as our APK is provided free of charge."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Information",
      content: [
        "Website analytics to improve user experience and site performance.",
        "Responding to user inquiries and providing customer support.",
        "Sending updates about new versions or important security notices (if subscribed).",
        "We never sell, rent, or share your information with third parties for marketing purposes."
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement appropriate security measures to protect your information.",
        "All APK files are scanned for malware and viruses before distribution.",
        "We use secure hosting services with SSL encryption to protect data transmission.",
        "Regular security audits are conducted to maintain data protection standards."
      ]
    },
    {
      icon: Users,
      title: "Third-Party Services",
      content: [
        "Our website may use Google Analytics for traffic analysis (anonymized data).",
        "We may use CDN services for faster content delivery.",
        "Social media plugins may be present but do not track users without consent.",
        "All third-party services comply with applicable privacy regulations."
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "You have the right to request information about data we may have collected.",
        "You can opt-out of any communications at any time.",
        "You may request deletion of any personal information we have collected.",
        "You can contact us to update or correct any information."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Shield className="w-4 h-4 mr-2" />
            Legal Document
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated */}
          <Card className="shadow-card mb-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Last Updated</h3>
                  <p className="text-muted-foreground">{lastUpdated}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy describes how CapCut MOD APK website ("we," "us," or "our") 
                collects, uses, and shares information about you when you visit our website or 
                download our modified APK files.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website or downloading our APK files, you agree to the collection 
                and use of information in accordance with this policy. We are committed to 
                protecting your privacy and being transparent about our data practices.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Information */}
          <Card className="shadow-card mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cookies</h4>
                  <p className="text-muted-foreground">
                    Our website may use cookies to enhance user experience. You can choose to 
                    disable cookies through your browser settings, though some features may not 
                    function properly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Changes to This Policy</h4>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. Changes will be posted 
                    on this page with an updated "Last Updated" date. We encourage you to review 
                    this policy periodically.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us through our Contact page or email us directly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="shadow-card mt-8 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This website and the modified APK files provided are not affiliated with or 
                    endorsed by ByteDance Ltd. or the official CapCut application. CapCut is a 
                    trademark of ByteDance Ltd. Users download and use modified APK files at their 
                    own risk.
                  </p>
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

export default PrivacyPolicy;