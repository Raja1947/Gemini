import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main flex-1 position-relative min-h-screen pb-[15vh] p-5 text-[#585858]">
      <div className="flex justify-between items-center ">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className="w-10 rounded-full" />
      </div>
      <div className="mainContainer max-w-4xl m-auto bg-red-50">
        <div className="gret my-12 mx-0 text-5xl text-[#c4c7c5] font-medium p-5">
            <p><span>Hello, Raja</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon}/>
          </div>
          <div className="card">
            <p>SUggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.bulb_icon}/>
          </div>
          <div className="card">
            <p>SUggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.message_icon}/>
          </div>
          <div className="card">  
            <p>SUggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.code_icon}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
