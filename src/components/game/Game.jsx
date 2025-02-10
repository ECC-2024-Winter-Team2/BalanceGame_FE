import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Game.style";
import { GAME_DATA } from "./game.const";
import { useSearchParams } from "react-router-dom";


export function Game({ questionText, orderIndex, choices }) {
  const navigate = useNavigate();
  const{id}=useParams();
  const postId = Number(id);

  const quiz = GAME_DATA.love.find(item => {
    return item.orderIndex == postId;
});


  return (
    <S.GameContainer>
      {/* TODO: 아이콘 추가 */}

      <S.QuestionText>{quiz.questionText}</S.QuestionText>
          
      <S.ChoiceLeft>{quiz.choices[0]}</S.ChoiceLeft>

      <S.ChoiceRight>{quiz.choices[1]}</S.ChoiceRight>
      
    </S.GameContainer>
  );
}
export default Game;