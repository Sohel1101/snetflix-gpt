import React, { useEffect, useState } from 'react';
import Netflix_logo from '../Assets/Logo.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isMobile, setIsMobile] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => navigate('/error'));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, userName } = auth;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            userName: userName,
          })
        );
        navigate('/browse');
      } else {
        // User signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearchGPT = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className='text-white z-10 absolute w-full px-4 sm:px-12 py-2 bg-gradient-to-b from-black flex justify-between items-center'>
      <img src={Netflix_logo} alt='Netflix_logo' className='h-[60px]' />
      {user && (
        <div className={`flex gap-4 ${isMobile ? 'flex-col items-center' : 'flex-row'}`}>
          <button className={`bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${isMobile ? 'w-full' : ''}`} onClick={handleSearchGPT}>
            Search GPT
          </button>
          {/* {!isMobile && <img alt='alternative img' />} This image is displayed only on non-mobile screens */}
          <button className={`bg-transparent hover:bg-gray-800 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded ${isMobile ? 'w-full' : ''}`} onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;


















