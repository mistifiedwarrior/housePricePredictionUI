import React, {useEffect, useState} from "react";
import {Divider, makeStyles, Typography} from "@material-ui/core";
import PredictedAnswer from "./PredictedAnswer";
import PredictionForm from "./PredictionForm";
import useForm from "../hooks/useForm";
import API from "../api/API";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  },
  error: {
    margin: theme.spacing(2)
  }
}))


const Prediction = () => {
  const classes = useStyles()
  const [price, setPrice] = useState(undefined)
  const [error, setError] = useState(false)
  const [locations, setLocations] = useState([])
  const {onChange, values, handleSubmit} = useForm({
    location: "",
    size: "",
    area: "",
    bath: ""
  })
  const [selectedValues, setSelectedValues] = useState(values)

  useEffect(() => {
    API("/locations", {method: "GET"})
      .then(res => setLocations(res.locations))
      .catch((err) => ({}))
  }, [])

  const onSubmit = (values) => {
    setSelectedValues({...values})
    API("/predict-price", {method: "POST", data: values})
      .then(res => {
        setError(false)
        setPrice(res.price.toFixed(2));
      })
      .catch((e) => setError(true))
  }

  return <div className={classes.root}>
    <PredictionForm locations={locations} onChange={onChange} values={values} handleSubmit={handleSubmit(onSubmit)}/>
    <Divider/>
    {!error && price && <PredictedAnswer selectedOptions={selectedValues} price={price}/>}
    {error && <Typography className={classes.error} variant={"h5"} color={"error"}>Something went wrong, Please Try
      again </Typography>}
  </div>
}

export default Prediction
