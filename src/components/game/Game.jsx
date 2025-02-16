import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Game.style";
import { GAME_DATA } from "./game.const";
import backbutton from "./backbutton.png"
import homebutton from "./homebutton.png"
/*컨트롤+시프트+L 다중선택가능함*/

export function Game({ questionText, orderIndex, choices }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const{category,id}=useParams();
  const postId = Number(id);

  const quiz = GAME_DATA[category].find(item => {
    return item.orderIndex == postId;
  });

  useEffect(() => {
    if (!quiz) { 
      navigate('/percentage');
    }}, [quiz, navigate, category]);

    if (!quiz) {
      return null;
    }

  return (
    <S.GameContainer>
      {/* TODO: 아이콘 추가 */}

      <S.BackButton>
        <img onClick={handleBack} src={backbutton} />
      </S.BackButton>

      <S.HomeButton>
        <img onClick={() => navigate('/')} src={homebutton} />
      </S.HomeButton>

     <S.QuestionText>{quiz.questionText}</S.QuestionText>
     <S.ChoiceLeft onClick={() => navigate(`/game/${category}/${postId + 1}`)}>
        {quiz.choices[0]}
      </S.ChoiceLeft>
      <S.ChoiceRight onClick={() => navigate(`/game/${category}/${postId + 1}`)}>
        {quiz.choices[1]}
      </S.ChoiceRight>
      
    </S.GameContainer>
  );
}
export default Game;