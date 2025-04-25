import { useRouter } from 'next/router';

const Header = ({ title, subtitle, showBackButton = false }) => {
  const router = useRouter();

  return (
    <div className="gradient-header px-6 pt-12 pb-6" style={{ background: 'linear-gradient(135deg, #C9D6FF 0%, #E2E2E2 100%)' }}>
      <div className="flex items-center">
        {showBackButton && (
          <button 
            onClick={() => router.back()} 
            className="mr-3"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div>
          <h1 className="text-2xl font-bold text-black">{title}</h1>
          {subtitle && <p className="text-sm text-black mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
