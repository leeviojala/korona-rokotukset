import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Grow,
  LinearProgress,
  Switch,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import UpdateIcon from "@material-ui/icons/Update";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Calendar from "./Calendar";
import InfoIcon from "@material-ui/icons/Info";
export default function InfoCard(props) {
  const [tooltip, openTooltip] = React.useState(false);
  const [cumulative, setCumulative] = React.useState(false);
  const toggleCumulative = () => {
    setCumulative(!cumulative);
  };
  const handleTooltipOpen = () => {
    openTooltip(true);
  };
  const handleTooltipClose = () => {
    openTooltip(false);
  };

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
                    <span style={{ opacity: "0.6" }}>
                      {props.all.toFixed(0)}
                    </span>
                    <Tooltip
                      title="Suhteessa aikuisväestöön."
                      aria-label="Suhteessa aikuisväestöön."
                      onClose={handleTooltipClose}
                      open={tooltip}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                    >
                      <InfoIcon
                        fontSize="inherit"
                        style={{ paddingLeft: "8px" }}
                        onMouseEnter={handleTooltipOpen}
                        onMouseLeave={handleTooltipClose}
                      ></InfoIcon>
                    </Tooltip>
                  </Typography>
                </Grid>

                <Grid item xs={12} align="center">
                  <Typography variant="body1">
                    {((100 / props.all) * props.shots).toFixed(1)} %
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={Math.round((100 / props.all) * props.shots)}
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
                  <FormControl>
                    <FormGroup>
                      <FormControlLabel
                        value="Kumulatiivinen graafi"
                        control={
                          <Switch
                            checked={cumulative}
                            onChange={() => toggleCumulative()}
                            color="primary"
                          />
                        }
                        label="Kumulatiivinen graafi"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} style={{ height: "200px" }}>
                  <Calendar
                    shotDates={props.shotDates}
                    cumulative={cumulative}
                  ></Calendar>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grow>
      ) : (
        <Skeleton variant="rect" height={450} />
      )}
    </Grid>
  );
}
