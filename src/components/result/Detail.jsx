import { useState } from "react";

export function Detail() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.length < 1) return;
    // TODO: 코멘트 추가 기능 구현
  };

  return (
    <div>
      <input
        type="text"
        placeholder="댓글 달기"
        value={comment}
        onChange={handleCommentChange}
      />
      {/* TODO: 아이콘 추가 */}
      <button onClick={handleCommentSubmit} />
    </div>
  );
}
