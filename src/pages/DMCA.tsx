import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  FileText, 
  Mail, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Scale,
  Send
} from "lucide-react";

const DMCA = () => {
  const dmcaSteps = [
    {
      step: 1,
      title: "Identify the Content",
      description: "Clearly identify the copyrighted work that you claim has been infringed and the specific location of the infringing material on our website."
    },
    {
      step: 2,
      title: "Provide Contact Information",
      description: "Include your full legal name, mailing address, telephone number, and email address in your notice."
    },
    {
      step: 3,
      title: "Submit Written Notice",
      description: "Send a written notice to our designated DMCA agent with all required information and statements."
    },
    {
      step: 4,
      title: "Wait for Response",
      description: "We will review your notice and respond within 24-48 hours. If valid, the content will be removed promptly."
    }
  ];

  const requiredElements = [
    "A physical or electronic signature of the copyright owner or authorized representative",
    "Identification of the copyrighted work claimed to have been infringed", 
    "Identification of the allegedly infringing material and its location on our site",
    "Your contact information (address, phone number, email address)",
    "A statement that you have a good faith belief that the use is not authorized",
    "A statement under penalty of perjury that the information is accurate and you are authorized to act"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Scale className="w-4 h-4 mr-2" />
            Legal Notice
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DMCA Policy
          </h1>
          <p className="text-xl text-white/90">
            Digital Millennium Copyright Act compliance and takedown procedures 
            for copyright holders and content creators.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Copyright Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We respect the intellectual property rights of others and expect our users to do the same. 
                In accordance with the Digital Millennium Copyright Act (DMCA), we will respond promptly 
                to claims of copyright infringement on our website.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This page outlines our DMCA policy and the procedures for submitting takedown notices 
                if you believe your copyrighted material has been used without permission.
              </p>
            </CardContent>
          </Card>

          {/* DMCA Process */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-xl">DMCA Takedown Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {dmcaSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Required Elements */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                Required Elements for DMCA Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                To be effective, your DMCA takedown notice must include the following elements:
              </p>
              <div className="space-y-3">
                {requiredElements.map((element, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{element}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-card mb-8 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                DMCA Agent Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-3">Designated DMCA Agent</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> dmca@capcutmodapk.com</p>
                  <p><strong>Subject Line:</strong> DMCA Takedown Notice</p>
                  <p><strong>Response Time:</strong> 24-48 hours</p>
                </div>
              </div>
              <div className="mt-6">
                <Button className="shadow-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Send DMCA Notice
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Counter-Notice */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Counter-Notice Procedure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you believe that material you posted was removed as a result of mistake or 
                misidentification, you may file a counter-notice with us. Counter-notices must 
                be written and include:
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Your physical or electronic signature</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Identification of the removed material and its location</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">A statement under penalty of perjury of good faith belief</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Your name, address, phone number, and consent to jurisdiction</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="shadow-card border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Important Legal Notice</h3>
                  <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
                    <p>
                      Please note that submitting a false DMCA notice may result in legal liability. 
                      You should consult with a lawyer before submitting a notice if you are unsure 
                      whether the material is infringing your copyright.
                    </p>
                    <p>
                      We reserve the right to remove any content at our discretion and may terminate 
                      user accounts for repeated copyright infringement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="shadow-card mt-8">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Response Timeline</h3>
                  <p className="text-muted-foreground">
                    We typically respond to valid DMCA notices within 24-48 hours and will remove 
                    infringing content promptly upon verification.
                  </p>
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

export default DMCA;