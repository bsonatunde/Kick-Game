import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/KickLogo.png';
import home from '../../asset/Vector.png';
import play from '../../asset/carbon_play-outline.png';
import leader from '../../asset/7.png';
import categ from '../../asset/categories.png';
import player from '../../asset/muiltplayer.png';
import game from '../../asset/Vect.png';
import how from '../../asset/howtoplay.png';
import sett from '../../asset/settings.png';
import hel from '../../asset/help.png';
import log from '../../asset/logout.png';

const SideNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`bg-[#060D1F] w-16 md:w-64 min-h-screen flex flex-col items-start ${isSidebarOpen ? 'border-r-2' : ''} border-gray-50 p-4 transition-all duration-300`}>
      <div className="cursor-pointer" onClick={toggleSidebar}>
        <img src={logo} alt='auto' className="w-10 h-10 md:w-20 md:h-20" />
      </div>

      {isSidebarOpen && (
        <>
          <Link to='/'>
            <span className="items-stretch hover:bg-pink-600 self-stretch flex justify-between gap-4 mt-5 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={home} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">Dashboard</div>
            </span>
          </Link>

          <Link to='/Gamemode'>
            <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-2 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={play} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">Play Mode</div>
            </span>
          </Link>

          <Link to='/LeaderBoard'>
            <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-2 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={leader} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">Leaderboard</div>
            </span>
          </Link>

          <Link to='/'>
            <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-2 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={categ} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">Categories</div>
            </span>
          </Link>

          <Link to='/'>
            <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-2 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={player} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">Multiplayer</div>
            </span>
          </Link>

          <Link to='/Gamemode'>
            <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-2 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={game} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">Gaming stats</div>
            </span>
          </Link>

          <Link to='/'>
            <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-6 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={how} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">How to play</div>
            </span>
          </Link>


          <Link to='/'>
            <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-2 px-2 md:px-6 py-2 md:py-4 rounded-xl">
              <img src={sett} alt='auto' className="w-6 h-6 md:w-8 md:h-8" />
              <div className="text-white text-opacity-60 text-sm leading-5 my-auto">Settings</div>
            </span>
          </Link>
          <Link to='/'>
        <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-4 px-6 py-4 rounded-xl max-md:px-5">
          <img
           src={hel}
           alt='auto'
          />
          <div className="text-white text-opacity-60 text-sm leading-5 my-auto">
            Help
          </div>
        </span>
        </Link>
        <Link to='/'>
        <span className="items-stretch self-stretch hover:bg-pink-600 flex justify-between gap-4 mt-4 px-6 py-4 rounded-xl max-md:px-5">
          <img
            src={log}
            alt='auto'
          />
          <div className="text-white text-opacity-60 text-sm leading-5 my-auto">
            Logout
          </div>
        </span>
        </Link>

          {/* Trivia of the day section */}
          <span className="self-stretch flex justify-between gap-2.5 mt-7 items-start">
            <span className="items-stretch shadow-2xl bg-white flex grow basis-[0%] flex-col px-4 py-5 rounded-3xl border-[0.5px] border-solid border-pink-600">
              <div className="text-zinc-800 text-center text-base leading-6 tracking-normal whitespace-nowrap">
                Trivia of the day
              </div>
              <div className="text-zinc-600 text-opacity-60 text-center text-sm leading-5 mt-1.5">
                Play trivia of the day to gain extra points and coins{" "}
              </div>
              <button className="text-white text-center bg-pink-600 text-sm leading-5 whitespace-nowrap justify-center items-stretch shadow-lg mt-5 px-14 py-3 rounded-xl max-md:px-5">
                Play trivia
              </button>
            </span>
          </span>
        </>
      )}
    </div>
  );
};

export default SideNavbar;
