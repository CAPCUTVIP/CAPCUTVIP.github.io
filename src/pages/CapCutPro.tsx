import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Crown, 
  Shield, 
  Star, 
  Users, 
  Smartphone,
  HardDrive,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import capcutIcon from "@/assets/capcut-icon.png";

const CapCutPro = () => {
  const features = [
    "All premium effects and filters unlocked",
    "No watermark on exported videos",
    "4K video export quality",
    "Advanced editing tools",
    "Professional templates",
    "Premium music library",
    "AI-powered features",
    "Multi-layer editing support"
  ];

  const systemRequirements = [
    { label: "Android Version", value: "5.0 or higher" },
    { label: "RAM", value: "4GB recommended" },
    { label: "Storage", value: "500MB free space" },
    { label: "Processor", value: "Snapdragon 660 or equivalent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-3xl shadow-hero flex items-center justify-center mb-8 mx-auto">
              <img 
                src={capcutIcon} 
                alt="CapCut Pro APK Icon" 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              <Crown className="w-4 h-4 mr-2" />
              Premium Version
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              CapCut Pro APK v15.2.0
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the full power of CapCut with all premium features unlocked. 
              Professional video editing without limitations or watermarks.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/90">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>100M+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.4★ Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>100% Safe</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-hero"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now (317 MB)
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                What's Included in CapCut Pro?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Get access to all premium features that are normally locked behind a paywall. 
                Create professional-quality videos with unlimited possibilities.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-primary" />
                  System Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemRequirements.map((req, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{req.label}</span>
                      <span className="text-muted-foreground">{req.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Download CapCut Pro APK?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join millions of creators who trust CapCut Pro for their video editing needs. 
            Download now and start creating amazing content.
          </p>
          
          <Card className="shadow-card border-primary/20 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold text-foreground">Important Notice</h3>
              </div>
              <p className="text-muted-foreground">
                Always download APK files from trusted sources. Enable "Unknown Sources" in your 
                Android settings before installation. This modified version is not affiliated 
                with the official CapCut developers.
              </p>
            </CardContent>
          </Card>
          
          <Button size="lg" className="shadow-primary">
            <Download className="w-5 h-5 mr-2" />
            Download CapCut Pro APK
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CapCutPro;