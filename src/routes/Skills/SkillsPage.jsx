import React from "react";
import PageComponent from "../../components/PageComponent";

function HomePage() {
    return (
        <PageComponent
            name="Skills"
            colour="#011a42"
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
