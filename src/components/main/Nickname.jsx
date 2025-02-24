import { useState } from "react";
import styled from "styled-components";

export function Nickname({ nickname, setNickname }) { // 🟢 props로 상태 받기
  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="닉네임을 입력하세요"
        value={nickname}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Nickname;

