import {Container} from "@material-ui/core";
import Header from "./components/Header";
import Prediction from "./components/Prediction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container maxWidth="md">
      <Header/>
      <Prediction/>
      <Footer/>
    </Container>
  );
};

export default App;
