import React from "react";

const QuestionBubble = ({ text }) => {
  const bubbleStyle = {
    width: "800px",
    maxHeight: "300px",
    overflowY: "auto",
    padding: "15px",
    borderRadius: "20px",
    backgroundColor: " #c2d6f6",
    border: "1px solid #50b8e7",
    wordWrap: "break-word",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return <div style={bubbleStyle}>{text}</div>;
};

export default QuestionBubble;
