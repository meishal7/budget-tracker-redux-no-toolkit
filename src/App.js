import { Fragment } from "react";
import Wrapper from "./components/Wrapper";
import { GlobalStyle } from "./style/globalStyles";
import "./style/normalize.css";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper />
    </Fragment>
  );
}

export default App;
