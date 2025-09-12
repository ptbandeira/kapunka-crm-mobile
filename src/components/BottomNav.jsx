import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-around max-w-screen-sm mx-auto">
        <Link to="/calculator" className="flex flex-col items-center justify-center p-2 text-gray-500 hover:text-blue-500">
          {/* Calculator Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 11h.01M15 11h.01M9 11h.01M12 21a9 9 0 110-18 9 9 0 010 18z"></path></svg>
          <span className="text-xs">Calculator</span>
        </Link>
        <Link to="/results" className="flex flex-col items-center justify-center p-2 text-gray-500 hover:text-blue-500">
          {/* Results Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a3 3 0 013-3h0a3 3 0 013 3v2m-6 0h6M12 15a3 3 0 00-3 3h6a3 3 0 00-3-3zM12 3v6m0 0l-3-3m3 3l3-3"></path></svg>
          <span className="text-xs">Results</span>
        </Link>
        <Link to="/clients" className="flex flex-col items-center justify-center p-2 text-gray-500 hover:text-blue-500">
          {/* Clients Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.224-1.26-.62-1.742M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
          <span className="text-xs">Clients</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
