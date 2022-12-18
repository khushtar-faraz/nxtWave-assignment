import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResourceListProvider } from "./contexts/resourceList-context";
import { FiltersProvider } from "./contexts/filters-context";
import { BrowserRouter } from "react-router-dom";
import { PaginationContextProvider } from "./contexts/pagination-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ResourceListProvider>
        <FiltersProvider>
          <PaginationContextProvider>
            <App />
          </PaginationContextProvider>
        </FiltersProvider>
      </ResourceListProvider>
    </React.StrictMode>
  </BrowserRouter>
);
