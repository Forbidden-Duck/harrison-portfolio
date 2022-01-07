import React from "react";
import PageComponent from "../../components/PageComponent";

function HomePage() {
    return (
        <PageComponent
            name="Skills"
            colour="#e9a870"
            textColour="white"
            background="https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-06.jpg"
            previous="/projects"
            next="/contact"
        >
            Content
        </PageComponent>
    );
}

export default HomePage;
