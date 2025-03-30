import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBox = ({ code }) => {
  const boxStyle = {
    width: "800px",
    maxheight: "500px",
    overflowY: "scroll",
    border: "1px solid #50b8e7",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: " #c2d6f6",
  };

  return (
    <div style={boxStyle}>
      <SyntaxHighlighter language="python" style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;
