import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResourceListProvider } from "./contexts/resourceList-context";
import { FiltersProvider } from "./contexts/filters-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <ResourceListProvider>
      <FiltersProvider>
        <App />
      </FiltersProvider>
    </ResourceListProvider>
  </React.StrictMode>
);
