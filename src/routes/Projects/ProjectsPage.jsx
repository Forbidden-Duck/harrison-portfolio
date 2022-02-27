import React from "react";
import PageComponent from "../../components/PageComponent";
import ProjectCard from "../../components/ProjectCard";
import ProjectGridItem from "../../components/ProjectGridItem";
import { Box, Grid } from "@mui/material";

function HomePage() {
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
            {/* Set to 100% on mobile devices */}
            <Box
                sx={{
                    width: "90%",
                }}
            >
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={3}
                    justifyContent="center"
                    marginTop="2rem"
                    height="100%"
                >
                    <ProjectGridItem>
                        <ProjectCard
                            banner="https://i.imgur.com/4TEWI1p.gif"
                            name="Project Name"
                            description="Project Description"
                            link="https://google.com/"
                        />
                    </ProjectGridItem>
                    <ProjectGridItem>
                        <ProjectCard
                            banner="https://i.imgur.com/4TEWI1p.gif"
                            name="Project Name"
                            description="Project Description"
                            link="https://google.com/"
                        />
                    </ProjectGridItem>
                    <ProjectGridItem>
                        <ProjectCard
                            banner="https://i.imgur.com/4TEWI1p.gif"
                            name="Project Name"
                            description="Project Description"
                            link="https://google.com/"
                        />
                    </ProjectGridItem>
                    <ProjectGridItem>
                        <ProjectCard
                            banner="https://i.imgur.com/4TEWI1p.gif"
                            name="Project Name"
                            description="Project Description"
                            link="https://google.com/"
                        />
                    </ProjectGridItem>
                    <ProjectGridItem>
                        <ProjectCard
                            banner="https://i.imgur.com/4TEWI1p.gif"
                            name="Project Name"
                            description="Project Description"
                            link="https://google.com/"
                        />
                    </ProjectGridItem>
                    <ProjectGridItem>
                        <ProjectCard
                            banner="https://i.imgur.com/4TEWI1p.gif"
                            name="Project Name"
                            description="Project Description"
                            link="https://google.com/"
                        />
                    </ProjectGridItem>
                </Grid>
            </Box>
        </PageComponent>
    );
}

export default HomePage;
