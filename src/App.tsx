import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import CaseStory from "@/pages/CaseStory";
import DecisionTree from "@/pages/DecisionTree";
import ChannelAnalysis from "@/pages/ChannelAnalysis";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-story" element={<CaseStory />} />
          <Route path="/decision-tree" element={<DecisionTree />} />
          <Route path="/channel-analysis" element={<ChannelAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}
