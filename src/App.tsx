import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConceptSelector from "./pages/ConceptSelector";
import Concept1 from "./pages/Concept1";
import Concept2 from "./pages/Concept2";
import Concept3 from "./pages/Concept3";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConceptSelector />} />
          <Route path="/original" element={<Index />} />
          <Route path="/concept-1" element={<Concept1 />} />
          <Route path="/concept-2" element={<Concept2 />} />
          <Route path="/concept-3" element={<Concept3 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
