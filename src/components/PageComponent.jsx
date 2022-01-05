import React from "react";
import { Typography, IconButton } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PageComponent(props) {
    const classes = makeStyles((theme) => ({
        "@global": {
            body: {
                background: props.colour || "white",
                color: props.textColour || "black",
            },
        },
        app: {
            position: "relative",
            display: "flex",
            backgroundColor: !props.background && (props.colour || "white"),
            width: "100%",
            height: "100%",
        },
        background: {
            position: "absolute",
            backgroundImage: `url('${props.background}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            WebkitFilter: "blur(8px)",
            width: "100%",
            height: "100%",
            "& body": {
                background: "black",
            },
        },
        container: {
            margin: "5px",
            width: "100%",
        },
        content: {
            display: "flex",
            justifyContent: "center",
        },
    }))();

    const pageButtonProps = {
        borderRadius: "0",
        bgcolor: "rgba(25, 118, 210, 0.15)",
        "&:hover": {
            bgcolor: "rgba(25, 118, 210, 0.05)",
        },
    };

    return (
        <>
            {props.background && <div className={classes.background} />}
            <div className={classes.app}>
                <IconButton
                    className={classes.pageButton}
                    size="large"
                    color="primary"
                    sx={pageButtonProps}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </IconButton>
                <div className={classes.container}>
                    <Typography variant="h1" fontSize={20}>
                        {props.name}
                    </Typography>
                    <div className={classes.content}>{props.children}</div>
                </div>
                <IconButton
                    className={classes.pageButton}
                    size="large"
                    color="primary"
                    sx={pageButtonProps}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </IconButton>
            </div>
        </>
    );
}

export default PageComponent;
