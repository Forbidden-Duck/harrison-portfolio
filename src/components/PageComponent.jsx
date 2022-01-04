import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

    return (
        <>
            {props.background && <div className={classes.background} />}
            <div className={classes.app}>
                <div className={classes.container}>
                    <Typography variant="h1" fontSize={20}>
                        {props.name}
                    </Typography>
                    <div className={classes.content}>{props.children}</div>
                </div>
            </div>
        </>
    );
}

export default PageComponent;
