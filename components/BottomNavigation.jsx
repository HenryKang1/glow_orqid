import { useRouter } from 'next/router';

const BottomNavigation = ({ activeItem = 'home' }) => {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-around">
      <button 
        className={`bottom-nav-button flex flex-col items-center ${activeItem === 'home' ? '' : 'opacity-60'}`}
        onClick={() => handleNavigate('/')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-xs mt-1 text-black">Home</span>
      </button>
      
      <button 
        className={`bottom-nav-button flex flex-col items-center ${activeItem === 'customize' ? '' : 'opacity-60'}`}
        onClick={() => handleNavigate('/customize')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <span className="text-xs mt-1 text-black">Customize</span>
      </button>
      
      <button 
        className={`bottom-nav-button flex flex-col items-center ${activeItem === 'profile' ? '' : 'opacity-60'}`}
        onClick={() => handleNavigate('/profile')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-xs mt-1 text-black">Profile</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
