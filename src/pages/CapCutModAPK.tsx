import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Shield, 
  Download, 
  Smartphone,
  Zap,
  CheckCircle,
  AlertTriangle,
  Star
} from "lucide-react";

const CapCutModAPK = () => {
  const modFeatures = [
    {
      icon: Crown,
      title: "Premium Unlocked",
      description: "All premium features available without subscription"
    },
    {
      icon: Shield,
      title: "No Watermark",
      description: "Export videos without CapCut watermark"
    },
    {
      icon: Zap,
      title: "Unlimited Exports",
      description: "No restrictions on video export quantity"
    },
    {
      icon: Star,
      title: "All Effects Unlocked",
      description: "Access to exclusive premium effects and filters"
    }
  ];

  const specifications = [
    { label: "Version", value: "15.2.0 (Latest)" },
    { label: "Size", value: "317 MB" },
    { label: "Android", value: "5.0+" },
    { label: "Architecture", value: "ARM64, ARM32" },
    { label: "Developer", value: "Bytedance Pte. Ltd." },
    { label: "Category", value: "Video Editor" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Latest Version v15.2.0
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CapCut MOD APK
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Download the modified version of CapCut with all premium features unlocked, 
              no watermark, and unlimited access to effects and filters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-hero"
                asChild
              >
                <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download MOD APK (317 MB)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MOD Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MOD Features
            </h2>
            <p className="text-xl text-muted-foreground">
              What makes this version special
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modFeatures.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-card-hover transition-shadow border-primary/20">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                App Specifications
              </h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="shadow-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      This is a modified version with unlocked premium features
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Safe and tested - no malware or viruses
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Works on Android 5.0 and higher versions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="max-w-2xl mx-auto shadow-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Ready to Download?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Get CapCut MOD APK now with all premium features unlocked and start creating professional videos.
              </p>
              <Button 
                size="lg" 
                className="shadow-primary"
                asChild
              >
                <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download CapCut MOD APK (317 MB)
                </a>
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

export default CapCutModAPK;