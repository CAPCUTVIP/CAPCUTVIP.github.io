import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Users, Shield } from "lucide-react";
import capcutIcon from "@/assets/capcut-icon.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
            <Star className="w-4 h-4 mr-2" />
            Latest Version v15.2.0
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Download CapCut Pro APK
            <span className="block text-2xl md:text-4xl lg:text-5xl font-normal mt-2 text-white/90">
              Premium Unlocked - September 2025
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unlock advanced video editing capabilities, remove watermarks, and access premium features with CapCut Pro APK
          </p>

          {/* App Icon Display */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-hero flex items-center justify-center mb-4 mx-auto">
                <img 
                  src={capcutIcon} 
                  alt="CapCut Pro APK Icon" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                PRO
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-white/90">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">100M+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">4.4★ Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">100% Safe</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-hero"
              asChild
            >
              <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download APK (317 MB)
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
            >
              View Features
            </Button>
          </div>

          {/* Version Info */}
          <div className="mt-8 text-white/70 text-sm">
            <p>Version 15.2.0 • Android 5.0+ • No Watermark • Premium Unlocked</p>
          </div>
        </div>
      </div>
    </section>
  );
};