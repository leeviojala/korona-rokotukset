import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";
import { Grid, Typography } from "@material-ui/core";
import moment from "moment";

export default function Statistics() {
  const [shotData, setShotData] = useState([""]);
  const getShots = (area) => {
    return Math.max(...shotData.map((e) => (e.area === area ? e.shots : 0)));

    // console.log(
    //   "tämä" +
    //     shotData
    //       .map(function (e) {
    //         return e.area === area ? e.shots : 0;
    //       })
    //       .sort()
    //       .reverse()
    // );
    // return shotData
    //   .map(function (e) {
    //     return e.area === area ? e.shots : 0;
    //   })
    //   .sort()
    //   .reverse()[1];
  };
  const getUpdateDate = (area) => {
    const parsed = new Date(
      Math.max(...shotData.map((e) => (e.area === area ? new Date(e.date) : 0)))
    );

    return {
      date: parsed.toLocaleString("fi-FI", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        timeZone: "UTC",
      }),
      time: parsed.toLocaleTimeString("fi-FI", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC",
      }),
    };
  };
  const getShotDates = (area) => {
    console.log("shotkutsuData");
    const areaFilt = shotData.filter((e) => e.area === area);

    return areaFilt
      .map((e, i) =>
        e.area === area
          ? {
              day: moment(e.date).format("DD.MM"),
              name: moment(e.date).format("DD.MM"),
              rokotetut: i === 0 ? e.shots : e.shots - areaFilt[i - 1].shots,
              rokotetutKum: e.shots,
            }
          : 0
      )
      .filter((e) => e !== 0);
  };
  // kuvaaja prosentteina kokonaismäärästä ja graafi ennustamaan rokotustahtia

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishVaccinationData"
      );
      setShotData(response.data);
    };
    getData();
  }, []);
  return (
    <Grid container spacing={2} style={{ paddingTop: "24px" }}>
      <InfoCard
        name="Koko Suomi"
        shots={getShots("Finland")}
        all={5518000 * 0.813}
        updateDate={getUpdateDate("Finland")}
        shotDates={getShotDates("Finland")}
      ></InfoCard>
      <InfoCard
        name="KYS"
        shots={getShots("KYS")}
        all={815000 * 0.813}
        updateDate={getUpdateDate("KYS")}
        shotDates={getShotDates("KYS")}
      ></InfoCard>
      <InfoCard
        name="HYKS"
        shots={getShots("HYKS")}
        all={2162228 * 0.813}
        updateDate={getUpdateDate("HYKS")}
        shotDates={getShotDates("HYKS")}
      ></InfoCard>
      <InfoCard
        name="TYKS"
        shots={getShots("TYKS")}
        all={870000 * 0.813}
        updateDate={getUpdateDate("TYKS")}
        shotDates={getShotDates("TYKS")}
      ></InfoCard>
      <InfoCard
        name="OYS"
        shots={getShots("OYS")}
        all={740000 * 0.813}
        updateDate={getUpdateDate("OYS")}
        shotDates={getShotDates("OYS")}
      ></InfoCard>
      <InfoCard
        name="TAYS"
        shots={getShots("TAYS")}
        all={900000 * 0.813}
        updateDate={getUpdateDate("TAYS")}
        shotDates={getShotDates("TAYS")}
      ></InfoCard>
      <Grid item xs={12}>
        <Typography color="textPrimary">Leevi Ojala</Typography>
        <Typography color="textPrimary">
          GitHub: <a href="https://github.com/leeviojala">leeviojala</a>
        </Typography>
        <Typography color="textPrimary">
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/leeviojala/">in/leeviojala</a>
        </Typography>
      </Grid>
    </Grid>
  );
}
