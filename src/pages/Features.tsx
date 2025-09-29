import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown, 
  Shield, 
  Zap, 
  Film, 
  Scissors, 
  Palette, 
  Music,
  Sparkles,
  Download,
  Video,
  Edit3,
  Volume2,
  Image,
  Layers,
  Settings
} from "lucide-react";

const Features = () => {
  const premiumFeatures = [
    {
      category: "Video Editing",
      icon: Video,
      features: [
        {
          icon: Film,
          title: "4K Video Export",
          description: "Export videos in stunning 4K resolution with high bitrate encoding for professional quality."
        },
        {
          icon: Scissors,
          title: "Multi-Layer Editing",
          description: "Work with unlimited video and audio layers for complex editing projects."
        },
        {
          icon: Edit3,
          title: "Keyframe Animation",
          description: "Create smooth animations with precise keyframe controls for professional motion graphics."
        },
        {
          icon: Layers,
          title: "Advanced Timeline",
          description: "Professional timeline with magnetic timeline, snap-to-grid, and precision editing tools."
        }
      ]
    },
    {
      category: "Effects & Filters",
      icon: Sparkles,
      features: [
        {
          icon: Zap,
          title: "Premium Effects Library",
          description: "Access hundreds of exclusive effects, transitions, and animations normally locked behind paywall."
        },
        {
          icon: Palette,
          title: "Color Grading Suite",
          description: "Professional color correction tools with LUTs, curves, and advanced color wheels."
        },
        {
          icon: Image,
          title: "Green Screen (Chroma Key)",
          description: "Advanced chroma key technology for seamless background replacement and compositing."
        },
        {
          icon: Settings,
          title: "Custom Effect Creation",
          description: "Create and save your own custom effects and transitions for unique video styles."
        }
      ]
    },
    {
      category: "Audio Features",
      icon: Volume2,
      features: [
        {
          icon: Music,
          title: "Premium Music Library",
          description: "Access exclusive royalty-free music tracks and sound effects for commercial use."
        },
        {
          icon: Volume2,
          title: "Advanced Audio Editing",
          description: "Professional audio tools including EQ, noise reduction, and multi-track mixing."
        },
        {
          icon: Sparkles,
          title: "AI Audio Enhancement",
          description: "AI-powered audio cleanup, voice enhancement, and automatic audio sync."
        }
      ]
    }
  ];

  const modFeatures = [
    {
      icon: Crown,
      title: "Premium Unlocked",
      description: "All premium features accessible without subscription",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "No Watermark",
      description: "Export clean videos without CapCut branding",
      color: "text-green-500"
    },
    {
      icon: Download,
      title: "Unlimited Exports",
      description: "No limits on video exports or rendering",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Ad-Free Experience",
      description: "No advertisements or interruptions while editing",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Complete Feature List
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CapCut Pro Features
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover all the powerful features available in CapCut Pro APK. 
            Professional video editing tools at your fingertips.
          </p>
        </div>
      </section>

      {/* MOD Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MOD APK Advantages
            </h2>
            <p className="text-xl text-muted-foreground">
              What makes our modified version special
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {modFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-card text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for professional video editing
            </p>
          </div>

          <div className="space-y-16">
            {premiumFeatures.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center justify-center mb-12">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <Card key={featureIndex} className="shadow-card hover:shadow-lg transition-all duration-300">
                          <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-3">
                              <FeatureIcon className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Download CapCut Pro APK now and unlock the full potential of professional video editing.
          </p>
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

export default Features;