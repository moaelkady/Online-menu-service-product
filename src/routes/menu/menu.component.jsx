import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

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
            <Suspense fallback={<div>Loading...</div>}>
              <CategoriesPreview />
            </Suspense>
          }
        />
        <Route
          path=":category"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Category />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default Menu;
