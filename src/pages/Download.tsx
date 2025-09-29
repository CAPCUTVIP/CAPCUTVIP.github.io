import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download as DownloadIcon, 
  Shield, 
  Smartphone,
  CheckCircle,
  Clock,
  Users,
  Star,
  FileText,
  Zap
} from "lucide-react";

const Download = () => {
  const downloadSteps = [
    {
      step: "1",
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security > Enable 'Unknown Sources' to allow APK installation"
    },
    {
      step: "2", 
      title: "Download APK File",
      description: "Click the download button below to get the latest CapCut Pro APK file"
    },
    {
      step: "3",
      title: "Install the App",
      description: "Open the downloaded file and follow the installation prompts"
    },
    {
      step: "4",
      title: "Launch & Enjoy",
      description: "Open CapCut Pro and start creating amazing videos with all features unlocked"
    }
  ];

  const downloadInfo = [
    {
      icon: Users,
      label: "Downloads",
      value: "100M+",
      color: "text-blue-500"
    },
    {
      icon: Star,
      label: "Rating",
      value: "4.4★",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      label: "Security",
      value: "100% Safe",
      color: "text-green-500"
    },
    {
      icon: Smartphone,
      label: "Android",
      value: "5.0+",
      color: "text-purple-500"
    }
  ];

  const features = [
    "Premium features unlocked",
    "No watermark on exports", 
    "Unlimited video length",
    "4K video export quality",
    "All effects and filters",
    "Multi-layer editing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              <DownloadIcon className="w-4 h-4 mr-2" />
              Latest Version v15.2.0
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Download CapCut Pro APK
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get the latest version of CapCut Pro with all premium features unlocked. 
              Safe, fast, and completely free download.
            </p>
            
            {/* Download Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
              {downloadInfo.map((info, index) => (
                <div key={index} className="text-center">
                  <info.icon className={`w-6 h-6 ${info.color} mx-auto mb-2`} />
                  <div className="text-lg font-bold text-white">{info.value}</div>
                  <div className="text-sm text-white/80">{info.label}</div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-hero"
              asChild
            >
              <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download Now (317 MB)
              </a>
            </Button>
            <p className="text-white/80 text-sm mt-4">
              Virus-free • Safe Download • No Root Required
            </p>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Download & Install
            </h2>
            <p className="text-xl text-muted-foreground">
              Follow these simple steps to install CapCut Pro APK
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-shadow border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You Get
              </h2>
              <p className="text-muted-foreground mb-6">
                CapCut Pro APK comes with all premium features unlocked, giving you access to 
                professional video editing tools without any subscription fees.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  File Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">File Name</span>
                    <span className="font-medium">CapCutPro.zip</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Version</span>
                    <span className="font-medium">15.2.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Size</span>
                    <span className="font-medium">317 MB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Compatibility</span>
                    <span className="font-medium">Android 5.0+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Updated</span>
                    <span className="font-medium">September 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="max-w-2xl mx-auto shadow-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Start Creating Today</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Download CapCut Pro APK now and unlock your creative potential with professional video editing tools.
              </p>
              <Button 
                size="lg" 
                className="shadow-primary"
                asChild
              >
                <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download CapCut Pro APK
                </a>
              </Button>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground mt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% Safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Instant Download</span>
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

export default Download;