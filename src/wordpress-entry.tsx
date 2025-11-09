import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ChatWidget from "@/components/chatbot/ChatWidget";
import "./index.css";

// WordPress-specific entry point - only renders the chat widget
const initChatWidget = () => {
  const container = document.getElementById("vloerbot-root");
  if (!container) {
    console.error("VloerBot: Container element not found");
    return;
  }

  const root = createRoot(container);
  root.render(
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ChatWidget />
    </TooltipProvider>
  );
};

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatWidget);
} else {
  initChatWidget();
}

