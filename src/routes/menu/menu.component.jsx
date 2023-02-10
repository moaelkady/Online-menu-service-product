import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../../components/loading/loading.component";
import "./menu.styles.scss";

const CategoriesPreview = React.lazy(() =>
  import("../categories-preview/categories-preview.component")
);
const Category = React.lazy(() => import("../category/category.component"));

const Menu = () => {
  return (
    <div className="menu-view-container">
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <CategoriesPreview />
            </Suspense>
          }
        />
        <Route
          path=":category"
          element={
            <Suspense fallback={<Loading />}>
              <Category />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default Menu;
