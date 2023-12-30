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
  return (
    <div className="container-team">
      <div className="head-team">Our Team</div>
      <Grid container rowSpacing={7} columnSpacing={15}>
        <Grid item md={4}>
          <Tile name="Danial Def" cases="301" img={Photo4} />
        </Grid>
        <Grid item md={4}>
          <Tile name="Sanfole" cases="850" img={Photo5} />
        </Grid>
        <Grid item md={4}>
          <Tile name="Cesforila" cases="470" img={Photo6} />
        </Grid>
        <Grid item md={4}>
          <Tile name="Colleen" cases="180" img={Photo7} />
        </Grid>
        <Grid item md={4}>
          <Tile name="Haldone" cases="212" img={Photo8} />
        </Grid>
        <Grid item md={4}>
          <Tile name="Nik Jeo" cases="350" img={Photo9} />
        </Grid>
      </Grid>
    </div>
  );
}
