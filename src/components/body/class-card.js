/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";

const ClassCard = ({ items }) => {
  return (
    <>
      <Grid
        container
        css={css`
          padding-top: 25px;
          grid-gap: 25px;
        `}
      >
        {items.map((i) => (
          <Box
            component="div"
            sx={{ minWidth: 190 }}
            css={css`
              border-top: 3px ${i.color} solid;
            `}
          >
            <Card variant="outlined" sx={{ height: "auto" }}>
              <CardContent
                css={css`
                  padding-bottom: 0 !important;
                `}
              >
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold" }}
                  gutterBottom
                >
                  <OfflineBoltIcon
                    css={css`
                      vertical-align: top;
                      border: 2px solid ${i.color};
                      margin-right: 8px;
                      color: ${i.color};
                    `}
                  />
                  {i.label}
                </Typography>

                <Typography variant="subtitle1">
                  <StarIcon
                    css={css`
                      vertical-align: top;
                      color: blue;
                    `}
                  />
                  | {i.year} | {i.subject}
                </Typography>
                <Typography
                  variant="subtitle1"
                  css={css`
                    padding-top: 8px;
                  `}
                >
                  Activities due this week
                  <label
                    css={css`
                      margin-left: 28px;
                      border: 1px solid lightgray;
                      background: lightgray;
                    `}
                  >
                    {i.activity}
                  </label>
                </Typography>
                <Typography
                  variant="subtitle1"
                  css={css`
                    padding-top: 8px;
                  `}
                >
                  Assign activities
                </Typography>
                <Typography
                  variant="subtitle1"
                  css={css`
                    padding-top: 8px;
                  `}
                >
                  Class calendar
                </Typography>
                <Button
                  css={css`
                    border-radius: 0 !important;
                    border-top: 1px solid gray !important;
                    color: gray !important;
                    justify-content: left !important;
                    width: 100%;
                    margin-top: 6px !important;
                  `}
                >
                  <AddIcon
                    css={css`
                      padding-right: 8px;
                    `}
                  />
                  Add Student
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default ClassCard;
