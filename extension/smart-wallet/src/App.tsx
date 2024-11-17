import { createContext, useState } from 'react';
import { Home, SendHorizontal, PieChart, Activity, Database } from 'lucide-react';
import HomeScreen from './screens/home/home';
import { IconLabel } from './types/userData';
import SendScreen from './screens/send/sendscreen';
import PortfolioScreen from './screens/portfolio/portfolioscreen';
import DefiScreen from './screens/defi/defiscreen';
import ActivityScreen from './screens/activity/activityscreen';
import NavBar from './components/navbar/navbar';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import LoginPage from './screens/login/loginScreen';
import { MultiChainBalanceFetcher } from './utils/ethereumConnector';
import { AppContextType } from './types/appContext';
import { PythPriceService } from './utils/priceFeed';

export const AppContext = createContext<AppContextType>({
  BalanceFetcher: new MultiChainBalanceFetcher(),
  PriceFetcher: new PythPriceService()
});

const DashboardUI = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { user } = useDynamicContext();

  const iconLabelMapping: Array<IconLabel> = [
    {label: "home", icon: Home},
    {label: "send", icon: SendHorizontal},
    {label: "defi", icon: Database},
    {label: "activity", icon: Activity},
  ]

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <HomeScreen/>
      case 'send':
        return <SendScreen/>
      case 'portfolio':
        return <PortfolioScreen/>
      case 'activity':
        return <ActivityScreen/>;
      case 'defi':
        return <DefiScreen/>;
    }
  };

  const HomePage = () => {
    return <div className="h-128 w-256 flex flex-col bg-gray-50 justify-around">
        <div className="max-w-6xl mx-auto py-100 w-full p-4 overflow-scroll min-h-[512px] max-h-[512px] ">
          {renderContent()}
        </div>
        <NavBar iconLabelMapping={iconLabelMapping} setActiveTab={setActiveTab} activeTab={activeTab}/>
      </div>
  }

  return (
    <AppContext.Provider value={{
      BalanceFetcher: new MultiChainBalanceFetcher(),
      PriceFetcher: new PythPriceService(),
    }}>
      {!!user ? <HomePage/> : <LoginPage/>}
    </AppContext.Provider>
  );
};

export default DashboardUI;