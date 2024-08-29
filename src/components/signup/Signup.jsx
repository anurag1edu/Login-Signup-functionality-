import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; 
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [name , setName]=useState('')
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="name"
          id="name"
          value={name}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm mb-4"
        />
      </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm mb-4"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-10 right-0 flex items-center px-3 cursor-pointer font-medium text-2xl mt-1"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
          >
            Signup
          </button>
         

          <div className=' flex items-center my-4'>
           <hr className='flex-grow border-gray-400'>
           </hr>
           <span className='mx-2 text-gray-600'>Or</span>
           <hr className='flex-grow border-gray-400'>
           </hr>
          </div>

          <button
          type="button"
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-4"
        >
          <FaGoogle className="mr-2 text-2xl" />
          Login with Google
        </button>

        <div className='text-center  my-2 '>Already a User? <Link to="/signup"><span className='text-orange-500 hover:underline  cursor-pointer'><Link to="/login">Login</Link></span></Link></div>
        <div className='text-center text-sm  text-gray-500'>By Login, you agree to the <span className='text-orange-500 hover:underline  cursor-pointer'>Terms & Conditions</span> and acknowledge our <span className='text-orange-500 hover:underline  cursor-pointer'>Privacy Policy</span></div>
      </div>
    </div>
  );
};

export default Signup;
