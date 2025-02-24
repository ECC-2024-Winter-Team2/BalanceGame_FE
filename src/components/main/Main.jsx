import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nickname from "./Nickname";
import Button from "./Button";
import * as S from "./Main.style";
import shubung from "./shubung.png"
import { fetchApi } from "../../utils";
import { API_URL } from "../../consts";

export function Main() {
  const navigate = useNavigate();
  const handleNavigate = (path) => () => {
    navigate(path);
  };

  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState(null); // 🟢 userId 상태 추가
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ 추가됨 (중복 요청 방지)

  //console.log("📢 전체 API_URL 객체:", API_URL);
  
  const postNickname = async () => {
    try {
      console.log("📢 요청할 API URL:", API_URL.nickname); // ✅ API 엔드포인트 수정
  
      const response = await fetch(API_URL.nickname, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: nickname }), // ✅ 백엔드가 요구하는 형식
      });
  
      const data = await response.json();
      console.log("✅ 닉네임 저장 응답:", data);
  
      // 🛑 닉네임이 중복된 경우 alert 표시 후 중단
      if (data.error === "이미 존재하는 닉네임입니다.") {
        alert("⚠️ 이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요.");
        return null;
      }
  
      if (!data.userId) {
        throw new Error("🚨 서버 응답에 userId가 없습니다.");
      }
  
      setUserId(data.userId); // ✅ userId 상태 업데이트
      return data.userId;
    } catch (error) {
      console.error("🚨 닉네임 저장 중 오류 발생:", error);
      alert("닉네임 저장 중 오류가 발생했습니다.");
      return null;
    }
  };
  
  const handleStart = async () => {
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요!");
      return;
    }
  
    if (isSubmitting) return; //
    setIsSubmitting(true); // 🔵 닉네임 저장 중 상태 변경

  const savedUserId = await postNickname();
  setIsSubmitting(false); // 🟢 요청 완료 후 다시 활성화

  if (savedUserId) {
    navigate("/category"); // ✅ 닉네임 저장 후 페이지 이동
  }
};

  return (
    <S.MainContainer>
      <div className="app-container">
        <S.Title>나는 근본{"\n"}인간일까?</S.Title>
        <S.NicknameContainer>
          <S.NicknameLabel>닉네임</S.NicknameLabel>
          <Nickname nickname={nickname} setNickname={setNickname} /> {/* ✅ 상태 전달 */}
        </S.NicknameContainer>
        {/* TODO: 닉네임 없으면 alert 추가 */}
        <S.ButtonStart>
           <Button title="시작하기" onClick={handleStart}/>
        </S.ButtonStart>
        {userId && <p>✅ 저장된 유저 ID: {userId}</p>}
        <S.ButtonResult>
          <Button title="결과보기" onClick={handleNavigate("/result")} />
        </S.ButtonResult>
        <S.ShuBung>
        <img src={shubung} alt="슈크림 붕어빵" />
        </S.ShuBung>
      </div>
    </S.MainContainer>
  );
}

export default Main;