import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Settings, 
  CheckCircle, 
  AlertTriangle, 
  Smartphone,
  Shield,
  Play,
  FileText,
  Zap,
  HelpCircle
} from "lucide-react";

const InstallationGuide = () => {
  const installationSteps = [
    {
      step: 1,
      title: "Download the APK File",
      description: "Click the download button to get the latest CapCut Pro APK file (317 MB).",
      icon: Download,
      details: [
        "Ensure you have stable internet connection",
        "Make sure you have at least 500MB free storage",
        "Download from our official website only"
      ]
    },
    {
      step: 2,
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security > Enable 'Unknown Sources' to allow APK installation.",
      icon: Settings,
      details: [
        "Open Android Settings app",
        "Navigate to Security or Privacy settings",
        "Toggle on 'Unknown Sources' or 'Install Unknown Apps'",
        "Some devices may require per-app permission"
      ]
    },
    {
      step: 3,
      title: "Install the APK",
      description: "Locate the downloaded file and tap it to begin installation process.",
      icon: Play,
      details: [
        "Open your file manager or Downloads folder",
        "Find the CapCut Pro APK file",
        "Tap the file and select 'Install'",
        "Wait for installation to complete"
      ]
    },
    {
      step: 4,
      title: "Launch and Enjoy",
      description: "Open CapCut Pro and start creating amazing videos with all premium features unlocked.",
      icon: CheckCircle,
      details: [
        "Find CapCut Pro icon on your home screen",
        "Open the app and grant necessary permissions",
        "All premium features are automatically unlocked",
        "No login or subscription required"
      ]
    }
  ];

  const troubleshooting = [
    {
      problem: "Installation Failed",
      solution: "Ensure you have enough storage space and Unknown Sources is enabled. Try restarting your device."
    },
    {
      problem: "App Won't Open",
      solution: "Check if your Android version is 5.0 or higher. Clear cache or reinstall the app."
    },
    {
      problem: "Features Not Working",
      solution: "Grant all requested permissions and ensure you downloaded from our official website."
    },
    {
      problem: "Export Issues",
      solution: "Check storage permissions and ensure you have enough free space for video exports."
    }
  ];

  const systemRequirements = [
    { requirement: "Android Version", value: "5.0 (API level 21) or higher" },
    { requirement: "RAM", value: "4GB recommended (2GB minimum)" },
    { requirement: "Storage", value: "500MB for app + space for projects" },
    { requirement: "Processor", value: "64-bit ARM or x86 processor" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <FileText className="w-4 h-4 mr-2" />
            Step-by-Step Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Installation Guide
          </h1>
          <p className="text-xl text-white/90">
            Complete step-by-step instructions to install CapCut Pro APK on your Android device. 
            Follow these simple steps to get started.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* System Requirements */}
          <Card className="shadow-card mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary" />
                System Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Before installing CapCut Pro APK, make sure your device meets these requirements:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {systemRequirements.map((req, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium text-foreground">{req.requirement}</span>
                    <span className="text-muted-foreground text-sm">{req.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Installation Steps */}
          <div className="space-y-8 mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Installation Steps</h2>
              <p className="text-muted-foreground">Follow these simple steps to install CapCut Pro APK</p>
            </div>

            {installationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge variant="secondary">Step {step.step}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-muted-foreground text-sm">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Security Notice */}
          <Card className="shadow-card mb-8 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Security & Safety</h3>
                  <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <p>
                      Our CapCut Pro APK is completely safe and has been tested on multiple devices. 
                      The file is scanned for viruses and malware before distribution.
                    </p>
                    <p>
                      Always download from our official website to ensure you get the authentic, 
                      unmodified file with all security checks passed.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-primary" />
                Common Issues & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <span>{item.problem}</span>
                    </h4>
                    <p className="text-muted-foreground text-sm pl-6">{item.solution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Download CTA */}
          <Card className="shadow-card border-primary/20 text-center">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Install?</h3>
              <p className="text-muted-foreground mb-6">
                Download CapCut Pro APK now and follow the steps above to get started with 
                professional video editing.
              </p>
              <Button size="lg" className="shadow-primary">
                <Download className="w-5 h-5 mr-2" />
                Download CapCut Pro APK (317 MB)
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                Version 15.2.0 • Android 5.0+ • 100% Safe & Tested
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstallationGuide;