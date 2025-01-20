import { createContext, useState } from "react";
import run from "../api/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData("");
  };

  const formatResponse = (response) => {
    let formatted = response
      .split("**")
      .map((segment, index) =>
        index % 2 === 1 ? `<b>${segment}</b>` : segment
      )
      .join("")
      .split("*")
      .join("</br>");
    return formatted.split(" ");
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;

    try {
      if (prompt !== undefined) {
        response = await run(prompt);
        setRecentPrompt(prompt);
      } else {
        setPrevPrompt((prev) => [...prev, input]);
        setRecentPrompt(input);
        response = await run(input);
      }

      const responseArray = formatResponse(response);

      responseArray.forEach((word, index) => {
        delayPara(index, word + " ");
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
