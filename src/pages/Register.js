
import React from 'react';
import FormComponent from '../component/FormComponent';
import logo from '../asset/KickLogo.png';


const Register = () => {
  return (
    <div className="bg-[#060D1F] flex flex-col items-center pt-12 pb-3 px-16 max-md:px-5">
       <span className="flex w-[349px] max-w-full flex-col mt-36 max-md:mt-10">
      <img
        src={logo}
        alt='auto'
        className="w-24 h-auto max-w-full mx-auto"  // Adjust the width (w-24) as needed
      />
    </span>
      <div className="text-white text-base self-center whitespace-nowrap mt-24 max-md:mt-10">
          Register to play
      </div>
      <FormComponent />
     
    </div>
  );
};

export default Register;
