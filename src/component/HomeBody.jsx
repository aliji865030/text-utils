import React from "react";
import { useState } from "react";
import { useRef } from "react";

const HomeBody = () => {
  const [textarea1, settextarea1] = useState();
  const [textarea2, settextarea2] = useState();
  const textref = useRef(null);
  const [numberOfChar, setNumberOfChar] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [numberOfWords, setNumberOfWords] = useState(0);

  function convertInUpperCase() {
    let ans = textarea1.toUpperCase();
    settextarea1(ans);
    settextarea2(ans);
  }
  function convetInLowerCase() {
    let ans = textarea1.toLowerCase();
    settextarea1(ans);
    settextarea2(ans);
  }
  function clearText() {
    settextarea1("");
    settextarea2("");
    setNumberOfChar(0);
    setNumberOfWords(0);
    setReadingTime(0);
  }
  const copyToClipboard = () => {
    if (textref.current) {
      textref.current.select();
      document.execCommand("copy");
    }
  };

  function removeExtraSpace() {
    let result = "";
    let encounteredNonEmptyWord = false;

    for (const char of textarea1) {
      if (char !== " ") {
        // If the character is not a space, add it to the result
        result += char;
        encounteredNonEmptyWord = true; // Set flag to true
      } else if (encounteredNonEmptyWord) {
        // If it's a space and we've encountered a non-empty word before, add a space to the result
        result += " ";
        encounteredNonEmptyWord = false; // Reset flag
      }
    }

    settextarea1(result);
    settextarea2(result);
  }

  function updateReadingTime() {
   if(textarea1){
    let ans = 0;
    for (let char of textarea1) {
      if (char !== " ") {
        ans += 0.008;
      }
    }

    let result = Math.round(ans * 1000) / 1000;
    setReadingTime(result);
   }
  }

  function updateWordsNumber() {
    if (textarea1) {
      const words = textarea1.split(" ").filter((word) => word.trim() !== "");

      setNumberOfWords(words.length);
    }
  }

  return (
    <div
      className="px-20"
      style={{
        backgroundImage: "linear-gradient(45deg, white 50%,skyblue 50%)",
      }}
    >
      <div>
        <h1 className="text-4xl font-semibold pt-20">
          TextUtis - Word Counter, Charecter Counter, Remove Extra Space
        </h1>
      </div>
      <div>
        <p className="text-2xl font-semibold text-start py-5">
          Enter Your Text Here:
        </p>
        <textarea
          name=""
          id=""
          ref={textref}
          className=" h-60 w-full p-5 border-4 border-gray-400"
          value={textarea1}
          onChange={(e) => {
            settextarea2(e.target.value);
            settextarea1(e.target.value);
            setNumberOfChar(e.target.value.length);
            updateReadingTime();
            updateWordsNumber();
          }}
        ></textarea>
      </div>
      <div className="flex justify-start gap-5 py-5 text-white text-lg">
        <button
          className=" bg-sky-500 hover:bg-sky-600 px-5 py-1 rounded-md"
          onClick={convertInUpperCase}
        >
          Convert UpperCase
        </button>
        <button
          className=" bg-sky-500 hover:bg-sky-600 px-5 py-1 rounded-md"
          onClick={convetInLowerCase}
        >
          Convert LowerCase
        </button>
        <button
          className=" bg-red-500 hover:bg-red-600 px-5 py-1 rounded-md"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          className=" bg-green-500 hover:bg-green-600 px-5 py-1 rounded-md"
          onClick={copyToClipboard}
        >
          Copy To Clipboard
        </button>
        <button
          className=" bg-sky-500 hover:bg-sky-600 px-5 py-1 rounded-md"
          onClick={removeExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className=" text-start flex flex-col gap-2 py-10">
        <span className="text-3xl font-semibold">Summery Of Your Text</span>
        <span>Number Of Words : {numberOfWords}</span>
        <span>Number Of Charecters : {numberOfChar}</span>
        <span>Reading Time : {readingTime}</span>
      </div>
      <div className=" pb-10">
        <h1 className="text-2xl font-semibold py-3">Preview Document</h1>
        <textarea
          name=""
          id=""
          className=" h-28 w-full p-5 border-4 border-gray-400"
          value={textarea2}
        ></textarea>
      </div>
    </div>
  );
};

export default HomeBody;
