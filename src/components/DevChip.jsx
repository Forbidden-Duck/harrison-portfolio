import React from "react";
import { Chip, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as DevIcon from "devicons-react";
import hexToRGB from "../utils/hexToRGB";

/**
 *
 * @param {{ label: string, icon: keyof import("devicons-react"), size: number
 * ChipInject: import("@mui/material").ChipProps }} compProps
 * @returns
 */
function DevChip(compProps) {
    const { size = 1, ...props } = compProps;
    const Component = DevIcon[props.icon || "Aarch64Original"];
    const theme = useTheme();
    const rgbPrimaryMain = Object.values(
        hexToRGB(theme.palette.primary.main)
    ).join(",");

    return (
        <Chip
            label={props.label}
            variant="outlined"
            color="primary"
            size="medium"
            icon={
                <Component
                    width={`${size * 24}px`}
                    height={`${size * 24}px`}
                    style={{
                        borderRadius: "10%",
                        marginLeft: "0.6rem",
                    }}
                />
            }
            sx={{
                color: "white",
                fontSize: `${size * 0.8125}rem`,
                height: `${size * 32}px`,
                borderRadius: "9999px",
                background: `rgba(${rgbPrimaryMain},0.3)`,
                "&&:hover": {
                    background: `rgba(${rgbPrimaryMain},0.6)`,
                },
                marginRight: "1rem",
            }}
            clickable
            {...props.ChipInject}
        />
    );
}

export default DevChip;
