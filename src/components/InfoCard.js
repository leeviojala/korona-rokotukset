import {
  Card,
  CardContent,
  Grid,
  Grow,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
export default function InfoCard(props) {
  console.log(Math.round(props.all / props.shots));
  return (
    <Grid item xs={12} md={6}>
      {props.shots ? (
        <Grow in={props.shots}>
          <Card>
            <CardContent>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} align="center">
                  <Typography variant="h4">{props.name}</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <Typography variant="h5">
                    {props.shots} / {props.all}{" "}
                    <FontAwesomeIcon
                      style={{ paddingLeft: "8px" }}
                      icon={faSyringe}
                    ></FontAwesomeIcon>
                  </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <Typography variant="h4">
                    {Math.round(props.all / props.shots)} %
                  </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <LinearProgress
                    variant="determinate"
                    value={Math.round(props.all / props.shots)}
                  ></LinearProgress>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grow>
      ) : (
        <Skeleton variant="rect" height={200} />
      )}
    </Grid>
  );
}
