import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  const activeLink = 'text-blue-500';
  const inactiveLink = 'text-gray-500';

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around max-w-screen-sm mx-auto">
        <NavLink to="/calculator" className={({ isActive }) => `flex flex-col items-center justify-center p-2 hover:text-blue-500 ${isActive ? activeLink : inactiveLink}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 11h.01M15 11h.01M9 11h.01M12 21a9 9 0 110-18 9 9 0 010 18z"></path></svg>
          <span className="text-xs">Calculator</span>
        </NavLink>
        <NavLink to="/clients" className={({ isActive }) => `flex flex-col items-center justify-center p-2 hover:text-blue-500 ${isActive ? activeLink : inactiveLink}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.224-1.26-.62-1.742M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
          <span className="text-xs">Clients</span>
        </NavLink>
        <NavLink to="/leads" className={({ isActive }) => `flex flex-col items-center justify-center p-2 hover:text-blue-500 ${isActive ? activeLink : inactiveLink}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M157.19,182.07a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path></svg>
          <span className="text-xs">Leads</span>
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) => `flex flex-col items-center justify-center p-2 hover:text-blue-500 ${isActive ? activeLink : inactiveLink}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path></svg>
          <span className="text-xs">Sales</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
