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
import UpdateIcon from "@material-ui/icons/Update";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Calendar from "./Calendar";
export default function InfoCard(props) {
  console.log(props);
  return (
    <Grid item xs={12} md={6}>
      {props.shots ? (
        <Grow in={props.shots ? true : false}>
          <Card>
            <CardContent>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12} align="center">
                  <Typography variant="h4">{props.name}</Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <Typography variant="h5">
                    {props.shots} /{" "}
                    <span style={{ opacity: "0.6" }}>{props.all}</span>
                    <FontAwesomeIcon
                      style={{ paddingLeft: "8px" }}
                      icon={faSyringe}
                    ></FontAwesomeIcon>
                  </Typography>
                </Grid>

                <Grid item xs={12} align="center">
                  <Typography variant="body1">
                    {(props.all / props.shots).toFixed(2)} %
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={Math.round(props.all / props.shots)}
                  ></LinearProgress>
                </Grid>

                <Grid item xs={12} align="left">
                  <Typography variant="subtitle1" style={{ opacity: "0.6" }}>
                    <UpdateIcon
                      style={{ paddingRight: "8px" }}
                      fontSize="inherit"
                    ></UpdateIcon>
                    <span>Päivitetty:</span>
                  </Typography>
                  <Typography variant="subtitle2">
                    {" "}
                    <span style={{ paddingRight: "4px" }}>
                      <CalendarTodayIcon fontSize="inherit"></CalendarTodayIcon>
                    </span>
                    <span>{props.updateDate.date}</span>
                    <span style={{ paddingLeft: "16px", paddingRight: "4px" }}>
                      <QueryBuilderIcon fontSize="inherit"></QueryBuilderIcon>
                    </span>
                    <span>{props.updateDate.time}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ height: "200px" }}>
                  <Calendar shotDates={props.shotDates}></Calendar>
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
