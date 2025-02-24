import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GAME_DATA } from "./game.const";
import backbutton from "./backbutton.png";
import homebutton from "./homebutton.png";
import * as S from "./Game.style";
import { fetchApi } from "../../utils";
import { API_URL } from "../../consts";
/*컨트롤+시프트+L 다중선택가능함*/

export function Game() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const { category, id } = useParams();
  const postId = Number(id);
  
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [choiceIdCounter, setChoiceIdCounter] = useState(1); // ✅ 선택할 때마다 증가하는 choiceId
  const [userSelections, setUserSelections] = useState([]); // ✅ 사용자의 선택 저장const categoryData = GAME_DATA[category];
  
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        setError(null);
        // 내부 데이터에서 현재 문제 찾기
        const currentQuiz = GAME_DATA[category]?.find((item) => item.orderIndex === postId);
        if (!currentQuiz) throw new Error("문제를 찾을 수 없습니다.");
        console.log("✅ 현재 문제 데이터:", currentQuiz);
        setQuiz(currentQuiz);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestion();
  }, [category, postId]);


  // ✅ 로딩 및 에러 처리
  if (loading) return <p>⏳ 문제를 불러오는 중...</p>;
  if (error) return <p>❌ {error}</p>;
  if (!quiz) {
    navigate("/percentage");
    return null;
  }

  const cleanSelections = (selections) => {
    console.log("📢 [cleanSelections] 원본 데이터:", selections); // ✅ 원본 데이터 확인
    // ✅ 같은 `questionId`가 있을 경우, 가장 마지막 선택만 유지
    const latestSelectionsMap = new Map();
    selections.forEach((selection) => {
      latestSelectionsMap.set(selection.questionId, selection); // 동일한 questionId가 있으면 덮어씀
    });
    // ✅ 최신 선택 데이터만 배열로 변환
    let latestSelections = Array.from(latestSelectionsMap.values());
    // ✅ 최신 데이터에서 10개까지만 유지 (초과하면 오래된 값 삭제)
    if (latestSelections.length > 10) {
      latestSelections = latestSelections.slice(-10); // 최신 10개 유지
    }
    return latestSelections;
  };

  // ✅ 선택 후 데이터를 저장하고, 마지막 문제에서 한 번에 전송
  const handleChoiceClick = (choiceIndex) => {
    const selectedNumber = choiceIndex + 1; // 선택된 값 (1 또는 2)
    const currentChoiceId = choiceIdCounter; // 현재 choiceId

    setChoiceIdCounter((prev) => prev + 1);

    setUserSelections((prevSelections) => {
      const newSelections = [
        ...prevSelections,
        {
          questionId: quiz.orderIndex,
          choiceId: currentChoiceId,
          selectedNumber: selectedNumber,
        },
      ];
      const cleanedSelections = cleanSelections(newSelections);
      return cleanedSelections;
    });

    const totalQuestions = GAME_DATA[category].length;
    const isLastQuestion = quiz.orderIndex === totalQuestions;

    if (isLastQuestion) {
      sendSelectionsToBackend();
    } else {
      navigate(`/game/${category}/${postId + 1}`);
    }
  };
  
    // ✅ 백엔드로 한 번에 데이터 전송
    const sendSelectionsToBackend = async () => {
      console.log("📢 백엔드 전송 전 userSelections 값:", userSelections); // ✅ 전송 직전 데이터 확인

      const userId = localStorage.getItem("userId");
  
      if (userSelections.length === 0) {
        console.error("🚨 선택한 값이 없습니다.");
        alert("최소한 하나 이상의 선택을 해야 합니다.");
        return;
      }
  
      const categoryMap = {
        love: 1,
        food: 2,
        sick: 3,
        life: 4
      };

      const filteredSelections = cleanSelections(userSelections);

      const requestData = {
        userId: Number(userId),
        categoryId: categoryMap[category] || 0, // ✅ 만약 정의되지 않은 category면 기본값 0
        selections: filteredSelections,
      };
    
      console.log("📢 최종 선택 데이터 POST:", requestData);
  
      try {
        const response = await fetchApi(API_URL.choices, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
        console.log("📢 서버 응답 상태 코드:", response.status);
        console.log("📢 fetchApi 반환 값:", response);
  
        setUserSelections([]); // ✅ 선택 데이터 초기화
        navigate("/percentage"); // ✅ 결과 페이지 이동 (오타 수정)
      } catch (error) {
        console.error("🚨 데이터 전송 오류:", error);
        alert(`서버와 통신 중 오류가 발생했습니다. 오류 메시지: ${error.message}`);
      }
    };

  return (
    <S.GameContainer>
      <S.BackButton>
        <img onClick={handleBack} src={backbutton} alt="뒤로가기" />
      </S.BackButton>
      <S.HomeButton>
        <img onClick={() => navigate("/")} src={homebutton} alt="홈으로" />
      </S.HomeButton>
      <S.QuestionText>{quiz.questionText}</S.QuestionText>
     <S.ChoiceLeft onClick={() => handleChoiceClick(0)}>
        {quiz.choices[0]}
      </S.ChoiceLeft>
      <S.ChoiceRight onClick={() => handleChoiceClick(1)}>
        {quiz.choices[1]}
      </S.ChoiceRight>
    </S.GameContainer>
  );
}
export default Game;
