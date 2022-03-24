/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import {
  Typography,
  Box,
  Button,
  CardContent,
  Grid,
  CardMedia,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import subBackground from "../../img/sub-header-bg.jpg";

const icons = [
  {
    color: "blue",
    label: "Due this week: 330",
  },
  {
    color: "green",
    label: "Completed: 240",
  },
  {
    color: "red",
    label: "Overdue: 33",
  },
];

const subHeaderItems = () => {
  return (
    <Grid
      container
      alignItems="center"
      css={css`
        padding-top: 8px;
      `}
    >
      {icons.map((i) => (
        <Grid
          item
          css={css`
            display: contents;
          `}
        >
          <CircleIcon
            css={css`
              padding-right: 5px;
              color: ${i.color};
            `}
          />
          <Typography
            variant="subtitle2"
            css={css`
              padding-right: 20px;
            `}
          >
            {i.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const SubHeader = () => {
  return (
    <CardMedia
      component="image"
      css={css`
        background-image: url("${subBackground}");
        display: flex;
        height: 138px;
      `}
      color="primary"
    >
      <Box
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <CardContent
          css={css`
            flex: 1 0 auto;
            color: white;
            padding-left: 258px !important;
          `}
        >
          <Typography component="div" variant="h5">
            Welcome back, Jasmine
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            css={css`
              padding-top: 30px;
              color: gray;
            `}
          >
            WEEK 4 ACTIVITY SUMMARY
          </Typography>
          {subHeaderItems(icons)}
        </CardContent>
        <Box>
          <Button
            variant="outlined"
            size="small"
            css={css`
              border: 1px solid white !important;
              color: white !important;
              margin-right: 5px;
              text-transform: none;
            `}
          >
            My Calendar
          </Button>
          <Button
            variant="outlined"
            size="small"
            css={css`
              border: 1px solid white !important;
              color: white !important;
              margin-right: 5px;
              text-transform: none;
            `}
          >
            Weekly Report
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            css={css`
              margin-right: 5px;
              text-transform: none;
            `}
          >
            <AddIcon
              css={css`
                padding-right: 8px;
              `}
            />
            Assign Activity
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            css={css`
              margin-right: 5px;
            `}
          >
            <ExpandMoreIcon />
          </Button>
        </Box>
      </Box>
    </CardMedia>
  );
};

export default SubHeader;
