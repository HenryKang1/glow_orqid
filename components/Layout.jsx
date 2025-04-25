import Head from 'next/head';
import BottomNavigation from './BottomNavigation';

const Layout = ({ children, title = 'Glow - Skincare Routine App', activeItem = 'home' }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Your personalized skincare journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="max-w-md mx-auto bg-white min-h-screen relative pb-16">
        {children}
        <BottomNavigation activeItem={activeItem} />
      </main>
    </div>
  );
};

export default Layout;
