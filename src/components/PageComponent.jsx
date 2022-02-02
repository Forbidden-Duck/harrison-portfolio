import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import useEventListener from "../hooks/useEventListener";

const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

/**
 *
 * @param {{name:string,colour:string,textColour:string,background:string,previous?:string,next?:string,bgHeight?:function}} props
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
            height: height > 655 ? `${height + 300}px` : "100%",
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
        },
    }))();

    useEffect(() => {
        window.addEventListener("resize", () => setHeight(heightFn()));
    }, []);

    const navigate = useNavigate();

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
                    exit="exit"
                    transition={{ duration: 1 }}
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
            </div>
        </>
    );
}

export default PageComponent;
