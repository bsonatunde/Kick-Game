import * as React from "react";
import ball1 from '../asset/ball.png';
import ball2 from '../asset/ball.png';
import logo from '../asset/KickLogo.png';
import { Link } from "react-router-dom";


function WelcomePage() {
  return (
    <div className="bg-[#060D1F] flex flex-col pl-20 pr-20 py-12 items-end max-md:px-5">
      <div className="flex w-[772px] max-w-full flex-col items-stretch mr-16 mt-32 max-md:mr-2.5 max-md:mt-10">
        <span className="flex flex-col items-start max-md:max-w-full">
          <div className="text-white text-center text-lg whitespace-nowrap ml-20 max-md:ml-2.5">
            Ready to play? Get Started
          </div>
          <span className="self-stretch flex justify-between gap-5 mt-2 items-end">
            <div className="text-neutral-500 text-center text-base mt-7">
              Dive into the game, kick off, and compete with others
            </div>
            <img
             src={ball2}
             alt='auto'
            />
          </span>
        </span>
        
      </div>

      <div className="grid grid-cols-2 h-[400px]">
        <div className="self-stretch z-[1] flex item-center border-pink-400 m-auto flex-col ml-7 mr-5 items-start max-md:max-w-full max-md:mt-0 max-md:mr-2.5 border-r-2">
          <div className="text-neutral-500 text-center text-sm leading-5 whitespace-nowrap ml-36 max-md:ml-2.5">
            New to KICK? Sign Up and Score Big!
          </div>
          <div className="text-neutral-500 text-center text-sm leading-6 max-w-[530px] mt-8 max-md:max-w-full">
            Become a part of the KICK community. Create your account and unlock
            exclusive features, compete with friends, and rise through the ranks
            as you prove yourself as the ultimate football trivia champion
          </div>
          <Link to='/Register' className="text-white text-sm whitespace-nowrap justify-center items-center shadow-sm bg-pink-600 z-[1] w-[247px] max-w-full ml-36 mt-8 px-16 py-3.5 rounded-xl max-md:ml-2.5 max-md:px-5">
            REGISTER
          </Link>
        </div>
        
        <div className="self-stretch z-[1] flex item-center m-auto flex-col ml-7 mr-5 items-start max-md:max-w-full max-md:mt-0 max-md:mr-2.5">
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
      </div>
      </div>

      <div className="flex w-full item-start">
        <img className="w-[50px] mr-[45%]"
        src={ball1}
        alt='auto'
        />
        <img className="w-[50px]"
       src={logo}
       alt='auto'
        />
      </div>
    </div>
  );
}

export default WelcomePage