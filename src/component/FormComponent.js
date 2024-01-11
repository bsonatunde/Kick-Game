import React, { useState } from 'react';

const FormComponent = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    password: '',
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='w-[600px] item-center justify-center mx-auto'>
    <div className='text-white text-base self-center whitespace-nowrap mt-12 w-[500px] mx-auto '>
      
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
            <label className='text-white text-base self-stretch mt-8 max-md:mt-10'>
                Username or Phone Number:
            <br/>
            <input className="w-[400px] bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
                type="text"
                placeholder='Enter your username or phone number'
                name="username"
                value={formData.username}
                onChange={handleInputChange}
            />
            </label>
        </div>
        <br />

        <div className='mb-4'>
        <label className='text-white text-base self-stretch mt-8 max-md:mt-10'>
          Email
          <br/>
          <input className="w-[400px] bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            type="email"
            placeholder='Enter your email'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <br />

        <div className='mb-4'>
        <label className='text-white text-base self-stretch mt-8 max-md:mt-10'>
          Date of Birth:
          <br/>
          <input className="w-[400px] bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            type="text"
            placeholder='Enter your date of birth'
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <br />

        <div className='mb-4'>
        <label className='text-white text-base self-stretch mt-8 max-md:mt-10'>
          Password
          <br/>
          <input className="w-[400px] bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 p-2"
            type="password"
            placeholder='Enter your password'
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <br />
        <button className="text-white text-sm whitespace-nowrap shadow-sm bg-pink-600 w-[240px] mx-[100px] item-center justify-center max-w-full mt-16 px-16 py-3.5 rounded-xl max-md:mt-10 max-md:px-5">
            REGISTER
        </button>
      </form>
    </div>
    </div>
  );
};

export default FormComponent;
