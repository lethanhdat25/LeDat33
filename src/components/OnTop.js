import React from "react";

const OnTop = () => {
  return (
    <button style={{border:'none',backgroundColor:'green'}} className="go-top active" onClick={()=>window.scrollTo(0,0)}>
      <i className="bx bx-chevrons-up"></i>
    </button>
  );
};

export default OnTop;
