import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { GlobalStyle } from "./style/globalStyle";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
