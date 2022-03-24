/** @jsxImportSource @emotion/react */
import React from "react";
import {
  AppBar,
  Typography,
  Box,
  Grid,
  Tabs,
  Tab,
  IconButton,
  Avatar,
} from "@mui/material";
import { css } from "@emotion/react";
import HelpIcon from "@mui/icons-material/Help";
import owl from "../../img/owl-logo.png";

const items = [
  {
    value: 0,
    label: "Home",
  },
  {
    value: 1,
    label: "Classes",
  },
  {
    value: 2,
    label: "Planner",
  },
  {
    value: 3,
    label: "School Data",
  },
  {
    value: 4,
    label: "Library",
  },
];

const MainHeader = () => {
  return (
    <AppBar color="primary" position="static" elevation={0} component="div">
      <Grid
        container
        alignItems="center"
        spacing={1}
        css={css`
          padding: 10px;
          display: flex;
        `}
      >
        <Grid item sm={2}>
          <Box
            component="div"
            css={css`
              display: flex;
              align-items: center;
              padding-right: 15px;
              border-right: 1px white solid;
            `}
          >
            <img
              src={owl}
              alt="owl-img"
              width="50px"
              css={css`
                margin-right: 10px;
              `}
            />
            <Box component="span">MIGHTY MINDS</Box>
          </Box>
        </Grid>
        <Grid item sm={8}>
          <Box
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-right: 25px;
              border-right: 1px white solid;
            `}
          >
            <Grid>
              <Tabs
                value={0}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="tab items"
              >
                {items.map((option) => (
                  <Tab label={option.label} value={option.value} />
                ))}
              </Tabs>
            </Grid>
            <Grid
              css={css`
                display: flex;
              `}
            >
              <HelpIcon
                css={css`
                  margin-right: 5px;
                `}
              />
              Help Centre
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          css={css`
            margin-left: 15px;
          `}
        >
          <Typography
            css={css`
              text-align: right;
            `}
          >
            Jasmine Finn <br />
            Teacher Account
          </Typography>
        </Grid>
        <Grid item>
          <IconButton color="inherit" sx={{ p: 0.5 }}>
            <Avatar
              alt="avatar"
              variant="rounded"
              css={css`
                background-color: #757ce8;
              `}
            >
              JF
            </Avatar>
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default MainHeader;
