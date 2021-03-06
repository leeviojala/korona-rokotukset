import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Calendar(props) {
  console.log(props.shotDates);
  return (
    <React.Fragment>
      {props.cumulative ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={props.shotDates}
            margin={{
              top: 0,
              right: 0,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip labelStyle={{ color: "gray", fontWeight: "bold" }} />
            <Area
              type="natural"
              dataKey="rokotetutKum"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={props.shotDates}
            margin={{
              top: 0,
              right: 0,
              left: 5,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip labelStyle={{ color: "gray", fontWeight: "bold" }} />
            <Area
              type="natural"
              dataKey="rokotetut"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </React.Fragment>
  );
}
