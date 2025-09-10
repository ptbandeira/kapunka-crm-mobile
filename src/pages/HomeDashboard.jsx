import React from 'react';

function HomeDashboard() {
  const StatCard = ({ title, value, change, changeColor }) => (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e7eff3]">
      <p className="text-[#0d171b] text-base font-medium leading-normal">{title}</p>
      <p className="text-[#0d171b] tracking-light text-2xl font-bold leading-tight">{value}</p>
      <p className={`text-[${changeColor}] text-base font-medium leading-normal`}>{change}</p>
    </div>
  );

  const ActivityItem = ({ icon, title, subtitle }) => (
    <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
      <div className="text-[#0d171b] flex items-center justify-center rounded-lg bg-[#e7eff3] shrink-0 size-12" dangerouslySetInnerHTML={{ __html: icon }}>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#0d171b] text-base font-medium leading-normal line-clamp-1">{title}</p>
        <p className="text-[#4c809a] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
      </div>
    </div>
  );

  // SVGs for icons - in a real app, these would be components
  const dollarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path></svg>`;
  const userPlusIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path></svg>`;
  const calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>`;

  return (
    <div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Overview</h3>
        <div className="flex flex-wrap gap-4 p-4">
            <StatCard title="Total Sales" value="$250,000" change="+10%" changeColor="#078836" />
            <StatCard title="Active Deals" value="15" change="-5%" changeColor="#e73508" />
            <StatCard title="Conversion Rate" value="12%" change="+2%" changeColor="#078836" />
        </div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Recent Activity</h3>
        <ActivityItem icon={dollarIcon} title="Deal Closed" subtitle="Acme Corp" />
        <ActivityItem icon={userPlusIcon} title="New Lead Added" subtitle="Tech Solutions Inc." />
        <ActivityItem icon={calendarIcon} title="Meeting Scheduled" subtitle="Global Innovations" />
    </div>
  );
}

export default HomeDashboard;
