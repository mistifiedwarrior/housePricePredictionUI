import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  author: {
    bottom: 0,
    position: "fixed",
    textAlign: "right",
    width: "50%",
    padding: theme.spacing(1, 4, 1, 0)
  }
}))

const Footer = () => {
  const classes = useStyles()
  return <Container maxWidth="md">
    <div className={classes.author}>
      <Typography variant="h6" color="primary">Designed By: Aditi Gupta</Typography>
    </div>
  </Container>

}

export default Footer
