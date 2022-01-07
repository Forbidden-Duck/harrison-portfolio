import React from "react";
import PageComponent from "../../components/PageComponent";

function HomePage() {
    return (
        <PageComponent
            name="Skills"
            colour="#011a42"
            textColour="white"
            background="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
            previous="/projects"
            next="/contact"
        >
            Content
        </PageComponent>
    );
}

export default HomePage;
