import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Result.style";
import { CATEGORY_DATA } from "./category.const";
import * as GS from "../game/Game.style";
import homebutton from "./homebutton.png"
import backbutton from "./backbutton.png"

export function Result() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };


  const [categories, setCategories] = useState(CATEGORY_DATA);

  const CategoryButton = ({ title, onClick }) => {
    return <S.ResultCategories onClick={onClick}>{title}</S.ResultCategories>;
  };

  return (
    <div>
      <S.ResultContainer>
      {categories.map(({ categoryName, categoryId }) => (
        <CategoryButton
          key={categoryName}
          title={categoryName}
          onClick={() => {
            navigate(`/`);
          }}
        />
      ))}
      <GS.BackButton>
        <img onClick={handleBack} src={backbutton} alt="뒤로가기" />
      </GS.BackButton>
      <GS.HomeButton>
        <img onClick={() => navigate("/")} src={homebutton} alt="홈으로" />
      </GS.HomeButton>

      </S.ResultContainer>
    </div>
  );
}
