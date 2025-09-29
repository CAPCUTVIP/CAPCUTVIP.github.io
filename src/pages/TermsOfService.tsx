import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  Users, 
  Download,
  Scale,
  Lock,
  Gavel
} from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "September 28, 2025";

  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "We reserve the right to update these terms at any time without prior notice."
      ]
    },
    {
      icon: Download,
      title: "Use of APK Files",
      content: [
        "The modified APK files provided are for educational and personal use only.",
        "You download and use APK files at your own risk and discretion.",
        "We do not guarantee that the APK files will work on all devices or Android versions.",
        "Users are responsible for ensuring compatibility with their devices before installation."
      ]
    },
    {
      icon: Shield,
      title: "Disclaimers and Limitations",
      content: [
        "This website and APK files are provided 'as is' without any representations or warranties.",
        "We do not warrant that the service will be uninterrupted, timely, secure, or error-free.",
        "We are not liable for any damages arising from the use of our website or APK files.",
        "Users acknowledge that modified APK files may have different behavior than official versions."
      ]
    },
    {
      icon: Lock,
      title: "Intellectual Property",
      content: [
        "We respect the intellectual property rights of others and expect users to do the same.",
        "CapCut is a trademark of ByteDance Ltd. We are not affiliated with or endorsed by ByteDance.",
        "The modifications made to the APK are provided under fair use and educational purposes.",
        "Users should respect copyright laws and terms of service of original software."
      ]
    },
    {
      icon: Gavel,
      title: "User Responsibilities",
      content: [
        "Users must not use our services for any illegal or unauthorized purpose.",
        "You may not use our service to violate any laws in your jurisdiction.",
        "Users are responsible for maintaining the security of their devices.",
        "You agree not to reproduce, duplicate, or sell any part of the service without written consent."
      ]
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: [
        "These terms shall be interpreted and governed by the laws of the jurisdiction where our servers are located.",
        "Any disputes arising from these terms will be resolved through appropriate legal channels.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in effect.",
        "These terms constitute the entire agreement between you and our service."
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
            <FileText className="w-4 h-4 mr-2" />
            Legal Agreement
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90">
            Please read these terms and conditions carefully before using our website 
            or downloading any APK files.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated */}
          <Card className="shadow-card mb-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
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
              <CardTitle className="text-2xl">Agreement Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the CapCut MOD APK website 
                and related services operated by us. By accessing or using our service, you agree 
                to be bound by these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read these Terms carefully before using our website. If you disagree with 
                any part of these terms, then you may not access the service.
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

          {/* Additional Terms */}
          <Card className="shadow-card mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Additional Provisions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Privacy</h4>
                  <p className="text-muted-foreground">
                    Your privacy is important to us. Please review our Privacy Policy, which also 
                    governs your use of our services, to understand our practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Termination</h4>
                  <p className="text-muted-foreground">
                    We may terminate or suspend your access immediately, without prior notice or 
                    liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Changes to Terms</h4>
                  <p className="text-muted-foreground">
                    We reserve the right, at our sole discretion, to modify or replace these Terms 
                    at any time. Changes will be effective immediately upon posting on this page.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us 
                    through our Contact page.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="shadow-card mt-8 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This website and the modified APK files are not affiliated with, endorsed by, 
                    or connected to ByteDance Ltd., CapCut, or any of their subsidiaries or affiliates. 
                    CapCut is a trademark of ByteDance Ltd. All trademarks, service marks, trade names, 
                    product names, and logos appearing on the site are the property of their respective owners.
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

export default TermsOfService;