import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; 
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    digit: false,
    specialChar: false,
  });
  const [showValidationBox, setShowValidationBox] = useState(false);

  const validatePassword = (password) => {
    const length = password.length >= 8;
    const lowercase = /[a-z]/.test(password);
    const uppercase = /[A-Z]/.test(password);
    const digit = /[0-9]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordValidations({ length, lowercase, uppercase, digit, specialChar });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { length, lowercase, uppercase, digit, specialChar } = passwordValidations;

    if (length && lowercase && uppercase && digit && specialChar) {
      console.log({ name, email, password });
    } else {
      alert('Please ensure all password criteria are met.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm mb-4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
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
            value={password}
            onFocus={() => setShowValidationBox(true)}
            onBlur={() => setShowValidationBox(false)}
            onChange={handlePasswordChange}
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

          {showValidationBox && (
            <div className="flex items-center text-sm mt-1">
              <span className={`${passwordValidations.length ? 'text-green-600' : 'text-red-600'} mr-2`}>
                8+ chars
              </span>
              <span className={`${passwordValidations.lowercase ? 'text-green-600' : 'text-red-600'} mr-2`}>
                1 lowercase
              </span>
              <span className={`${passwordValidations.uppercase ? 'text-green-600' : 'text-red-600'} mr-2`}>
                1 uppercase
              </span>
              <span className={`${passwordValidations.digit ? 'text-green-600' : 'text-red-600'} mr-2`}>
                1 digit
              </span>
              <span className={`${passwordValidations.specialChar ? 'text-green-600' : 'text-red-600'}`}>
                1 special char
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
        >
          Signup
        </button>

        <div className='flex items-center my-4'>
          <hr className='flex-grow border-gray-400' />
          <span className='mx-2 text-gray-600'>Or</span>
          <hr className='flex-grow border-gray-400' />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-4"
        >
          <FaGoogle className="mr-2 text-2xl" />
          Login with Google
        </button>

        <div className='text-center my-2'>
          Already a User? <Link to="/signup"><span className='text-orange-500 hover:underline cursor-pointer'><Link to="/login">Login</Link></span></Link>
        </div>
        <div className='text-center text-sm text-gray-500'>By Login, you agree to the <span className='text-orange-500 hover:underline cursor-pointer'>Terms & Conditions</span> and acknowledge our <span className='text-orange-500 hover:underline cursor-pointer'>Privacy Policy</span></div>
      </div>
    </div>
  );
};

export default Signup;
