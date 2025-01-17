import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { FaUserCircle } from "react-icons/fa";

const Main = () => {
  const {
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
  } = useContext(Context);
  return (
    <div className="main flex-1 position-relative min-h-screen pb-[15vh] p-5 text-[#585858]">
      <div className="flex justify-between items-center ">
        <p className="text-lg font-normal">Gemini</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
      </div>
      <div className="mainContainer max-w-4xl m-auto">
        {!showResult ? (
          <>
            <div className="gret my-12 mx-0 text-5xl text-[#c4c7c5] font-medium p-5">
              <p>
                <span className="text-red-300 font-semibold">Hello, Raja.</span>
              </p>
              <p className="mt-2 font-semibold">How can I help you today?</p>
            </div>
            <div className="cards grid grid-cols-4 gap-4 p-4">
          <div className="card h-48 bg-[#f0f4f9] p-4 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#6c6a6a]">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              src={assets.compass_icon}
              className="w-10 p-1 absolute bg-white rounded-full bottom-2 right-2"
            />
          </div>
          <div className="card h-48 bg-[#f0f4f9] p-4 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#6c6a6a] ">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              src={assets.bulb_icon}
              className="w-10 p-1 absolute bg-white rounded-full bottom-2 right-2"
            />
          </div>
          <div className="card h-48 bg-[#f0f4f9] p-4 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#6c6a6a] ">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              src={assets.message_icon}
              className="w-10 p-1 absolute bg-white rounded-full bottom-2 right-2"
            />
          </div>
          <div className="card h-48 bg-[#f0f4f9] p-4 rounded-xl relative cursor-pointer hover:bg-[#dfe4ea]">
            <p className="text-[#6c6a6a] ">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              src={assets.code_icon}
              className="w-10 p-1 absolute bg-white rounded-full bottom-2 right-2"
            />
          </div>
        </div>
          </>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="my-10 mx-0 flex items-center gap-5">
            <FaUserCircle className="text-3xl"/>
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-center gap-5">
              <img/>
              <p>{resultData}</p>
            </div>
          </div>
        )}

       
        <div className="mainbottom absolute bottom-0 w-full max-w-4xl py-0 px-5">
          <div className=" flex items-center justify-between gap-5 bg-[#F0F4F9] p-3 rounded-2xl">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="border-none outline-none text-md bg-transparent p-1 flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex justify-between items-center gap-2.5 cursor-pointer">
              <img src={assets.gallery_icon} alt="" className="w-6 h-6" />
              <img src={assets.mic_icon} alt="" className="w-6 h-6" />
              <img
                src={assets.send_icon}
                alt=""
                className="w-6 h-6"
                onClick={() => onSent(input)}
              />
            </div>
          </div>
          <p className="bottominfo text-md my-4 mx-0 text-center font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            possimus, minus autem sequi exceptu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
