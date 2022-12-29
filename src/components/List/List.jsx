import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./styles.js";

const List = () => {
  const classes = useStyles();
  const { type, setType } = useState("resturant");
  const { rating, setRating } = useState("");
  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Dining around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onchange={(e) => setType(e.target.value)}>
          <MenuItem value="resturants">Resturants</MenuItem>
          <MenuItem value="Hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Resturants</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={type} onchange={(e) => setType(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
