import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Game.style";

export function Game({ questionText, orderIndex, choices }) {
  const navigate = useNavigate();
  const{qT} = useParams();

  const post = Game.const.find((question) => {
    return question.qusetionText == qT
  });

  return (
    <S.GameContainer>
      {/* TODO: 아이콘 추가 */}
      <S.QuestionText>{questionText}
    
      </S.QuestionText>


      <S.ChoiceLeft>{questionText}</S.ChoiceLeft>
      <S.ChoiceRight>{questionText}</S.ChoiceRight>
    </S.GameContainer>
  );
}
