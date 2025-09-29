import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Settings, 
  Info, 
  HelpCircle, 
  Phone, 
  MessageSquare,
  FileText,
  Shield,
  Menu,
  X,
  Home
} from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "CapCut Pro APK", href: "/capcut-pro", icon: Download },
    { name: "CapCut Mod APK", href: "/capcut-mod-apk", icon: Settings },
    { name: "Features", href: "/features", icon: Info },
    { name: "Download", href: "/download", icon: Download },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Support", href: "/support", icon: HelpCircle },
    { name: "Contact", href: "/contact", icon: Phone },
    { name: "FAQ", href: "/faq", icon: MessageSquare },
    { name: "Installation Guide", href: "/installation-guide", icon: Info },
    { name: "Troubleshooting", href: "/troubleshooting", icon: Settings },
    { name: "DMCA", href: "/dmca", icon: Shield },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav backdrop-blur-lg border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/android-chrome-192x192.png" alt="CapCut Logo" className="w-8 h-8 rounded-lg" />
            <span className="text-nav-foreground font-bold text-xl">CapCut MOD APK</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.slice(0, 6).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-nav-foreground hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10"
                >
                  {item.name}
                </Link>
              ))}
              {/* Legal dropdown for remaining items */}
              <div className="relative group">
                <button className="text-nav-foreground hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10 flex items-center">
                  Legal
                  <X className="w-3 h-3 ml-1 rotate-45" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-nav backdrop-blur-lg border border-border/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {navItems.slice(6).map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-nav-foreground hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" className="shadow-primary" asChild>
              <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-nav-foreground hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-nav/95 backdrop-blur-lg rounded-lg mt-2 border border-border/20">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-nav-foreground hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10 flex items-center space-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2">
                <Button variant="default" size="sm" className="w-full shadow-primary" asChild>
                  <a href="dist/downloads/CapCutPro.zip" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};