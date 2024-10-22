import React from 'react';
import { DollarSign, TrendingUp, User } from 'lucide-react';

const AccountOverview: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Account Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-4">
          <User className="text-blue-500" size={24} />
          <div>
            <p className="text-gray-500">Account Name</p>
            <p className="font-semibold">John Doe</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <DollarSign className="text-green-500" size={24} />
          <div>
            <p className="text-gray-500">Available Balance</p>
            <p className="font-semibold">$10,000.00</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <TrendingUp className="text-purple-500" size={24} />
          <div>
            <p className="text-gray-500">Portfolio Value</p>
            <p className="font-semibold">$25,500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;