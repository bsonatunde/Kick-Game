import * as React from "react";
import { Link } from "react-router-dom";
import ball1 from '../asset/ball.png';
import ball2 from '../asset/ball.png';
import logo from '../asset/KickLogo.png';



function WelcomePage() {
  return (
    <div className="bg-[#060D1F] flex flex-col pl-20 pr-20 py-12 items-end max-md:px-5">
      <div className="flex w-[772px] max-w-full flex-col items-stretch mr-16 mt-32 max-md:mr-2.5 max-md:mt-10">
        <span className="flex flex-col items-start max-md:max-w-full">
          <div className="text-white text-center text-lg whitespace-nowrap ml-20 max-md:ml-2.5">
            Ready to play? Get Started
          </div>
          <span className="self-stretch flex justify-between gap-5 mt-2 items-end max-md:max-w-full max-md:flex-wrap">
            <div className="text-neutral-500 text-center text-base leading-6 grow shrink basis-auto mt-7">
              Dive into the game, kick off, and compete with others
            </div>
            <img
             src={ball2}
            />
          </span>
        </span>
        <div className="bg-pink-600 w-px shrink-0 h-[541px] ml-48 mt-16 self-start max-md:ml-2.5 max-md:mt-10" />
      </div>
      <span className="self-stretch z-[1] flex mt-0 flex-col ml-7 mr-5 items-start max-md:max-w-full max-md:mt-0 max-md:mr-2.5">
        <div className="text-neutral-500 text-center text-sm leading-5 whitespace-nowrap ml-36 max-md:ml-2.5">
          New to KICK? Sign Up and Score Big!
        </div>
        <div className="text-neutral-500 text-center text-sm leading-6 max-w-[530px] mt-8 max-md:max-w-full">
          Become a part of the KICK community. Create your account and unlock
          exclusive features, compete with friends, and rise through the ranks
          as you prove yourself as the ultimate football trivia champion
        </div>
        <button className="text-white text-sm whitespace-nowrap justify-center items-center shadow-sm bg-pink-600 z-[1] w-[247px] max-w-full ml-36 mt-8 px-16 py-3.5 rounded-xl max-md:ml-2.5 max-md:px-5">
          REGISTER
        </button>
        <div className="text-neutral-500 text-center text-sm leading-5 mt-0 whitespace-nowrap mr-36 self-end max-md:mr-2.5">
          Already a KICK superstar? Let's Play!
        </div>
        <div className="text-neutral-500 text-center text-sm leading-6 max-w-[530px] mt-10 self-end max-md:max-w-full max-md:mt-10">
          Welcome back to the pitch, KICK champion! Log in to continue your
          journey, tackle new challenges, and keep your winning streak alive
        </div>
        <button className="text-white text-sm whitespace-nowrap justify-center items-center shadow-sm bg-zinc-500 w-[247px] max-w-full mr-36 mt-10 px-16 py-3.5 rounded-xl self-end max-md:mr-2.5 max-md:mt-10 max-md:px-5">
          LOG IN
        </button>
      </span>
      <div className="flex w-[703px] max-w-full flex-col mt-48 mb-8 self-start items-start max-md:mt-10">
        <img
        src={ball1}
        />
        <img
       src={logo}
        />
      </div>
    </div>
  );
}

export default WelcomePage