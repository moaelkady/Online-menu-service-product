import { createContext, useState, useEffect } from "react";

import {
  getCategoriesAndDocuments,
  getCategoriesAvatar,
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [categoriesAvatar, setCategoriesAvatar] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      const categoryAvatar = await getCategoriesAvatar();
      setCategoriesMap(categoryMap);
      setCategoriesAvatar(categoryAvatar);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap, categoriesAvatar };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
