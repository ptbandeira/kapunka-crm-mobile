import React from 'react';
import DollarIcon from '../components/icons/DollarIcon';
import UserPlusIcon from '../components/icons/UserPlusIcon';
import CalendarIcon from '../components/icons/CalendarIcon';

function HomeDashboard() {
  const StatCard = ({ title, value, change, changeColor }) => (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e7eff3]">
      <p className="text-[#0d171b] text-base font-medium leading-normal">{title}</p>
      <p className="text-[#0d171b] tracking-light text-2xl font-bold leading-tight">{value}</p>
      <p className={`text-[${changeColor}] text-base font-medium leading-normal`}>{change}</p>
    </div>
  );

  const ActivityItem = ({ icon, title, subtitle }) => {
    const Icon = icon;
    return (
      <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2">
        <div className="text-[#0d171b] flex items-center justify-center rounded-lg bg-[#e7eff3] shrink-0 size-12">
          <Icon />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0d171b] text-base font-medium leading-normal line-clamp-1">{title}</p>
          <p className="text-[#4c809a] text-sm font-normal leading-normal line-clamp-2">{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Overview</h3>
        <div className="flex flex-wrap gap-4">
            <StatCard title="Total Sales" value="$250,000" change="+10%" changeColor="#078836" />
            <StatCard title="Active Deals" value="15" change="-5%" changeColor="#e73508" />
            <StatCard title="Conversion Rate" value="12%" change="+2%" changeColor="#078836" />
        </div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pt-4 pb-2">Recent Activity</h3>
        <ActivityItem icon={DollarIcon} title="Deal Closed" subtitle="Acme Corp" />
        <ActivityItem icon={UserPlusIcon} title="New Lead Added" subtitle="Tech Solutions Inc." />
        <ActivityItem icon={CalendarIcon} title="Meeting Scheduled" subtitle="Global Innovations" />
    </div>
  );
}

export default HomeDashboard;
