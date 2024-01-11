import * as React from "react";
import { Link } from "react-router-dom";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import GameList from "../component/Game_mode/GameList";
import GameCard from "../component/Game_mode/GameCard";

function Game_mode () {
  return (
    <div className=" flex ">
      <div className="w-1/5">
        <SideNavbar/>
      </div>
      <div className="flex bg-[#060D1F] pt-24">
        <div>
            <GameList/>
           
        </div>
        <div className="mt-[135px] mr-4 ">
        <GameCard/>
        </div>
     
   
    



      </div>
      
    </div>
  );
}


export default Game_mode;