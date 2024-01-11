
import React from 'react';
import FormComponent from '../component/FormComponent';
import foot from '../asset/Maskgroup.png';
import logo from '../asset/KickLogo.png';


const Register = () => {
  return (
    <div className="bg-[#060D1F] flex flex-col items-center pt-12 pb-3 px-16 max-md:px-5">
      <span className="flex w-[349px] max-w-full flex-col mt-36 max-md:mt-10">
        <img
         src={logo}
        />
      </span>
      <div className="text-white text-base self-center whitespace-nowrap mt-24 max-md:mt-10">
          Register to play
      </div>
      <FormComponent />
      <img
      src={foot}
      />
    </div>
  );
};

export default Register;
