import * as React from "react";
import rec1 from '../../asset/Rectangle (1).png';
import rec2 from '../../asset/Rectangle.png'
import badg1 from '../../asset/badge.png'
import badg2 from '../../asset/card.png'
import badg3 from '../../asset/card1.png'

function GameList() {
  return (
    <span className="flex max-w-[592px] flex-col items-stretch px-5">
      <div className="text-white text-base w-full max-md:max-w-full">
        Hey Stella.
      </div>
      <div className="text-white text-lg w-full mt-8 max-md:max-w-full">
        CHOOSE PLAY MODE
      </div>
      <div className="border bg-red-100 w-full mt-12 px-4 py-3 rounded-xl border-solid border-red-500 max-md:max-w-full max-md:mt-10 max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center border border-[color:var(--Blue-0,#EBECFD)] shadow-sm bg-zinc-50 flex grow flex-col w-full px-5 py-4 rounded-3xl border-solid max-md:mt-10">
              <img
                src={badg1}
                alt='auto'
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[59%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-zinc-800 text-sm leading-5 whitespace-nowrap my-auto max-md:mt-10">
              SINGLE PLAYER MODE
            </div>
          </div>
        </div>
      </div>
      <div className="border bg-red-100 w-full mt-7 px-4 py-3 rounded-xl border-solid border-red-500 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center border border-[color:var(--Blue-0,#EBECFD)] shadow-sm bg-zinc-50 flex grow flex-col w-full px-5 py-4 rounded-3xl border-solid max-md:mt-10">
              <img
               src={badg2}
               alt='auto'
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[57%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-zinc-800 text-sm leading-5 whitespace-nowrap my-auto max-md:mt-10">
              MULTI PLAYER MODE
            </div>
          </div>
        </div>
      </div>
      <div className="border bg-red-100 w-full mt-9 px-4 py-3 rounded-xl border-solid border-red-500 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center border border-[color:var(--Blue-0,#EBECFD)] shadow-sm bg-zinc-50 flex grow flex-col w-full px-5 py-4 rounded-3xl border-solid max-md:mt-10">
              <img
                 src={badg3}
                 alt='auto'
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-zinc-800 text-sm leading-5 whitespace-nowrap my-auto max-md:mt-10">
              CHALLENGE MODE
            </div>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-[2px] bg-violet-50 bg-opacity-10 flex w-full justify-between gap-5 mt-16 pl-10 pr-7 py-8 rounded-2xl items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
        <img
          src={rec1}
          alt='auto'
        />
        <span className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
          <div className="text-white text-center text-sm font-[350] leading-4 uppercase self-center whitespace-nowrap">
            FEATURED
          </div>
          <div className="text-white text-center text-base font-[350] leading-5 uppercase mt-5">
            <span className="">T</span>
            <span className="">
              ake part in challenges with friends or other players
            </span>
          </div>
          <button className="text-white text-sm font-[750] whitespace-nowrap justify-center items-stretch shadow-sm bg-pink-600 self-center mt-5 px-9 py-3.5 rounded-2xl max-md:px-5">
            Find Friends
          </button>
        </span>
        <img
          src={rec2}
          alt='auto'
        />
      </div>
    </span>
  );
}


export default GameList