import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category-preview.styles.scss";
const CategoryPreview = ({ title }) => {
  const { categoriesAvatar } = useContext(CategoriesContext);
  const avatar = categoriesAvatar[title];
  return (
    <div className="category-preview-container">
      <div className="category-preview">
        <div className="top-container">
          <div
            className="top"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="title">{title}</span>
          </div>
          <div className="right">
            <Link to={title} className="title">
              See Full List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
