import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { FaUserCircle } from "react-icons/fa";

// Component to render formatted content safely
const FormattedResult = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="text-lg font-normal leading-relaxed whitespace-pre-line text-gray-800"
    ></div>
  );
};

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <div className="main flex-1 relative min-h-screen pb-[15vh] p-5 text-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-lg font-normal">Gemini</p>
        <img src={assets.user_icon} alt="User" className="w-10 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="mainContainer max-w-4xl mx-auto ">
        {!showResult ? (
          <>
            {/* Greeting */}
            <div className="my-12 text-2xl text-gray-400 font-medium p-5 text-center md:text-4xl lg:text-left flex justify-center items-center lg:justify-start">
              <div>
                <p>
                  <span className="text-red-300 font-semibold">
                    Hello, Raja.
                  </span>
                </p>
                <p className="mt-2 font-semibold text-xl md:text-4xl">
                  How can I help you today?
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="cards grid-cols-4 gap-4 p-4 hidden lg:grid">
              {["compass_icon", "bulb_icon", "message_icon", "code_icon"].map(
                (icon, index) => (
                  <div
                    key={index}
                    className="card h-48 bg-gray-100 p-4 rounded-xl relative cursor-pointer hover:bg-gray-200"
                  >
                    <p className="text-gray-600">
                      Suggest beautiful places to see on an upcoming road trip
                    </p>
                    <img
                      src={assets[icon]}
                      className="w-10 p-1 absolute bg-white rounded-full bottom-2 right-2"
                      alt="Card Icon"
                    />
                  </div>
                )
              )}
            </div>
          </>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-auto scrollbar-hidden">
            {/* Prompt Display */}
            <div className="my-10 flex items-center gap-5">
              <FaUserCircle className="text-3xl" />
              <p>{recentPrompt}</p>
            </div>

            {/* Result Display */}
            <div className="flex items-start gap-5">
              <img
                src={assets.logo_icon}
                alt="Logo"
                className="w-10 rounded-full"
              />
              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <hr
                      key={i}
                      className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-blue-300 via-white to-blue-300 p-4 animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                <FormattedResult content={resultData} />
              )}
            </div>
          </div>
        )}

        {/* Input Section */}
        <div className="mainbottom absolute bottom-0 w-full px-5 py-4 md:py-0 max-w-4xl">
          <div className="flex  items-center justify-between gap-5 bg-gray-100 p-3 rounded-2xl bg-red-100">
            {/* Input field */}
            <input
              type="text"
              placeholder="Ask Gemini..."
              className="border-none outline-none text-md bg-transparent md:p-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {/* Icons - aligned in one line on small screens */}
            <div className="flex items-center gap-2.5 cursor-pointer mt-3 sm:mt-0">
              <img
                src={assets.gallery_icon}
                alt="Gallery"
                className="w-6 h-6 hidden sm:block" // Hidden on small screens, visible on sm and up
              />
              <img
                src={assets.mic_icon}
                alt="Mic"
                className="w-6 h-6 hidden sm:block" // Hidden on small screens, visible on sm and up
              />
              <img
                src={assets.send_icon}
                alt="Send"
                className="w-6 h-6"
                onClick={() => onSent()}
              />
            </div>
          </div>

          {/* Optional text section visible on larger screens */}
          <p className="text-md my-4 text-center font-medium hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            possimus, minus autem sequi exceptu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
