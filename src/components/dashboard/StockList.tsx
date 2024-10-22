import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.5 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.80, change: -1.2 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 305.15, change: 0.8 },
  { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 3380.50, change: -0.5 },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 725.60, change: 3.2 },
];

const StockList: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Watchlist</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Symbol</th>
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Change</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol} className="border-b">
                <td className="p-2 font-semibold">{stock.symbol}</td>
                <td className="p-2">{stock.name}</td>
                <td className="p-2">${stock.price.toFixed(2)}</td>
                <td className={`p-2 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <div className="flex items-center">
                    {stock.change >= 0 ? (
                      <TrendingUp size={16} className="mr-1" />
                    ) : (
                      <TrendingDown size={16} className="mr-1" />
                    )}
                    {stock.change.toFixed(2)}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;