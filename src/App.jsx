import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./routes/Home/HomePage";
import About from "./routes/About/AboutPage";
import Projects from "./routes/Projects/ProjectsPage";
import Skills from "./routes/Skills/SkillsPage";
import Contact from "./routes/Contact/ContactPage";

function App() {
    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </AnimatePresence>
        </Router>
    );
}

export default App;
