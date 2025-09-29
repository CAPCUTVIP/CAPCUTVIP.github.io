import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CapCutPro from "./pages/CapCutPro";
import CapCutModAPK from "./pages/CapCutModAPK";
import Features from "./pages/Features";
import Download from "./pages/Download";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DMCA from "./pages/DMCA";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import InstallationGuide from "./pages/InstallationGuide";
import Troubleshooting from "./pages/Troubleshooting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/"}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capcut-pro" element={<CapCutPro />} />
          <Route path="/capcut-mod-apk" element={<CapCutModAPK />} />
          <Route path="/features" element={<Features />} />
          <Route path="/download" element={<Download />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
