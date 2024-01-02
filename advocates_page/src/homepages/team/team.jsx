import React from "react";
import "./team.css";
import Tile from "./tile.jsx";
import Grid from "@mui/material/Grid";
import Photo4 from "../../assests/Photo4icon.png";
import Photo5 from "../../assests/Photo5icon.png";
import Photo6 from "../../assests/Photo6icon.png";
import Photo7 from "../../assests/Photo7icon.png";
import Photo8 from "../../assests/Photo8icon.png";
import Photo9 from "../../assests/Photo9icon.png";

export default function Team() {
  let arr = [
    {
      name: "Danial Def",
      cases: "301",
      img: Photo4,
    },
    {
      name: "Sanfole",
      cases: "850",
      img: Photo5,
    },
    {
      name: "Cesforila",
      cases: "470",
      img: Photo6,
    },
    {
      name: "Colleen",
      cases: "180",
      img: Photo7,
    },
    {
      name: "Haldone",
      cases: "212",
      img: Photo8,
    },
    {
      name: "Danial Def",
      cases: "350",
      img: Photo9,
    },
  ];
  return (
    <div className="container-team">
      <div className="head-team">Our Team</div>
      <Grid container rowSpacing={7} columnSpacing={15}>
        {arr.map((val) => (
          <Grid item md={4}>
            <Tile name={val.name} cases={val.cases} img={val.img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
