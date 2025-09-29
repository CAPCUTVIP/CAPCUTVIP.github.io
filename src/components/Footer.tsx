import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  const footerLinks = [
    {
      title: "App",
      links: [
        { name: "CapCut Pro APK", href: "/capcut-pro" },
        { name: "CapCut Mod APK", href: "/capcut-mod-apk" },
        { name: "Features", href: "/features" },
        { name: "Download", href: "/download" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Installation Guide", href: "/installation-guide" },
        { name: "Troubleshooting", href: "/troubleshooting" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "DMCA", href: "/dmca" },
        { name: "Disclaimer", href: "/disclaimer" },
      ]
    }
  ];

  return (
    <footer className="bg-nav text-nav-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-bold text-xl">CapCut MOD APK</span>
            </div>
            <p className="text-nav-foreground/80 mb-6 leading-relaxed">
              Download the latest version of CapCut Pro APK with premium unlocked features,
              including no watermark and advanced video editing capabilities.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 text-nav-foreground hover:text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-nav-foreground/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-nav-foreground/60 text-sm">
              © 2024 CapCut MOD APK. All rights reserved.
            </p>
            <p className="text-nav-foreground/60 text-sm">
              This is not an official CapCut application. CapCut is a trademark of Bytedance Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};