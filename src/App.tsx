import { Routes, Route, Navigate } from "react-router-dom";
import {
  AboutMePage,
  ContactPage,
  Main,
  ProjectsPage,
  SkillsPage,
} from "./modules";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/works" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
