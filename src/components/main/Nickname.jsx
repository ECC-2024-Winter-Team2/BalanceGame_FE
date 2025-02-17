import { useState } from "react";

export function Nickname() {
  const [nickname, setNickname] = useState("");

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Nickname;
