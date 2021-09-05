import React, {useEffect, useState} from "react";
import {Button, Container, makeStyles, MenuItem} from "@material-ui/core";
import FormInput from "./FormInput";

const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(2)
  },
  location: {
    width: "100%",
    position: "relative"
  },
  suggestions: {
    position: "absolute",
    backgroundColor: theme.palette.grey[100],
    boxShadow: theme.shadows[2],
    color: theme.palette.primary.main,
    left: 0,
    zIndex: 10,
    width: "100%"
  }
}))

const PredictionForm = ({locations, onChange, values, handleSubmit}) => {
  const classes = useStyles()
  const [suggestions, setSuggestion] = useState([])
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    let matchingLocations = locations.filter(location => location.toLowerCase().includes(values.location.toLowerCase()));
    setSuggestion(matchingLocations.slice(0, 15))
  }, [values.location])

  const handleAdd = (suggestion) => {
    return () => {
      onChange("location", suggestion)
      setEditing(false)
    }
  }

  const errorArea = +values.area > +values.size * 600 || +values.area < +values.size * 300;
  const errorBath = +values.bath > +values.size || +values.bath < 0;
  return <form onSubmit={handleSubmit}>
    <div className={classes.row}>
      <div className={classes.location}>
        <FormInput
          onChange={onChange}
          onClick={() => setEditing(true)}
          value={values.location}
          fieldKey="location"
          label="Location"
          fullWidth/>
        <Container maxWidth="md">
          <div className={classes.suggestions}>
            {values.location && editing && suggestions.map((suggestion, index) => {
              return <MenuItem key={index} value={suggestion} onClick={handleAdd(suggestion)}>
                {suggestion}
              </MenuItem>
            })}
          </div>
        </Container>
      </div>
    </div>
    <div className={classes.row}>
      <FormInput
        InputLabelProps={{shrink: true}}
        type="number"
        onChange={onChange}
        value={values.size}
        fieldKey="size"
        label="Size (in BHK)"
      />
      <FormInput
        InputLabelProps={{shrink: true}}
        type="number"
        onChange={onChange}
        value={values.area}
        fieldKey="area"
        label="Area (in sqft.)"
        error={errorArea}
        helperText={errorArea ? `Area Range [${values.size * 300} - ${values.size * 600}]` : " "}
      />
      <FormInput
        InputLabelProps={{shrink: true}}
        type="number"
        onChange={onChange}
        value={values.bath}
        fieldKey="bath"
        label="Bath"
        error={errorBath}
        helperText={errorBath ? `Bath Range [${0} - ${values.size}]` : " "}
      />
    </div>
    <div className={classes.row}>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        fullWidth
      >
        Predict Price
      </Button>
    </div>
  </form>;
};


export default PredictionForm
