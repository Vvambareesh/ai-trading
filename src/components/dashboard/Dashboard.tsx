import React from 'react';
import AccountOverview from './AccountOverview';
import BalanceDisplay from './BalanceDisplay';
import StockList from './StockList';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Trading Dashboard</h1>
      <AccountOverview />
      <BalanceDisplay />
      <StockList />
    </div>
  );
};

export default Dashboard;