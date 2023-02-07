import React, { Suspense, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import Loading from "../../components/loading/loading.component";
import "./categories-preview.styles.scss";

const CategoryPreview = React.lazy(() =>
  import("../../components/category-preview/category-preview.component")
);
const PrimaryTitle = React.lazy(() =>
  import("../../components/primary-title/primary-title.component")
);

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="categories-preview-container">
      <Suspense fallback={<Loading />}>
        <PrimaryTitle />
      </Suspense>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Suspense fallback={<Loading />} key={title}>
            <CategoryPreview title={title} />
          </Suspense>
        );
      })}
    </div>
  );
};
export default CategoriesPreview;
