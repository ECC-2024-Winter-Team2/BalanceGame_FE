import * as S from "./Game.style";

export function Game({ questionText, orderIndex, choices }) {
  return (
    <S.GameContainer>
      {/* TODO: 아이콘 추가 */}
      <S.QuestionText>{questionText}</S.QuestionText>
      <S.ChoiceLeft>{questionText}</S.ChoiceLeft>
      <S.ChoiceRight>{questionText}</S.ChoiceRight>
    </S.GameContainer>
  );
}
