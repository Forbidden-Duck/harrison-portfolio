import React, { useState, useRef } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

function ProjectGridItem(props) {
    const gridItemRef = useRef(null);

    const classes = makeStyles((theme) => ({
        gridItemHover: {
            animation: "$gridHover 0.5s ease-in-out forwards",
        },
        gridItemUnhover: {
            animation: "$gridUnhover 0.5s ease-in-out forwards",
        },
        "@keyframes gridHover": {
            "0%": {
                height: "260px",
            },
            "100%": {
                height: "280px",
            },
        },
        "@keyframes gridUnhover": {
            "0%": {
                height: `${gridItemRef.current?.offsetHeight || 280}px`,
            },
            "100%": {
                height: "260px",
            },
        },
    }))();

    const [hover, setHover] = useState(null);

    return (
        <Grid
            className={
                !!hover
                    ? classes.gridItemHover
                    : hover === false && classes.gridItemUnhover
            }
            ref={gridItemRef}
            item
        >
            {/* Prevent the padding on grid from activating animation */}
            <div
                style={{ height: "100%" }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {props.children}
            </div>
        </Grid>
    );
}

export default ProjectGridItem;
