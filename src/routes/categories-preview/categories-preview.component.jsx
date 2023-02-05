import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import PrimaryTitle from "../../components/primary-title/primary-title.component";

import "./categories-preview.styles.scss";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="categories-preview-container">
      <PrimaryTitle title="Welcome" />
      {Object.keys(categoriesMap).map((title) => {
        return <CategoryPreview key={title} title={title} />;
      })}
    </div>
  );
};
export default CategoriesPreview;
