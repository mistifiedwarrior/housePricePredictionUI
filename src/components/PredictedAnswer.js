import React from "react";
import {Box, Divider, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    margin: theme.spacing(2),
    '& > *': {
      paddingRight: theme.spacing(4)
    }
  },
  value: {
    fontWeight: 400,
    color: theme.palette.secondary.dark
  }
}))

const PredictedAnswer = ({selectedOptions, price}) => {
  const classes = useStyles()
  return <Box>
    <div className={classes.row}>
      <Typography variant="h6">Location:<span className={classes.value}> {selectedOptions.location}</span></Typography>
    </div>
    <div className={classes.row}>
      <Typography variant="h6">Size:<span className={classes.value}> {selectedOptions.size} BHK </span></Typography>
      <Typography variant="h6">Area:<span className={classes.value}> {selectedOptions.area} Sqft.</span></Typography>
      <Typography variant="h6">Bath:<span className={classes.value}> {selectedOptions.bath}</span></Typography>
    </div>
    <Divider/>
    <div className={classes.row}>
      <Typography variant="h5">Price: {price} Lakhs</Typography>
    </div>
  </Box>
}

export default PredictedAnswer
