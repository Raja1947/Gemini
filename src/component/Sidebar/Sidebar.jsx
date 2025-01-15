import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#f0f4f9] p-[25px] px-[15px]">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="w-5 block ml-[10px] cursor-pointer"
          alt=""
          onClick={() => setExtend(!extend)}
        />
        <div className="newchat  mt-[50px] inline-flex items-center gap-3 py-[8px] px-[15px] bg-[#e6eaf1] rounded-full text-gray-400 cursor-pointer">
          <img src={assets.plus_icon} alt="" className="w-3.5" />
          {extend ? <p className="text-sm text-gray-500">New Chat</p> : null}
        </div>
        {extend ? (
          <div className="recent flex flex-col">
            <p className="recentTitle mt-7 mb-3 ml-[10px]">Recent</p>
            <div className="recentEntry flex items-center gap-3 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img src={assets.message_icon} alt="" className="w-5" />
              <p>What is react..</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className="bottomentry flex recentEntry items-center gap-3 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.question_icon} alt="" className="w-5" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottomentry flex recentEntry items-center gap-3 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.history_icon} alt="" className="w-5" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottomentry flex recentEntry items-center gap-3 p-2 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.setting_icon} alt="" className="w-5" />
          {extend ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
