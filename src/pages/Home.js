import React from 'react'
import SideNavbar from '../component/SideNavbar/SideNavbar';
import frame1 from '../asset/TopPlayers.png';
import frame2 from '../asset/Frame1057.png';
import frame3 from '../asset/Frame1058.png';
import frame4 from '../asset/Frame1059.png';
import frame5 from '../asset/Frame1060.png';
import noti from '../asset/notification.png';
import pic from '../asset/profilepic.png';
import eye from '../asset/typcn_eye.png';


const Home = () => {
    
  return (
<div className=" flex">
    <div className="w-1/5">
      <SideNavbar/>
    </div>
    <div className="bg-[#060D1F] py-8 ">
    <span className=" self-center flex grow basis-[0%] flex-col items-stretch my-auto px-5 max-md:max-w-full">
        <span className="flex w-full justify-between gap-5 pr-10 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-white text-base">Hi Stella,</div>
          <div className="self-stretch flex items-center justify-between gap-5">
            <img
              
              src={noti}
              alt='auto'
              
            />
            <img
              src={pic}
              alt='auto'
            />
          </div>
        </span>
        <div className="text-white text-sm font-[350] max-md:max-w-full">
          Kick start your day with high points
        </div>
        <div className="mt-8 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0">
              <div className="border bg-white grow w-full pl-8 pr-14 py-6 rounded-xl border-solid border-pink-600 max-md:max-w-full max-md:mt-6 max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
                    <span className="flex flex-col items-stretch my-auto max-md:mt-10">
                      <span className="flex justify-between gap-5 pr-5 items-start max-md:pr-5">
                        <div className="text-zinc-600 text-sm font-[350] grow shrink basis-auto">
                          Your Wallet Balance
                        </div>
                        <img
                         src={eye}
                         alt='auto'
                        />
                      </span>
                      <div className="text-zinc-800 text-xl mt-5">$4500.99</div>
                      <div className="flex items-stretch justify-between gap-5 mt-9 pr-9 max-md:pr-5">
                      <button className="text-zinc-600 text-sm font-[350] hover:bg-pink-600 whitespace-nowrap justify-center items-stretch bg-stone-300 grow px-6 py-2 rounded-xl max-md:px-5">
                          Earn more
                        </button>
                        <button className="text-zinc-600 text-sm font-[350] hover:bg-pink-600 whitespace-nowrap justify-center items-stretch bg-stone-300 grow px-6 py-2 rounded-xl max-md:px-5">
                          Deposit
                        </button>
                        <button className="text-zinc-600 text-sm font-[350] hover:bg-pink-600 whitespace-nowrap justify-center items-stretch bg-stone-300 grow px-4 py-2 rounded-xl">
                          Withdraw
                        </button>
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="border flex w-[264px] shrink-0 max-w-full h-40 flex-col mx-auto rounded-xl border-solid border-pink-600 max-md:mt-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <div className="border bg-white flex w-[323px] shrink-0 max-w-full h-[204px] flex-col mx-auto rounded-xl border-solid border-pink-600 max-md:mt-6" />
            </div>
          </div>
        </div>
        <span className="flex items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-white text-sm">Top players this week</div>
          <div className="text-white text-xs font-[350] mt-1.5">
            View leaderboard
          </div>
        </span>
        <img
         src={frame1}
         alt='auto'
        />
        <div className="text-white text-sm mt-7 max-md:max-w-full">
          Recommended for you
        </div>
        <div className="mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
              <img
               src={frame2}
               alt='auto'
              />
            </div>
            <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <img
             src={frame3} alt="Description"
              />
            </div>
            <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <img
              src={frame4} alt="Description"
              />
            </div>
            <div className="flex flex-col items-stretch w-[17%] ml-5 max-md:w-full max-md:ml-0">
              <img
               
                src={frame5}
                alt='auto'
              />
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>


  
  )
}

export default Home;