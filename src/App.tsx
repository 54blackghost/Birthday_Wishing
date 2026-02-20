import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishesProvider } from "@/context/WishesContext";
import LandingPage from "@/pages/Landing/LandingPage";
import SignupPage from "@/pages/Auth/SignupPage";
import LoginPage from "@/pages/Auth/LoginPage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import WishSubmitPage from "@/pages/WishSubmit/WishSubmitPage";
import AlbumPreviewPage from "@/pages/AlbumPreview/AlbumPreviewPage";
import VideoPreviewPage from "@/pages/VideoPreview/VideoPreviewPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <WishesProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/wish/:linkId" element={<WishSubmitPage />} />
                <Route path="/album" element={<AlbumPreviewPage />} />
                <Route path="/video" element={<VideoPreviewPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </WishesProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
