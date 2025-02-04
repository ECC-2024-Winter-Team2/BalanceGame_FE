import React, { useState } from "react";

function Detail() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleCommentSubmit = () => {
    if(comment.length < 1) return;
  };
  
  return (
  <div className="comment-container">
      <input
        type="text"
        placeholder="댓글 달기"
        value={comment}
        onChange={handleCommentChange}
        />
        <button onClick={handleCommentSubmit}></button>
    </div>
  );
}

function Vote ({ vote_1, vote_2 }) {
  const VotePercentage = (vote_1 + vote_2) => {
    const totalVotes = vote_1 + vote_2;
    const vote_1Percentage = (vote_1 / totalVotes) * 100;
    const vote_2Percentage = (vote_2 / totalVotes) * 100;
  };

  return (
    <div className="detail-container">
      <div className="selected-category">
        <h1>고백방법</h1>
      </div>
      <div className="result">
        <div>
          <span>{/*항목명*/}</span>
          <span>{vote_1Percentage}%</span>
          <span>{vote_1}표</span>
        </div>
        <div>
          <span>{/*항목명*/}</span>
          <span>{vote_2Percentage}%</span>
          <span>{vote_2}표</span>
      </div>
      <div className="categories">
        <ul>
          <li>{/*항목명*/}</li>
          <li>{/*항목명*/}</li>
          <li>{/*항목명*/}</li>
          <li>{/*항목명*/}</li>
          <li>{/*항목명*/}</li>
          <li>{/*항목명*/}</li>
        </ul>
      </div>
    </div>
  );
}