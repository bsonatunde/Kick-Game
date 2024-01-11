import * as React from "react";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import GameList from "../component/Game_mode/GameList";
import GameCard from "../component/Game_mode/GameCard";

function Gamemode () {
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


export default Gamemode;