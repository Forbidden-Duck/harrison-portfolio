import React from "react";
import PageComponent from "../../components/PageComponent";

function HomePage() {
    return (
        <PageComponent
            name="Home"
            colour="#011a42"
            textColour="white"
            background="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
            next="about"
        >
            Content
        </PageComponent>
    );
}

export default HomePage;
