import React from "react";
import { Link } from "react-router-dom";
import ball1 from '../asset/ball.png';
import ball2 from '../asset/ball.png';
import logo from '../asset/KickLogo.png';

function WelcomePage() {
  return (
    <div className="bg-[#060D1F] h-screen flex flex-col px-4 md:px-20 py-12 items-center relative">
      <div className="flex flex-col items-center max-w-[772px] w-full">
        <div className="text-white text-center text-lg mt-4">
          Ready to play? Get Started
        </div>
        <div className="text-neutral-500 text-center text-base mt-2">
          Dive into the game, kick off, and compete with others
        </div>
        <img src={ball2} alt='auto' className="mt-2 max-w-full" />
      </div>

      <div className="absolute top-0 left-0 mt-4 ml-4">
        <img src={ball2} alt='auto' className="max-w-full" />
      </div>

      <div className="flex flex-col md:flex-row justify-between md:w-[772px] mt-8">
        <div className="flex-1 self-stretch flex item-center border-pink-400 flex-col p-4 mb-4 md:border-r-2 md:mb-0">
          <div className="text-neutral-500 text-center text-sm leading-5 whitespace-nowrap">
            New to KICK? Sign Up and Score Big!
          </div>
          <div className="text-neutral-500 text-center text-sm leading-6 mt-4">
            Become a part of the KICK community. Create your account and unlock
            exclusive features, compete with friends, and rise through the ranks
            as you prove yourself as the ultimate football trivia champion
          </div>
          <Link to='/Register' className="text-white text-sm whitespace-nowrap justify-center items-center shadow-sm bg-pink-600 z-[1] w-full mt-4 px-8 py-3.5 rounded-xl text-center">
            REGISTER
          </Link>
        </div>

        <div className="flex-1 self-stretch flex item-center flex-col p-4 border-l-2 md:border-l-0">
          <div className="text-neutral-500 text-center text-sm leading-5 whitespace-nowrap">
            Already a KICK superstar? Let's Play!
          </div>
          <div className="text-neutral-500 text-center text-sm leading-6 mt-4">
            Welcome back to the pitch, KICK champion! Log in to continue your
            journey, tackle new challenges, and keep your winning streak alive
            ompete with friends, and rise through the ranks
            as you prove yourself as the ultimate football trivia champion
          </div>
          <button className="text-white text-sm whitespace-nowrap justify-center items-center shadow-sm bg-zinc-500 z-[1] w-full mt-4 px-8 py-3.5 rounded-xl">
            LOG IN
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <img className="w-12 md:w-10 mx-auto" src={logo} alt='auto' />
      </div>

      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <img className="w-12 md:w-10" src={ball1} alt='auto' />
      </div>
    </div>
  );
}

export default WelcomePage;
