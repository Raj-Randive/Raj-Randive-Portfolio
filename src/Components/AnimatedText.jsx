import React from "react";

function AnimatedText({ text, className }) {
  return (
    <>
      <div className=" py-2 flex items-center justify-center text-center">
        <h2 className={`inline-block text-white text-2xl ${className} `}></h2>
        {text.split(" ").map((word, index) => (
          <span key={index} className="inline-block">
            {word}&nbsp;
          </span>
        ))}
      </div>
    </>
  );
}

export default AnimatedText;
