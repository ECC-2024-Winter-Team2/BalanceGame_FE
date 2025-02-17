import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryButton from "./CategoryButton";
import { CATEGORY_PATH, CATEGORY_DATA } from "./category.const";
import { fetchApi } from "../../utils";
import { API_URL } from "../../consts";

export function Category() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState(CATEGORY_DATA);

  const getCategories = async () => {
    const { categories } = await fetchApi(API_URL.categories, {
      method: "GET",
    });
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
    // TODO: 확인 후 제거
    console.log(categories);
  }, []);

  return (
    <div>
      {categories.map(({ categoryName, categoryId }) => (
        <CategoryButton
          key={categoryName}
          title={categoryName}
          onClick={() => {
            navigate(`/game/${CATEGORY_PATH[categoryId - 1]}/1`);
          }}
        />
      ))}
    </div>
  );
}
