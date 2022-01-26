import React from "react";
import PageComponent from "../../components/PageComponent";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

function Paragraph(props) {
    return (
        <Typography variant="body1" fontWeight={300} fontSize={17}>
            {props.children}
        </Typography>
    );
}

function Code(props) {
    return (
        <code
            style={{
                color: "#56bddd",
                textShadow:
                    "0.5px 0 0 #000, -0.5px 0 0 #000, 0 0.5px 0 #000, 0 -0.5px 0 #000",
            }}
        >
            {props.children}
        </code>
    );
}

function HomePage() {
    const classes = makeStyles((theme) => ({
        container: {
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
        },
        paragraph: {
            maxWidth: "900px",
            background: "rgba(0,0,0,0.3)",
            padding: "30px",
            "& *:not(:last-child)": {
                marginBottom: "20px",
            },
        },
        profileImage: {
            width: "224px",
            height: "224px",
            backgroundImage: "url('/images/HarrisonHoward.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "50%",
        },
    }))();

    return (
        <PageComponent
            name="About"
            colour="#501d19"
            textColour="white"
            background="https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg"
            previous="/home"
            next="/projects"
        >
            <div className={classes.profileImage} />
            <div className={classes.container}>
                <div className={classes.paragraph}>
                    <Paragraph>
                        My full name is <Code>Harrison Kyle Darius Howard</Code>
                        , I was born in 2002 and as of June 2022, I am 20 years
                        old. I have been coding since I was 13 years old and the
                        first language I learned was C#. I used C# to create
                        Pong with Unity. I continued using Unity to expand my
                        knowledge of game design and development.
                    </Paragraph>
                    <Paragraph>
                        In 2017 I joined Discord and discovered I could create a
                        bot using JavaScript. A Discord Bot is a program that
                        runs server-side and you can control different aspects
                        of Discord using this technology (i.e. sending messages,
                        creating channels, banning users). I created my first
                        for-profit bot in 2017 and continued developing it up
                        until 2020. This bot was designed to be multi-purpose
                        and tackle a variety of problems, these problems would
                        vary from mini-games to moderating a server. In 2020, I
                        disbanded the bot and continued my search to find a
                        career I wanted to pursue.
                    </Paragraph>
                    <Paragraph>
                        In 2020 I took and completed a Diploma of Software
                        Development course with TAFE Queensland. During this
                        year-long course, I discovered the career I wanted to
                        pursue which was website development. At the start of
                        2021, I started to learn HTML, CSS, and JavaScript, this
                        also included learning ExpressJS and how to make a
                        backend API. Around the time of March 2021, I found
                        React and immediately was obsessed with how I could
                        create stunning, beautiful, and interactive websites
                        without having to invest thousands of hours to make
                        something that could only do a fraction of that.
                    </Paragraph>
                    <Paragraph>
                        I am eager to invest and expand my knowledge in the real
                        world, solving real-world problems. I have spent years
                        learning and discovering new technologies and languages
                        that have given me the experience I need to begin the
                        career I want.
                    </Paragraph>
                </div>
            </div>
        </PageComponent>
    );
}

export default HomePage;
