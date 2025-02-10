import React, { useState } from "react";

export function  Nickname(props){

  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return(
    <div className="input-container">
      <input
      type="text"
      placeholder="닉네임"
      value={name}
      onChange={handleInputChange}
    />
  </div>
  )
}

export default Nickname
