import * as React from "react";
import { render } from "react-dom";
import App from "@/entrypoints/app";
document.addEventListener("DOMContentLoaded", () => {
  render(
    React.createElement(App),
    document.body.appendChild(document.createElement("div"))
  );
});
