import React from "react";
import { CgMenuRound } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="flex bg-HomeBackground w-full h-[60px] justify-between sm:justify-between p-11 items-center">
      <div className="flex justify-center items-center">
        <CgMenuRound color="#c7ffca" size={50.01} />
        <p className="font-sans text-[2rem] text-AppGreen pl-3">neoplants</p>
      </div>
      <div className="w-[11rem] h-[3rem] bg-AppGreen rounded-3xl flex items-center justify-center hover:bg:">
        <p>join the waitlist</p>
      </div>
    </div>
  );
};

export default NavBar;
