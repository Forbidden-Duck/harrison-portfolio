import React, { useState } from "react";
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
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { withStyles } from "@mui/styles";

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

function ProjectCard(props) {
    const { classes } = props;
    const maxSize = { width: "100%", height: "100%" };

    /**
     * @type {import("@mui/system/styleFunctionSx".SxProps)}
     */
    const classesSx = {
        card: {
            position: "relative",
            maxWidth: "400px",
            maxHeight: "240px",
            ...maxSize,
        },
        actionArea: {
            position: "absolute",
            ...maxSize,
        },
    };

    const [dialogOpen, setDialogOpen] = useState(false);
    const [cardElevation, setCardElevation] = useState(CARD_DEFAULT_ELEVATION);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClose = () => {
        setDialogOpen(false);
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
                sx={classesSx.card}
                elevation={cardElevation}
                onMouseEnter={() => setCardElevation(CARD_HOVER_ELEVATION)}
                onMouseLeave={() => setCardElevation(CARD_DEFAULT_ELEVATION)}
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
                        {props.name || "Unspecified"}
                    </Typography>
                    {props.description && (
                        <Typography variant="body2" sx={{ userSelect: "none" }}>
                            {props.description}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </>
    );
}

export default withStyles(CARD_STYLES)(ProjectCard);
