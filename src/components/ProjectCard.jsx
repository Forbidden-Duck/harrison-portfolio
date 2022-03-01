import React, { useState, useRef, useEffect } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Dialog,
    DialogTitle,
    DialogActions,
    Typography,
    Button,
    Chip,
    useMediaQuery,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { withStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const BANNER_HEIGHT = 140;
const CARD_DEFAULT_ELEVATION = 3;
const CARD_HOVER_ELEVATION = 20;
const CARD_STYLES = {
    cardActionRoot: {
        "&:hover $focusHighlight": {
            opacity: "0.1 !important",
        },
    },
    focusHighlight: {},
};
const DIALOG_TRANSITION = React.forwardRef(function DIALOG_TRANSITION(
    props,
    ref
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

/**
 *
 * @param {{ banner: string, name: string, description: string, link: string, active: "active" | "inactive",
 * maxHeight: string, maxWidth: string, useMaxSize: boolean }} props
 * @returns {JSX.Element}
 */
function ProjectCard(props) {
    const { classes } = props;
    const maxSize = { width: "100%", height: "100%" };
    const isMobile = useMediaQuery("(max-width:600px)");

    const [dialogOpen, setDialogOpen] = useState(false);
    const [cardElevation, setCardElevation] = useState(CARD_DEFAULT_ELEVATION);

    const cardRef = useRef(null);
    const [cardSize, setCardSize] = useState(false);

    const descriptionRef = useRef(null);
    const [descriptionHeight, setDescriptionHeight] = useState(false);
    const [descriptionClamp, setDescriptionClamp] = useState("unset");

    useEffect(() => {
        setCardSize({
            height: cardRef.current?.offsetHeight || 0,
            width: cardRef.current?.offsetWidth || 0,
        });
        setDescriptionHeight(descriptionRef.current?.offsetHeight || 0);
    }, []);

    useEffect(() => {
        setDescriptionClamp(Math.round(cardSize?.height / 120) || 2);
    }, [descriptionHeight]);

    // Window resize resets the card size and description height
    useEffect(() => {
        window.addEventListener("resize", () => {
            setCardSize({
                height: cardRef.current?.offsetHeight || 0,
                width: cardRef.current?.offsetWidth || 0,
            });
            setDescriptionHeight(descriptionRef.current?.offsetHeight || 0);
        });
        return () => {
            window.removeEventListener("resize", () => {
                setCardSize({
                    height: cardRef.current?.offsetHeight || 0,
                    width: cardRef.current?.offsetWidth || 0,
                });
                setDescriptionHeight(descriptionRef.current?.offsetHeight || 0);
            });
        };
    }, []);

    const calculateHoverWidth = () => {
        // Always use maxWidth to calculate growth
        if (props.useMaxSize) {
            if (props.maxWidth) return `calc(${props.maxWidth} + 30)`;
            return 430;
        }
        return cardSize.width + 30;
    };

    const calculateHoverHeight = (dialog) => {
        if (isMobile) return "unset";
        // If the description growth by 30px is less than the entire content, show the entire content
        if (
            descriptionRef.current?.offsetHeight + 30 <
                descriptionRef.current?.scrollHeight ||
            (dialog &&
                descriptionRef.current?.offsetHeight <=
                    descriptionRef.current?.scrollHeight)
        ) {
            return (
                cardSize.height + (descriptionRef.current?.scrollHeight - 30)
            );
        }
        // Always use maxWidth to calculate growth
        if (props.useMaxSize) {
            if (props.maxHeight) return `calc(${props.maxHeight} + 30)`;
            return cardSize.height + 30;
        }
        return cardSize.height + 30;
    };

    if (props.run) props.run(calculateHoverWidth, calculateHoverHeight);

    /**
     * @type {import("@mui/system/styleFunctionSx".SxProps)}
     */
    const classesSx = {
        card: {
            position: "relative",
            transition: "all 0.5s ease-in-out",
            maxWidth: props.maxWidth || "400px",
            maxHeight: props.maxHeight || "240px",
            "&:hover": {
                maxWidth: calculateHoverWidth(),
                maxHeight: calculateHoverHeight(),
                ...maxSize,
            },
            "@media (max-width:600px)": {
                maxHeight: "unset",
            },
        },
        actionArea: {
            position: "absolute",
            ...maxSize,
        },
    };
    if (props.useMaxSize) classesSx.card = { ...classesSx.card, ...maxSize };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    let timer = useRef(null);
    const onCardMouseEnter = () => {
        setCardElevation(CARD_HOVER_ELEVATION);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setDescriptionClamp("unset");
            timer = null;
        }, 250);
    };
    const onCardMouseLeave = () => {
        setCardElevation(CARD_DEFAULT_ELEVATION);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setDescriptionClamp(Math.round(cardSize?.height / 120) || 2);
            timer = null;
        }, 250);
    };

    return (
        <>
            <Dialog
                open={!!props.link && dialogOpen}
                TransitionComponent={DIALOG_TRANSITION}
                keepMounted
            >
                <DialogTitle sx={{ userSelect: "none" }}>
                    Open {props.name && `${props.name}'s `}Link?
                </DialogTitle>
                <DialogActions>
                    <Button
                        color="error"
                        sx={{ marginRight: "5px" }}
                        onClick={handleDialogClose}
                    >
                        No
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleDialogClose}
                        href={props.link}
                        target="_blank"
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <Card
                ref={cardRef}
                sx={
                    dialogOpen
                        ? {
                              ...classesSx.card,
                              maxWidth: calculateHoverWidth(),
                              maxHeight: calculateHoverHeight(true),
                              ...maxSize,
                          }
                        : classesSx.card
                }
                elevation={cardElevation}
                onMouseEnter={onCardMouseEnter}
                onMouseLeave={onCardMouseLeave}
                onClick={() => setDialogOpen(true)}
            >
                <CardActionArea
                    classes={{
                        root: classes.cardActionRoot,
                        focusHighlight: classes.focusHighlight,
                    }}
                    sx={classesSx.actionArea}
                />
                {props.banner && (
                    <CardMedia
                        component="img"
                        height={BANNER_HEIGHT}
                        image={props.banner}
                        alt="Project Banner"
                        sx={{ userSelect: "none" }}
                    />
                )}
                <CardContent>
                    <Typography
                        variant="h5"
                        sx={{ paddingBottom: "3px", userSelect: "none" }}
                    >
                        {props.name || "Unspecified"}{" "}
                        {props.active === "active" && (
                            <Chip label="Active" color="success" size="small" />
                        )}
                        {props.active === "inactive" && (
                            <Chip label="Inactive" color="error" size="small" />
                        )}
                        {!!props.link && (
                            <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                style={{
                                    marginLeft: "5px",
                                    width: "20px",
                                    height: "20px",
                                    color: "#1657cd",
                                }}
                            />
                        )}
                    </Typography>
                    {props.description && (
                        <Typography
                            ref={descriptionRef}
                            variant="body2"
                            sx={{
                                userSelect: "none",
                                display: "-webkit-box",
                                "-webkit-line-clamp": `${
                                    isMobile
                                        ? "unset"
                                        : dialogOpen
                                        ? "unset"
                                        : descriptionClamp
                                }`,
                                "-webkit-box-orient": "vertical",
                                overflow: "hidden",
                            }}
                        >
                            {props.description}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </>
    );
}

export default withStyles(CARD_STYLES)(ProjectCard);
