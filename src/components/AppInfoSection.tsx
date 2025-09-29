import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Star, 
  Smartphone, 
  HardDrive, 
  Users, 
  Crown,
  Shield,
  Zap,
  Film,
  Scissors
} from "lucide-react";

export const AppInfoSection = () => {
  const appDetails = [
    { label: "App Name", value: "CapCut Pro APK", icon: Film },
    { label: "Category", value: "Video Players & Editors", icon: Scissors },
    { label: "Mod Info", value: "Premium Unlocked (Free)", icon: Crown },
    { label: "Size", value: "317.00 MB", icon: HardDrive },
    { label: "Ratings", value: "4.4★", icon: Star },
    { label: "Installs", value: "100,000,000+", icon: Users },
    { label: "Version", value: "v15.2.0 (Latest)", icon: Smartphone },
    { label: "Android Required", value: "5.0 or Higher", icon: Shield },
  ];

  const features = [
    {
      icon: Crown,
      title: "Premium Unlocked",
      description: "Access all premium features without any subscription"
    },
    {
      icon: Shield,
      title: "No Watermark",
      description: "Export videos without CapCut watermark"
    },
    {
      icon: Zap,
      title: "All Effects",
      description: "Use all premium effects, filters, and transitions"
    },
    {
      icon: Film,
      title: "4K Export",
      description: "Export videos in high quality up to 4K resolution"
    }
  ];

  return (
    <section className="py-20 bg-background" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            App Information
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CapCut Pro APK Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete information about the latest CapCut Pro APK with premium features unlocked
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* App Details Table */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-primary" />
                App Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium text-foreground">{detail.label}</span>
                      </div>
                      <span className="text-muted-foreground font-mono">{detail.value}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* Download Button */}
              <div className="mt-8 pt-6 border-t border-border">
                <Button size="lg" className="w-full shadow-primary" asChild>
                  <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download CapCut Pro APK
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Virus-free • Safe Download • No Root Required
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Premium Features */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Crown className="w-6 h-6 text-primary" />
                  Premium Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Safety Notice */}
            <Card className="shadow-card border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">100% Safe & Secure</h3>
                    <p className="text-muted-foreground text-sm">
                      Our APK files are scanned by multiple antivirus engines and tested on real devices 
                      to ensure they are completely safe and free from malware.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};