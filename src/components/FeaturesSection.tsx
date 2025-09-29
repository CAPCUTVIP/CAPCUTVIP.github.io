import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Shield, 
  Zap, 
  Film, 
  Scissors, 
  Palette, 
  Download, 
  Music,
  Smartphone,
  Sparkles
} from "lucide-react";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Crown,
      title: "Premium Unlocked",
      description: "Access all premium features including advanced editing tools, exclusive effects, and professional templates without any subscription fees.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "No Watermark",
      description: "Export your videos in pristine quality without any CapCut watermarks. Your content stays completely clean and professional.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "All Effects & Filters",
      description: "Unlock hundreds of premium effects, transitions, and filters that are normally locked behind a paywall in the official app.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Film,
      title: "4K Export Quality",
      description: "Export your videos in stunning 4K resolution with high bitrate encoding for the best possible video quality on any platform.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Scissors,
      title: "Advanced Editing",
      description: "Access professional-grade editing tools including multi-layer editing, keyframe animation, and advanced color grading controls.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Color Grading",
      description: "Professional color correction and grading tools with presets and manual controls to make your videos look cinematic.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Music,
      title: "Premium Audio",
      description: "Access to exclusive music library, sound effects, and advanced audio editing features including noise reduction and EQ.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Sparkles,
      title: "AI Features",
      description: "Unlock AI-powered features like automatic subtitle generation, smart crop, and intelligent video enhancement tools.",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-20 bg-muted/30" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Premium Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose CapCut Pro APK?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the full power of CapCut with all premium features unlocked. 
            No subscriptions, no limitations, just professional video editing at your fingertips.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Screenshots Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              App Screenshots
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              See CapCut Pro in Action
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take a look at the sleek interface and powerful features that make CapCut Pro 
              the ultimate video editing tool for content creators, influencers, and professionals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Intuitive drag-and-drop timeline</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Real-time preview with smooth playback</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Professional editing tools at your fingertips</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Export directly to social media platforms</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gradient-primary p-1 rounded-2xl shadow-primary">
                <img 
                  src={screenshot1} 
                  alt="CapCut Pro APK Screenshot 1" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <div className="bg-gradient-primary p-1 rounded-2xl shadow-primary">
                <img 
                  src={screenshot2} 
                  alt="CapCut Pro APK Screenshot 2" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto shadow-card border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Download CapCut Pro APK now and start creating amazing videos with all premium features unlocked.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>100% Safe</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Download className="w-4 h-4 text-blue-500" />
                  <span>317 MB</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Smartphone className="w-4 h-4 text-purple-500" />
                  <span>Android 5.0+</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};