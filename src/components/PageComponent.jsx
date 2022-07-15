import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, IconButton, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import useEventListener from "../hooks/useEventListener";

const animations = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: [null, 30, -30, 20, 0] },
};
const DESKTOP_DURATION = 0.8;
const MOBILE_DURATION = 1;

/**
 *
 * @param {{name:string,colour:string,textColour:string,background:string,previous?:string,next?:string,bgHeight?:function,contentExtraProps?:import("cssstyle").CSSStyleDeclaration}} props
 * @returns
 */
function PageComponent(props) {
    const heightFn = props.bgHeight || (() => "100%");
    const [height, setHeight] = useState(heightFn());
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
            height: height,
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
            flexDirection: "column",
            alignItems: "center",
            ...(props.contentExtraProps || {}),
        },
        alert: {
            display: "flex",
            justifyContent: "flex-end",
        },
        hidden: {
            display: "none",
        },
    }))();

    useEffect(() => {
        window.addEventListener("resize", () => setHeight(heightFn()));
        let timer = setTimeout(
            () => height === "100%" && setHeight(heightFn()),
            100
        );
        return () => {
            window.removeEventListener("resize", () => setHeight(heightFn()));
            clearTimeout(timer);
        };
    }, []);

    const navigate = useNavigate();
    const isMobile = window.screen.width < 600;

    const pageButtonProps = {
        borderRadius: "0",
        bgcolor: "rgba(25, 118, 210, 0.15)",
        "&:hover": {
            bgcolor: "rgba(25, 118, 210, 0.05)",
        },
        "&:disabled": {
            bgcolor: "rgba(25, 118, 210, 0.03)",
        },
    };

    const keyEvent = (evt) => {
        if (evt.key === "ArrowLeft" && props.previous) {
            navigate(props.previous);
        } else if (evt.key === "ArrowRight" && props.next) {
            navigate(props.next);
        }
    };

    useEventListener("keydown", keyEvent);

    return (
        <>
            {props.background && <div className={classes.background} />}
            <div className={classes.app} tabIndex={0}>
                <IconButton
                    className={classes.pageButton}
                    size="large"
                    color="primary"
                    disabled={!props.previous}
                    component={Link}
                    to={props.previous || false}
                    sx={pageButtonProps}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </IconButton>
                <motion.div
                    className={classes.container}
                    variants={animations}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: isMobile ? MOBILE_DURATION : DESKTOP_DURATION,
                    }}
                >
                    <Typography variant="h1" fontSize={20}>
                        {props.name}
                    </Typography>
                    <div className={classes.content}>{props.children}</div>
                </motion.div>
                <IconButton
                    className={classes.pageButton}
                    size="large"
                    color="primary"
                    disabled={!props.next}
                    component={Link}
                    to={props.next || false}
                    sx={pageButtonProps}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </IconButton>
                <div className={classes.alert}>
                    {/* <div className={`${classes.alert} ${classes.hidden}`}> */}
                    <Alert severity="warning" sx={{ position: "absolute" }}>
                        New website under development
                    </Alert>
                </div>
            </div>
        </>
    );
}

export default PageComponent;
