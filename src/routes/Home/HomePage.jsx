import React from "react";
import PageComponent from "../../components/PageComponent";
import { Typography, IconButton, useMediaQuery, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function HomePage() {
    const classes = makeStyles((theme) => ({
        profileImage: {
            width: "256px",
            height: "256px",
            backgroundImage: "url('/images/HarrisonHoward.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "50%",
            marginBottom: "40px",
        },
        container: {
            display: "flex",
            justifyContent: "center",
        },
        linkIcon: {
            "&:hover": {
                color: "rgba(255,255,255,0.5)",
            },
        },
        "@media (max-width: 500px)": {
            background: {
                width: "156px",
                height: "156px",
            },
            profileImage: {
                width: "192px",
                height: "192px",
            },
        },
    }))();

    const isMax500 = useMediaQuery("(max-width: 500px)");

    return (
        <PageComponent
            name="Home"
            colour="#011a42"
            textColour="white"
            background="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
            next="/about"
        >
            <div className={classes.profileImage} />
            <Typography
                variant="h3"
                fontWeight={500}
                fontSize={isMax500 ? "1.2rem" : "2rem"}
            >
                Hello, my name is Harrison Howard
            </Typography>
            <Typography
                style={{ marginTop: "20px" }}
                variant="h6"
                fontWeight={400}
            >
                Quick links
            </Typography>
            <div className={classes.container}>
                <IconButton
                    style={{ color: "inherit" }}
                    href="mailto:harrison.howard00707@gmail.com"
                >
                    <Tooltip title="Email" placement="bottom">
                        <div>
                            <FontAwesomeIcon
                                className={classes.linkIcon}
                                icon={faEnvelope}
                                size="lg"
                            />
                        </div>
                    </Tooltip>
                </IconButton>
                <IconButton
                    style={{ color: "inherit" }}
                    href="https://github.com/Forbidden-Duck"
                    target="_blank"
                >
                    <Tooltip title="Github" placement="bottom">
                        <div>
                            <FontAwesomeIcon
                                className={classes.linkIcon}
                                icon={faGithub}
                                size="lg"
                            />
                        </div>
                    </Tooltip>
                </IconButton>
                <IconButton
                    style={{ color: "inherit" }}
                    href="https://www.linkedin.com/in/harrison-howard-8b61241b1/"
                    target="_blank"
                >
                    <Tooltip title="Linkedin" placement="bottom">
                        <div>
                            <FontAwesomeIcon
                                className={classes.linkIcon}
                                icon={faLinkedin}
                                size="lg"
                            />
                        </div>
                    </Tooltip>
                </IconButton>
                <IconButton
                    style={{ color: "inherit" }}
                    href="https://twitter.com/harrisonhowardd"
                    target="_blank"
                >
                    <Tooltip title="Twitter" placement="bottom">
                        <div>
                            <FontAwesomeIcon
                                className={classes.linkIcon}
                                icon={faTwitter}
                                size="lg"
                            />
                        </div>
                    </Tooltip>
                </IconButton>
            </div>
        </PageComponent>
    );
}

export default HomePage;
