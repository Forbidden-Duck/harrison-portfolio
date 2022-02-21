import React from "react";
import PageComponent from "../../components/PageComponent";
import ProjectCard from "../../components/ProjectCard";
import { makeStyles } from "@mui/styles";

function HomePage() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
        },
    }))();

    return (
        <PageComponent
            name="Projects"
            colour="#f2e2d7"
            textColour="black"
            background="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
            previous="/about"
            next="/skills"
            contentExtraProps={{ width: "100%", height: "98%" }}
        >
            <ProjectCard
                banner="https://i.imgur.com/4TEWI1p.gif"
                name="Project Name"
                description="Project Description"
                link="https://google.com/"
            />
        </PageComponent>
    );
}

export default HomePage;
