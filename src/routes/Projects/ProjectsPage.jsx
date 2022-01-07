import React from "react";
import PageComponent from "../../components/PageComponent";

function HomePage() {
    return (
        <PageComponent
            name="Projects"
            colour="#f2e2d7"
            textColour="black"
            background="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
            previous="/about"
            next="/skills"
        >
            Content
        </PageComponent>
    );
}

export default HomePage;
