import React from 'react';
import BottomNav from './BottomNav';

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M224,128a96,96,0,0,1-96,96,8,8,0,0,1,0-16,80,80,0,1,0-80-80,8,8,0,0,1-16,0,96,96,0,0,1,192,0Zm-96,48a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,176Zm0-80a32,32,0,1,1-32,32A32,32,0,0,1,128,96Z"></path>
  </svg>
);


const MainLayout = ({ children, title, action }) => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <header className="flex items-center justify-between p-4 bg-slate-50">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div>
          {action}
          <button className="ml-2">
            <SettingsIcon />
          </button>
        </div>
      </header>
      <main className="p-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
