import React from 'react';

function ResultsPage({ results }) {
  if (!results || results.length === 0) {
    return (
      <div>
        <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Saved Results</h3>
        <p>You have no saved results.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-[#0d171b] text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Saved Results</h3>
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.id} className="p-4 rounded-xl bg-[#e7eff3]">
            <p className="font-bold">{result.recommendedPack} Pack</p>
            <p className="text-sm text-gray-500">
              Saved on: {new Date(result.savedAt).toLocaleDateString()}
            </p>
            <div className="mt-2">
              <p className="font-medium">Product Mix:</p>
              <ul className="list-disc list-inside">
                {Object.entries(result.productMix).map(([product, percentage]) => (
                  <li key={product}>
                    {product}: {percentage}%
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
