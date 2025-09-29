import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  Settings, 
  Smartphone,
  Download,
  RefreshCw,
  HardDrive,
  Wifi,
  Battery,
  MessageSquare
} from "lucide-react";

const Troubleshooting = () => {
  const commonIssues = [
    {
      icon: Download,
      title: "Installation Problems",
      problem: "APK won't install or shows error messages",
      solutions: [
        "Enable 'Unknown Sources' in Android Settings > Security",
        "Check if you have enough storage space (minimum 500MB free)",
        "Ensure Android version is 5.0 or higher",
        "Try downloading the APK file again if it may be corrupted",
        "Restart your device and try installing again"
      ],
      severity: "high"
    },
    {
      icon: AlertTriangle,
      title: "App Crashes on Startup",
      problem: "CapCut Pro closes immediately after opening",
      solutions: [
        "Clear app cache and data in Settings > Apps > CapCut Pro",
        "Restart your device to free up memory",
        "Check if device meets minimum requirements (4GB RAM recommended)",
        "Close other apps to free up memory",
        "Reinstall the APK file completely"
      ],
      severity: "high"
    },
    {
      icon: Settings,
      title: "Features Not Working",
      problem: "Premium features appear locked or unavailable",
      solutions: [
        "Ensure you downloaded from our official website",
        "Grant all requested permissions to the app",
        "Clear app cache and restart the application",
        "Check if the APK version is the latest (v15.2.0)",
        "Reinstall if features still don't work properly"
      ],
      severity: "medium"
    },
    {
      icon: HardDrive,
      title: "Export/Rendering Issues",
      problem: "Videos won't export or take too long to render",
      solutions: [
        "Ensure sufficient storage space for exported videos",
        "Close background apps to free up memory and processing power",
        "Lower export quality settings if device is struggling",
        "Check if device is overheating and let it cool down",
        "Grant storage permissions in app settings"
      ],
      severity: "medium"
    },
    {
      icon: Wifi,
      title: "Network-Related Problems",
      problem: "App won't load content or connect to services",
      solutions: [
        "Check your internet connection stability",
        "Try switching between WiFi and mobile data",
        "Clear DNS cache or restart your router",
        "Disable VPN if you're using one",
        "Allow app through firewall if you have one installed"
      ],
      severity: "low"
    },
    {
      icon: Battery,
      title: "Performance Issues",
      problem: "App is slow, laggy, or drains battery quickly",
      solutions: [
        "Close unnecessary background apps",
        "Lower video quality settings for editing",
        "Disable battery optimization for CapCut Pro in settings",
        "Ensure device isn't overheating",
        "Free up device storage space (keep at least 2GB free)"
      ],
      severity: "low"
    }
  ];

  const quickFixes = [
    {
      icon: RefreshCw,
      title: "Restart the App",
      description: "Force close and reopen CapCut Pro"
    },
    {
      icon: Smartphone,
      title: "Restart Device",
      description: "Power off and on your Android device"
    },
    {
      icon: HardDrive,
      title: "Clear Cache",
      description: "Clear app cache in Settings > Apps"
    },
    {
      icon: Download,
      title: "Reinstall APK",
      description: "Uninstall and reinstall the APK file"
    }
  ];

  const systemOptimization = [
    {
      setting: "RAM Management",
      description: "Keep at least 2GB RAM free while using CapCut Pro",
      action: "Close unnecessary apps before editing"
    },
    {
      setting: "Storage Space",
      description: "Maintain at least 2GB free storage space",
      action: "Delete old videos and clear cache regularly"
    },
    {
      setting: "Battery Optimization",
      description: "Disable battery optimization for CapCut Pro",
      action: "Settings > Battery > App Optimization > CapCut Pro > Don't optimize"
    },
    {
      setting: "Background App Refresh",
      description: "Limit background apps while editing",
      action: "Settings > Apps > Background App Refresh > Off for non-essential apps"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Wrench className="w-4 h-4 mr-2" />
            Problem Solver
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Troubleshooting Guide
          </h1>
          <p className="text-xl text-white/90">
            Having issues with CapCut Pro APK? Find solutions to common problems 
            and get your app working smoothly again.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Fixes */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Fixes</h2>
              <p className="text-muted-foreground">Try these simple solutions first</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickFixes.map((fix, index) => {
                const IconComponent = fix.icon;
                return (
                  <Card key={index} className="shadow-card text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{fix.title}</h3>
                      <p className="text-muted-foreground text-sm">{fix.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Common Issues */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Common Issues & Solutions</h2>
              <p className="text-muted-foreground">Detailed solutions for frequent problems</p>
            </div>

            <div className="space-y-6">
              {commonIssues.map((issue, index) => {
                const IconComponent = issue.icon;
                const severityColor = {
                  high: "border-red-200 bg-red-50/50 dark:bg-red-950/20",
                  medium: "border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/20",
                  low: "border-green-200 bg-green-50/50 dark:bg-green-950/20"
                };

                return (
                  <Card key={index} className={`shadow-card ${severityColor[issue.severity as keyof typeof severityColor]}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{issue.title}</h3>
                          <p className="text-muted-foreground text-sm font-normal">{issue.problem}</p>
                        </div>
                        <Badge 
                          variant={issue.severity === 'high' ? 'destructive' : issue.severity === 'medium' ? 'secondary' : 'default'}
                          className="ml-auto"
                        >
                          {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-foreground mb-3">Solutions:</h4>
                      <div className="space-y-2">
                        {issue.solutions.map((solution, solutionIndex) => (
                          <div key={solutionIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground text-sm leading-relaxed">{solution}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* System Optimization */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">System Optimization</h2>
              <p className="text-muted-foreground">Optimize your device for better CapCut Pro performance</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {systemOptimization.map((opt, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{opt.setting}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{opt.description}</p>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-foreground text-sm font-medium">{opt.action}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Still Need Help */}
          <Card className="shadow-card border-primary/20 text-center">
            <CardContent className="p-8">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Still Having Issues?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you've tried the solutions above and are still experiencing problems, 
                our support team is here to help. Contact us with details about your issue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="shadow-primary">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Re-download APK
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Prevention Tips */}
          <Card className="shadow-card mt-8">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Prevention Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Before Installing:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Ensure device meets system requirements</li>
                    <li>• Have stable internet connection</li>
                    <li>• Back up important data</li>
                    <li>• Close unnecessary apps</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Regular Maintenance:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Clear app cache weekly</li>
                    <li>• Keep device storage above 2GB free</li>
                    <li>• Update APK when new versions are available</li>
                    <li>• Restart device regularly</li>
                  </ul>
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

export default Troubleshooting;