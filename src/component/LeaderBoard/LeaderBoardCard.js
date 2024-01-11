import React from 'react';
import fram from '../../asset/Frame1042.png'
import medal from '../../asset/Gold.png'



function LeaderBoardCard() {
  return (
    <span className="bg-pink-600 flex max-w-[531px] items-stretch justify-between gap-5 pl-5 pr-20 py-4 rounded-xl max-md:flex-wrap max-md:pr-5">
      <span className="flex items-stretch justify-between gap-4">
        <div className="text-white text-base self-center my-auto">01</div>
        <img
          src={fram}
        />
        <div className="text-white text-base self-center my-auto">Francis</div>
      </span>
      <div className="text-white text-base self-center my-auto">1720pts</div>
      <div className="items-center self-center flex aspect-[1.263157894736842] flex-col justify-center my-auto">
        <img
          src={medal}
        />
      </div>
    </span>
  );
}




export default LeaderBoardCard;
