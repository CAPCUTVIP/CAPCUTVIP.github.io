import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  FileText, 
  Users, 
  Download,
  Info,
  ExternalLink,
  Scale
} from "lucide-react";

const Disclaimer = () => {
  const lastUpdated = "September 28, 2025";

  const disclaimerSections = [
    {
      icon: AlertTriangle,
      title: "General Disclaimer",
      content: [
        "The information on this website is provided on an 'as is' basis without any warranties.",
        "We make no representations or warranties in relation to this website or the information contained herein.",
        "We do not warrant that this website will be constantly available or available at all.",
        "Nothing on this website constitutes professional advice or formal recommendation."
      ]
    },
    {
      icon: FileText,
      title: "Content Accuracy",
      content: [
        "While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, and accuracy of this information.",
        "Any action you take upon the information on this website is strictly at your own risk.",
        "We will not be liable for any losses and damages in connection with the use of our website.",
        "Information may be updated or changed without notice."
      ]
    },
    {
      icon: ExternalLink,
      title: "Third-Party Links",
      content: [
        "Our website may contain links to external websites that are not provided or maintained by us.",
        "We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
        "We are not responsible for the content of linked third-party sites.",
        "The inclusion of any links does not imply a recommendation or endorsement of the views expressed within them."
      ]
    },
    {
      icon: Download,
      title: "APK File Disclaimer",
      content: [
        "Modified APK files are provided for educational and personal use purposes only.",
        "We do not guarantee the functionality, safety, or performance of any APK files.",
        "Users download and install APK files at their own risk and responsibility.",
        "We are not liable for any damage to devices, data loss, or security issues arising from APK usage."
      ]
    },
    {
      icon: Scale,
      title: "Legal Disclaimer",
      content: [
        "This website and its content are not affiliated with, endorsed by, or connected to ByteDance Ltd. or CapCut.",
        "CapCut is a trademark of ByteDance Ltd. All trademarks mentioned belong to their respective owners.",
        "The use of modified APK files may violate the original software's terms of service.",
        "Users are responsible for complying with all applicable laws and regulations in their jurisdiction."
      ]
    },
    {
      icon: Users,
      title: "User Responsibility",
      content: [
        "Users are solely responsible for their use of this website and any downloaded content.",
        "Users must ensure compatibility of APK files with their devices before installation.",
        "We recommend backing up important data before installing any modified applications.",
        "Users should exercise caution and good judgment when downloading and installing APK files."
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
            <Info className="w-4 h-4 mr-2" />
            Important Notice
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Disclaimer
          </h1>
          <p className="text-xl text-white/90">
            Important information about the use of this website and the APK files provided. 
            Please read carefully before proceeding.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated */}
          <Card className="shadow-card mb-8 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
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
              <CardTitle className="text-2xl">Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This disclaimer governs your use of our website and the APK files provided. 
                By accessing this website or downloading any files, you acknowledge that you 
                have read, understood, and agree to be bound by this disclaimer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree with any part of this disclaimer, please do not use our 
                website or download any APK files. Your continued use of the website 
                constitutes acceptance of this disclaimer.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer Sections */}
          <div className="space-y-8">
            {disclaimerSections.map((section, index) => {
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

          {/* Trademark Notice */}
          <Card className="shadow-card mt-8 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-500" />
                Trademark Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  CapCut is a registered trademark of ByteDance Ltd. This website and the 
                  modified APK files provided are not affiliated with, endorsed by, sponsored by, 
                  or connected to ByteDance Ltd., CapCut, or any of their subsidiaries or affiliates. 
                  All product names, logos, and brands mentioned on this website are property of 
                  their respective owners.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Risk Warning */}
          <Card className="shadow-card mt-8 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Risk Warning</h3>
                  <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <p>
                      <strong>Use at Your Own Risk:</strong> Modified APK files may behave differently 
                      from official applications and could potentially cause device instability, 
                      data loss, or security vulnerabilities.
                    </p>
                    <p>
                      <strong>No Warranty:</strong> We provide no warranty, express or implied, 
                      regarding the performance, compatibility, or safety of any APK files.
                    </p>
                    <p>
                      <strong>Legal Considerations:</strong> Using modified applications may violate 
                      the original software's terms of service and could have legal implications 
                      in certain jurisdictions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-card mt-8">
            <CardHeader>
              <CardTitle className="text-xl">Questions About This Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this disclaimer or need clarification on any 
                points mentioned above, please contact us through our Contact page.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update this disclaimer at any time without prior notice. 
                Changes will be effective immediately upon posting on this page. We encourage 
                you to review this disclaimer periodically for any updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;