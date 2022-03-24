/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Typography, Box, Container, Link } from "@mui/material";
import ClassCard from "./class-card";
import HelpCard from "./help-card";

const items = [
  {
    color: "blue",
    label: "12ENGA",
    year: "Year 12",
    subject: "English",
    activity: 1,
  },
  {
    color: "green",
    label: "12ENGB",
    year: "Year 13",
    subject: "English",
    activity: 0,
  },
  {
    color: "red",
    label: "08MATHS",
    year: "Year 12",
    subject: "Maths",
    activity: 2,
  },
  {
    color: "red",
    label: "09SCI",
    year: "Year 10",
    subject: "Science",
    activity: 2,
  },
];

const Body = () => {
  return (
    <Container
      maxWidth="lg"
      css={css`
        padding-top: 32px;
        display: flex;
        padding-bottom: 32px;
      `}
    >
      <Box
        component="div"
        css={css`
          width: 70%;
        `}
      >
        <Typography variant="h4">Here are your classes</Typography>
        <Box component="div">
          <Typography
            variant="body2"
            css={css`
              font-size: 0.75rem;
            `}
          >
            Select a class to view this week's assigned activities and begin
            your lesson.{" "}
            <Link
              href="#"
              underline="always"
              color="inherit"
              css={css`
                padding-left: 90px;
              `}
            >
              View all classes
            </Link>
          </Typography>
          <Box>
            <ClassCard items={items} />
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        css={css`
          width: 30%;
        `}
      >
        <HelpCard />
      </Box>
    </Container>
  );
};

export default Body;
