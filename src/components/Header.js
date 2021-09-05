import React from "react";
import {Box, Divider, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4)
  }
}))

const Header = () => {
  const classes = useStyles()
  return <Box className={classes.root}>
    <Typography variant={"h2"}><b>Bangalore House Price Prediction</b></Typography>
    <Divider/>
  </Box>

}

export default Header
