import React, { useEffect, useState } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";
import { Grid } from "@material-ui/core";

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
        all={5518000}
      ></InfoCard>
      <InfoCard name="KYS" shots={getShots("KYS")} all={815000}></InfoCard>
      <InfoCard name="HYKS" shots={getShots("HYKS")} all={1500000}></InfoCard>
      <InfoCard name="TYKS" shots={getShots("TYKS")} all={860000}></InfoCard>
      <InfoCard name="OYS" shots={getShots("OYS")} all={740000}></InfoCard>
      <InfoCard name="Muut alueet" shots={getShots("Other areas")}></InfoCard>
    </Grid>
  );
}
