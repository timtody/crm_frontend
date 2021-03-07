import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR)
// Link to doc: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
