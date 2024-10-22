import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const BalanceDisplay: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Balance Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500">Total Balance</p>
          <p className="text-3xl font-bold">$35,500.00</p>
          <div className="flex items-center mt-2">
            <ArrowUpRight className="text-green-500 mr-1" size={20} />
            <span className="text-green-500">+5.2% from last week</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500">Profit/Loss</p>
          <p className="text-3xl font-bold text-green-500">+$1,500.00</p>
          <div className="flex items-center mt-2">
            <ArrowUpRight className="text-green-500 mr-1" size={20} />
            <span className="text-green-500">+3.8% today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceDisplay;