import React from "react";
import PageComponent from "../../components/PageComponent";

function HomePage() {
    return (
        <PageComponent
            name="About"
            colour="#011a42"
            textColour="white"
            background="https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg"
            previous="/home"
            next="/projects"
        >
            Content
        </PageComponent>
    );
}

export default HomePage;
