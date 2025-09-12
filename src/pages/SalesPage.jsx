import React from 'react';

const StatCard = ({ title, value, change, changeColor }) => (
  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e7eff3]">
    <p className="text-[#0d171b] text-base font-medium leading-normal">{title}</p>
    <p className="text-[#0d171b] tracking-light text-2xl font-bold leading-tight">{value}</p>
    <p className={`text-[${changeColor}] text-base font-medium leading-normal`}>{change}</p>
  </div>
);

const SalesPage = () => {
  return (
    <div>
      <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Key Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        <StatCard title="Total Revenue" value="$2.5M" change="+10%" changeColor="#078836" />
        <StatCard title="Avg. Deal Size" value="$12.5K" change="-5%" changeColor="#e73508" />
        <StatCard title="Profit Margin" value="22%" change="+2%" changeColor="#078836" />
        <StatCard title="Sales Cycle" value="30 Days" change="-3%" changeColor="#e73508" />
      </div>

      <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pt-4 pb-2">Sales by Product Mix</h3>
      <div className="rounded-xl p-6 bg-[#e7eff3]">
        <p className="text-2xl font-bold">$1.2M</p>
        <p className="text-sm text-gray-500">This Year +15%</p>
        <div className="mt-4">
          {/* Placeholder for chart */}
          <div className="h-40 bg-gray-300 rounded"></div>
        </div>
      </div>

      <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pt-4 pb-2">Filters</h3>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-gray-200 rounded">Client</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Date Range</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Product Type</button>
      </div>
    </div>
  );
};

export default SalesPage;
