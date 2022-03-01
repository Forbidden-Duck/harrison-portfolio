import React, { useRef } from "react";
import PageComponent from "../../components/PageComponent";
import ProjectCard from "../../components/ProjectCard";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

function HomePage() {
    const isMobile = useMediaQuery("(max-width:552px)");

    const gridRef = useRef(null);
    return (
        <PageComponent
            name="Projects"
            colour="#f2e2d7"
            textColour="black"
            background="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg"
            previous="/about"
            next="/skills"
            contentExtraProps={{ width: "100%", height: "98%" }}
            bgHeight={() =>
                gridRef.current
                    ? gridRef.current.offsetHeight + 107 > 930
                        ? gridRef.current.offsetHeight + 107
                        : "100%"
                    : "100%"
            }
        >
            <Box
                sx={{
                    width: isMobile ? "100%" : "90%",
                }}
            >
                <Grid
                    container
                    ref={gridRef}
                    rowSpacing={2}
                    columnSpacing={3}
                    justifyContent="center"
                    marginTop="2rem"
                    height="100%"
                >
                    <Grid item>
                        <ProjectCard
                            banner="/images/ForbiddenBanner.gif"
                            name="Forbidden Statistics"
                            date="2017 - 2020"
                            description="Forbidden was a General Statistics Discord Bot. 
                            It gathered statistics from video games and other media and 
                            provided the user an analysis of the data."
                            linkCode="https://github.com/Forbidden-Duck/forbidden-bot"
                            active="inactive"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            banner="/images/FitbitBanner.jpg"
                            name="Fitbit"
                            date="2020"
                            description="I was gifted a Fitbit and created a collection of clockfaces and apps. 
                            They work on a variety of clockfaces and I continue to apply bug fixes as users continue 
                            to report them."
                            link="https://gallery.fitbit.com/developer/9dc2e29f-47c0-4dfd-90dd-d9a838ebfb15"
                            active="active"
                        />
                    </Grid>
                    <Grid item>
                        <ProjectCard
                            banner="/images/EcommerceBanner.jpg"
                            name="Ecommerce Website"
                            date="2021"
                            description="This is my attempt in learning new technologies relevant to accounts, 
                            administration and payment processing. Be able to create successful and failure test payments
                            and view them in the admin panel."
                            linkCode={[
                                "https://github.com/Forbidden-Duck/ecommerce-frontend",
                                "https://github.com/Forbidden-Duck/ecommerce-backend",
                            ]}
                            linkWebsite="https://ecommerce.harrisonhoward.xyz/"
                            active="active"
                            cardGrowth={40}
                        />
                    </Grid>
                </Grid>
            </Box>
        </PageComponent>
    );
}

export default HomePage;
