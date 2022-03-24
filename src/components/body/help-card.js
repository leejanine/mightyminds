/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Box, Grid, Button, CardMedia, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import portal from "../../img/side-portal.png";
import HelpIcon from "@mui/icons-material/Help";

const upperItems = [
  "Visit help centre",
  "Send us your feedback",
  "Make a request or suggestion",
  "Report an issue",
];

const bottomItems = ["Teacher support group", "Schedule a consultation"];

const list = (items) => {
  return (
    <>
      {items.map((option) => (
        <Grid
          item
          css={css`
            padding-top: 8px;
          `}
        >
          <Typography
            variant="subtitle2"
            css={css`
              padding-right: 64px;
              color: gray;
              width: 100%;
            `}
          >
            <ArrowForwardIcon
              css={css`
                vertical-align: top;
                padding-right: 8px;
                color: gray;
              `}
            />
            {option}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

const HelpCard = () => {
  return (
    <>
      <CardMedia
        component="image"
        css={css`
          background-image: url("${portal}");
          height: 420px;
          width: 300px;
        `}
        color="primary"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          css={css`
            padding-top: 310px;
          `}
        >
          <Button variant="contained" color="primary">
            See how it works
          </Button>
          <Link
            href="#"
            underline="always"
            color="primary"
            css={css`
              padding-top: 18px;
            `}
          >
            Getting started guide
          </Link>
        </Box>
      </CardMedia>
      <Grid
        item
        css={css`
          width: 300px;
          margin-top: 12px;
          border: 1px solid gray;
        `}
      >
        <Box
          css={css`
            padding: 16px;
          `}
        >
          <Typography
            variant="h6"
            css={css`
              border-bottom: 1px solid gray;
              padding-bottom: 10px;
            `}
          >
            <HelpIcon
              css={css`
                vertical-align: text-bottom;
                padding-right: 8px;
                color: gray;
              `}
            />
            Help and Support
          </Typography>
          {list(upperItems)}

          <Typography
            variant="h6"
            css={css`
              border-bottom: 1px solid gray;
              padding-bottom: 10px;
            `}
          ></Typography>
          {list(bottomItems)}
        </Box>
      </Grid>
    </>
  );
};

export default HelpCard;
