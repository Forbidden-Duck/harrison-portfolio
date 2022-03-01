import React, { useEffect } from "react";
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

const preloadImages = [
    "/images/HarrisonHoward.jpg",
    "/images/ForbiddenBanner.gif",
    "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib" +
        "=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
    "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg",
    "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg",
    "https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-06.jpg",
    "https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background.jpg",
];

function App() {
    useEffect(() => {
        preloadImages.forEach((img) => (new Image().src = img));
    }, []);

    return (
        <>
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
        </>
    );
}

export default App;
