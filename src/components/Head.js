import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";

export default function Head() {
  return (
    <Alert severity="info" style={{ paddingTop: "16px" }}>
      <AlertTitle>Rokotustilanne Suomessa</AlertTitle>
      Alla on kuvattuna suomen koronarokotustilanne reaaliaikaisesti.
      <strong> Tämä data ei välttämättä pidä paikkaansa!</strong>
    </Alert>
  );
}
