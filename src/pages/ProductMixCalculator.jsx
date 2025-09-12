import React, { useState } from 'react';

function ProductMixCalculator({ onSave }) {
  // State for form inputs
  const [businessType, setBusinessType] = useState('');
  const [treatmentRooms, setTreatmentRooms] = useState(0);
  const [seasonality, setSeasonality] = useState('');
  const [location, setLocation] = useState('');
  const [staffRatio, setStaffRatio] = useState(0);
  const [staffExperience, setStaffExperience] = useState('');
  const [localCompetition, setLocalCompetition] = useState('');

  // State for results
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    // --- Base Values ---
    let treatmentCapacity = 100; // Base capacity
    let avgTreatmentPrice = 100; // Base price

    // --- Refactored Logic ---
    let finalRecommendedPack = 'Starter';
    let finalProductMix = {};

    // 1. Determine the pack type first
    if (localCompetition === 'High' || treatmentRooms >= 5) {
      finalRecommendedPack = 'Premium';
    } else if (treatmentRooms >= 3) {
      finalRecommendedPack = 'Starter';
    }

    // 2. Set the product mix based on the determined pack
    if (finalRecommendedPack === 'Premium') {
      finalProductMix = { 'Premium Product A': 60, 'Premium Product B': 40 };
    } else { // Default to Starter pack
      finalProductMix = { 'Product A': 50, 'Product B': 30, 'Product C': 20 };
    }

      // 3. Apply other adjustments
      // Seasonality

      // --- Logic Implementation ---
      // 1. Seasonality
    if (seasonality === 'High Season' && location === 'Coastal Area') {
      treatmentCapacity *= 1.4;
    }
    if (seasonality === 'Holiday Peak' && (location === 'Madrid' || location === 'Barcelona')) {
      treatmentCapacity *= 1.2;
    }
    // Staff Efficiency
    if (treatmentRooms > 0 && staffRatio > 0) {
      const efficiency = 1.0 + (staffRatio / treatmentRooms) * 0.1;
      treatmentCapacity *= efficiency;
    }
    // Geographic Nuances
    if (location === 'Madrid') {
      avgTreatmentPrice *= 1.2;
    }

    // 4. Set the final results state
    setResults({
      recommendedPack: finalRecommendedPack,
      treatmentCapacity: treatmentCapacity.toFixed(2),
      avgTreatmentPrice: avgTreatmentPrice.toFixed(2),
      productMix: finalProductMix,
    });
  };

  return (
    <div>
      <h2 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Business Details</h2>
      {/* Form Section */}
      <div className="flex max-w-[480px] flex-col gap-4 p-4">
        {/* Business Type */}
        <label className="flex flex-col">
          <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Business Type</p>
          <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d171b] focus:outline-0 focus:ring-0 border border-[#cfdfe7] bg-slate-50 h-14 p-3">
            <option value="">Select Business Type</option>
            <option value="Hotel">Hotel</option>
            <option value="Spa">Spa</option>
            <option value="Aesthetic Clinic">Aesthetic Clinic</option>
          </select>
        </label>
        {/* Treatment Rooms */}
        <label className="flex flex-col">
            <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Number of treatment rooms</p>
            <input type="number" value={treatmentRooms} onChange={(e) => setTreatmentRooms(parseInt(e.target.value, 10))} className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#0d171b] border border-[#cfdfe7] bg-slate-50 h-14 p-3" />
        </label>
      </div>

      <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Product Mix Influencers</h3>
      <div className="flex max-w-[480px] flex-col gap-4 p-4">
        {/* Seasonality */}
        <label className="flex flex-col">
          <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Seasonality</p>
          <select value={seasonality} onChange={(e) => setSeasonality(e.target.value)} className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#0d171b] border border-[#cfdfe7] bg-slate-50 h-14 p-3">
            <option value="">Select Seasonality</option>
            <option value="High Season">High Season</option>
            <option value="Low Season">Low Season</option>
            <option value="Holiday Peak">Holiday Peak</option>
          </select>
        </label>
        {/* Location */}
        <label className="flex flex-col">
          <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Geographic Location</p>
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#0d171b] border border-[#cfdfe7] bg-slate-50 h-14 p-3">
            <option value="">Select Location</option>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Coastal Area">Coastal Area</option>
          </select>
        </label>
        {/* Staff Ratio */}
        <label className="flex flex-col">
            <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Staff-to-Room Ratio</p>
            <input type="number" value={staffRatio} onChange={(e) => setStaffRatio(parseFloat(e.target.value))} className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#0d171b] border border-[#cfdfe7] bg-slate-50 h-14 p-3" />
        </label>
         {/* Staff Experience */}
        <label className="flex flex-col">
          <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Staff Experience</p>
          <select value={staffExperience} onChange={(e) => setStaffExperience(e.target.value)} className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#0d171b] border border-[#cfdfe7] bg-slate-50 h-14 p-3">
            <option value="">Select Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </label>
        {/* Local Competition */}
        <label className="flex flex-col">
          <p className="text-[#0d171b] text-base font-medium leading-normal pb-2">Local Competition</p>
          <select value={localCompetition} onChange={(e) => setLocalCompetition(e.target.value)} className="form-input flex w-full min-w-0 flex-1 rounded-xl text-[#0d171b] border border-[#cfdfe7] bg-slate-50 h-14 p-3">
            <option value="">Select Competition</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
      </div>

      {/* Calculate Button */}
      <div className="flex justify-center px-4 py-3">
        <button onClick={handleCalculate} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-xl h-12 px-5 bg-[#1193d4] text-slate-50 text-base font-bold grow">
          Calculate Mix
        </button>
      </div>

      {/* Results Section */}
      {results && (
        <div className="px-4 py-3">
          <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Recommended Mix</h3>
          <div className="rounded-xl p-6 bg-[#e7eff3]">
            <p className="text-5xl font-bold text-center">100%</p>
            <p className="text-sm text-center text-gray-500">Current +5%</p>
            <div className="mt-4 space-y-2">
              {Object.entries(results.productMix).map(([product, percentage]) => (
                <div key={product}>
                  <p className="text-sm font-medium">{product}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pt-4 pb-2">Details</h3>
          <div className="rounded-xl p-6 bg-[#e7eff3]">
            <ul>
              {Object.entries(results.productMix).map(([product, percentage]) => (
                <li key={product} className="flex justify-between py-2 border-b">
                  <span>{product}</span>
                  <span>{percentage}%</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mt-4">
            <button onClick={() => onSave(results)} className="flex-1 px-4 py-2 text-white bg-blue-500 rounded-xl">Save</button>
            <button className="flex-1 px-4 py-2 bg-gray-200 rounded-xl">Share</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductMixCalculator;
