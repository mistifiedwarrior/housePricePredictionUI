import React, {useState} from "react";
import Navbar from "./Navbar";
import Help from "./Help";
import Prediction from "./Prediction";
import {Divider} from "@material-ui/core";


const MainContent = () => {
  const [value, setValue] = useState(0);
  return <React.Fragment>
    <Navbar value={value} setValue={setValue}/>
    <Divider/>
    {value === 0 && <Prediction/>}
    {value === 1 && <Help/>}
  </React.Fragment>

}

export default MainContent
