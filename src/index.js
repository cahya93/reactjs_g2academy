import "bootstrap/dist/css/bootstrap.min.css";
// import Spinner from "react-spinner-material";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* <Spinner
        size={120}
        spinnerColor={"#333"}
        spinnerWidth={2}
        visible={true}
      /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
