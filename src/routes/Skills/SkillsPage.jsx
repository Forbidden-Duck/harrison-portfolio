import React, { useRef } from "react";
import PageComponent from "../../components/PageComponent";
import DevChip from "../../components/DevChip";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const GLOBAL_CHIP_SIZE = 1.2;

function HomePage() {
    const classes = makeStyles((theme) => ({
        container: {
            textAlign: "center",
            marginTop: "4rem",
            "& $list:not(:last-child)": {
                marginBottom: "2rem",
            },
            "& h4": {
                marginBottom: "0.6rem",
            },
        },
        list: {
            "& div": {
                marginBottom: "0.5rem",
            },
        },
    }))();

    const containerRef = useRef(null);

    return (
        <PageComponent
            name="Skills"
            colour="#e9a870"
            textColour="white"
            background="https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-06.jpg"
            previous="/projects"
            next="/contact"
            bgHeight={() =>
                containerRef.current
                    ? containerRef.current.offsetHeight + 107 > 835
                        ? containerRef.current.offsetHeight + 107
                        : "100%"
                    : "100%"
            }
        >
            <div ref={containerRef} className={classes.container}>
                <Typography variant="h4" fontWeight={500}>
                    Frontend
                </Typography>
                <div className={classes.list}>
                    <DevChip
                        label="JavaScript"
                        icon="JavascriptOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="TypeScript"
                        icon="TypescriptOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="React"
                        icon="ReactOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="Redux"
                        icon="ReduxOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="HTML"
                        icon="Html5Original"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="CSS"
                        icon="Css3Original"
                        size={GLOBAL_CHIP_SIZE}
                    />
                </div>
                <Typography variant="h4" fontWeight={500}>
                    Backend
                </Typography>
                <div className={classes.list}>
                    <DevChip
                        label="NodeJS"
                        icon="NodejsOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="Express"
                        icon="ExpressOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="CryptoJS"
                        icon="NodejsOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="JsonWebToken"
                        icon="NodejsOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="MySQL"
                        icon="MysqlOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="Postgres"
                        icon="PostgresqlOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                </div>
                <Typography variant="h4" fontWeight={500}>
                    Tools
                </Typography>
                <div className={classes.list}>
                    <DevChip
                        label="Git"
                        icon="GitOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="GitHub"
                        icon="GithubOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="NPM"
                        icon="NpmOriginalWordmark"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="Yarn"
                        icon="YarnOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="Jira"
                        icon="JiraOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                    <DevChip
                        label="REST APIs"
                        icon="NodejsOriginal"
                        size={GLOBAL_CHIP_SIZE}
                    />
                </div>
            </div>
        </PageComponent>
    );
}

export default HomePage;
