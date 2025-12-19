import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DietCare from "./pages/DietCare";
import GentlePath from "./pages/GentlePath";
import DistanceWithTrust from "./pages/DistanceWithTrust";
import NotFound from "./pages/NotFound";
import Moments from "./pages/Moments";
import DuaGenerator from "./pages/DuaGenerator";
import Letters from "./pages/Letters";
import GrowthGarden from "./pages/GrowthGarden";
import FutureTogether from "./pages/FutureTogether";
import Reflection from "./pages/Reflection";
import Miscellaneous from "./pages/Miscellaneous";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diet-care" element={<DietCare />} />
          <Route path="/gentle-path" element={<GentlePath />} />
          <Route path="/distance-with-trust" element={<DistanceWithTrust />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/dua" element={<DuaGenerator />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/garden" element={<GrowthGarden />} />
          <Route path="/future" element={<FutureTogether />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/misc" element={<Miscellaneous />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
