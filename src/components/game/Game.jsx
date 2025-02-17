import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GAME_DATA } from "./game.const";
import backbutton from "./backbutton.png";
import homebutton from "./homebutton.png";
import * as S from "./Game.style";
/*컨트롤+시프트+L 다중선택가능함*/

export function Game() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { category, id } = useParams();
  const postId = Number(id);

  const quiz = GAME_DATA[category].find((item) => {
    return item.orderIndex === postId;
  });

  useEffect(() => {
    if (!quiz) {
      navigate("/percentage");
    }
  }, [quiz, navigate, category]);

  if (!quiz) return null;

  return (
    <S.GameContainer>
      <S.BackButton>
        <img onClick={handleBack} src={backbutton} alt="뒤로가기" />
      </S.BackButton>
      <S.HomeButton>
        <img onClick={() => navigate("/")} src={homebutton} alt="홈으로" />
      </S.HomeButton>
      <S.QuestionText>{quiz.questionText}</S.QuestionText>
      <S.ChoiceLeft onClick={() => navigate(`/game/${category}/${postId + 1}`)}>
        {quiz.choices[0]}
      </S.ChoiceLeft>
      <S.ChoiceRight
        onClick={() => navigate(`/game/${category}/${postId + 1}`)}
      >
        {quiz.choices[1]}
      </S.ChoiceRight>
    </S.GameContainer>
  );
}
export default Game;
