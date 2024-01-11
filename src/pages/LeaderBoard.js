import * as React from "react";
import { Link } from "react-router-dom";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import backgroundImage from '../asset/Group92.png';
import leader from '../asset/Group94.png';
import LeaderBoardCard from "../component/LeaderBoard/LeaderBoardCard";


function LeaderBoard(props) {
  return (
    <div className=" flex ">
      <div className="w-1/5">
        <SideNavbar/>
      </div>
      <div className=" bg-[#060D1F] bg-cover p-4">
      <div className="">
        <img src={backgroundImage} className="absolute" />

      <div className="text-white text-base w-full max-md:max-w-full pt-20">
        Hey Stella.
      </div>
    <div className=" text-white w-2/3 py-8">
      Welcome to the Leaderboard! Here's where champions are recognized. Check
      out the top performers, see who's dominating the trivia game, and strive
      to claim the throne. Can you climb to the highest ranks and become a
      trivia legend? Compete, conquer, and make your mark on the leaderboard
      today!
    </div>
    <div>
      <img
      src={leader}
      />
    </div>
    <div className="grid grid-cols-2 gap-12">
      <div><LeaderBoardCard /></div>
      <div><LeaderBoardCard /></div>
      <div><LeaderBoardCard /></div>
      <div><LeaderBoardCard /></div>
      <div><LeaderBoardCard /></div>
      <div><LeaderBoardCard /></div>
      <div><LeaderBoardCard /></div>
      <div><LeaderBoardCard /></div>
      
    </div>
    </div>

      </div>
      
    </div>
    
  );
}


export default  LeaderBoard;