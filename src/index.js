import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories.context";
import Loading from "./components/loading/loading.component";
import "./index.css";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
