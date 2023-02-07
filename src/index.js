import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories.context";
import "./index.css";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
