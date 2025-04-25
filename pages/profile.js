import Layout from '../components/Layout';
import Header from '../components/Header';

export default function Profile() {
  return (
    <Layout activeItem="profile">
      <Header 
        title="Your Profile" 
        subtitle="Manage your account and preferences" 
      />
      
      <div className="flex-1 px-6 pt-6 pb-24">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-black">Guest User</h2>
          <p className="text-sm text-black opacity-70">Create an account to save your routines</p>
        </div>
        
        <div className="space-y-4">
          <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200">
            Sign Up / Login
          </button>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-black mb-3">Saved Preferences</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="text-black">Skin Type</span>
                <span className="text-black opacity-70">Not set</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black">Skin Concerns</span>
                <span className="text-black opacity-70">Not set</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-black mb-3">App Settings</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-black">Notifications</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-black">Dark Mode</span>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" id="toggle2" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
