import React, { useState } from "react";
import PageComponent from "../../components/PageComponent";
import FormikTextField from "../../components/FormikTextField";
import ActionButton from "../../components/ActionButton";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const ZAPIER_URL = "https://hooks.zapier.com/hooks/catch/11988349/bi9kgd9/";

function ContactPage() {
    const classes = makeStyles((theme) => ({
        card: {
            maxWidth: "500px",
            width: "100%",
        },
        container: {
            display: "flex",
            justifyContent: "center",
            "& :not(:last-child)": {
                marginRight: "0.5rem",
            },
            "@media (max-width:600px)": {
                display: "unset",
                justifyContent: "unset",
                "& :not(:last-child)": {
                    marginRight: "unset",
                    marginBottom: "0.5rem",
                },
            },
        },
    }))();

    const [formLoading, setFormLoading] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        setFormLoading(true);
        setFormError(false);
        values.message = values.message.replace(/\n/gi, "<br />");
        fetch(ZAPIER_URL, {
            method: "POST",
            body: JSON.stringify(values),
        })
            .then((response) => {
                if (response.ok) {
                    resetForm();
                } else {
                    throw response;
                }
            })
            .catch((error) => setFormError(true))
            .finally(() => setFormLoading(false));
    };
    const contactSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required."),
        subject: Yup.string().required("Subject is required."),
        message: Yup.string().required("Message is required."),
    });

    return (
        <PageComponent
            name="Contact"
            colour="#cac5a0"
            textColour="black"
            background="https://www.coreldraw.com/static/cdgs/images/pages/seo/tips/photo/basics/blur-background/blur-background.jpg"
            previous="/skills"
            contentExtraProps={{
                justifyContent: "center",
                width: "100%",
                height: "95%",
            }}
        >
            <Formik
                initialValues={{
                    email: "",
                    subject: "",
                    message: "",
                }}
                validationSchema={contactSchema}
                onSubmit={handleSubmit}
                validateOnBlur
            >
                <Form className={classes.card}>
                    <Card elevation={10}>
                        <CardHeader
                            title="Contact"
                            titleTypographyProps={{
                                variant: "h4",
                                sx: { fontWeight: "400" },
                            }}
                        />
                        <CardContent>
                            <div className={classes.container}>
                                <FormikTextField
                                    name="email"
                                    label="Email"
                                    id="email-input"
                                    autoComplete="email"
                                    sx={{ width: "100%" }}
                                />
                                <FormikTextField
                                    name="subject"
                                    label="Subject"
                                    id="subject-input"
                                    autoComplete="off"
                                    sx={{ width: "100%" }}
                                />
                            </div>
                            <FormikTextField
                                name="message"
                                label="Message"
                                id="message-input"
                                autoComplete="off"
                                rows={10}
                                sx={{ width: "100%", marginTop: "1rem" }}
                                multiline
                            />
                        </CardContent>
                        {!!formError && (
                            <Typography
                                variant="body2"
                                sx={{ color: "red", marginLeft: "1rem" }}
                            >
                                Failed to send email
                            </Typography>
                        )}
                        <CardActions sx={{ justifyContent: "right" }}>
                            <ActionButton
                                variant="contained"
                                color="primary"
                                type="submit"
                                isLoading={formLoading}
                                size="large"
                            >
                                <Typography variant="body2">Send</Typography>
                            </ActionButton>
                        </CardActions>
                    </Card>
                </Form>
            </Formik>
        </PageComponent>
    );
}

export default ContactPage;
