import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Detect user language
const userLang = navigator.language || navigator.languages[0];
const shortLang = userLang.split("-")[0];

// Set HTML lang attribute
document.documentElement.lang = shortLang;

createRoot(document.getElementById("root")!).render(<App />);
