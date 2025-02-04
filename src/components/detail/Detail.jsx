import React, { useState } from "react";

function Detail() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };


  return (
    <div id="detail-container">
      <div id="selected-category">
        <h1>고백방법</h1>
      </div>
      <div id="result">
        <div>
        </div>
      </div>
      <div id="categories">
        <ul>
          <li>고백방법</li>
          <li>연상/연하</li>
          <li>첫 데이트</li>
          <li>기념일</li>
          <li>만남 횟수</li>
          <li>B</li>
        </ul>
      </div>
    </div>
    <div id="comment-container">
      <input
        type="text"
        placeholder="댓글 달기"
        value={comment}
        onChange={handleCommentChange}
        />
    </div>
  )
};
