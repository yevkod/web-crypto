import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarView } from './components/navbar/NavbarView';
import { MainView } from './components/main/MainView';
import { AnonymousView } from './components/anonymous/AnonymousView';
import { HideView } from './components/hide/HideView';
import { HowItWorkView } from './components/howItWork/HowItWorkView';
import { UtilityView } from './components/utility/UtilityView';
import { ComparisonView } from './components/comparison/ComparisonView';
import { OptionView } from './components/option/OptionView';
import { MarketView } from './components/market/MarketView';
import { RoadMapView } from './components/roadmap/RoadMapView';
import { TeamView } from './components/team/TeamView';
import { PartnersView } from './components/partners/PartnersView';
import { BreakView } from './components/break/BreakView';
import { FooterView } from './components/footer/FooterView';
import { BurgerMenuView } from './components/burgerMenu/BurgerMenuView';

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <Router>
      <div className="App">
        {menu && (
          <div className='flex lg:hidden fixed rounded-lg z-[50] top-[60px] right-0 flex-col shadow-md bg-white'>
            <BurgerMenuView />
          </div>
        )}
        <NavbarView menu={menu} setMenu={setMenu} />
        <MainView />
        <AnonymousView />
        <HideView />
        <HowItWorkView />
        <OptionView />
        <UtilityView />
        <ComparisonView />
        <MarketView />
        <RoadMapView />
        <TeamView />
        <PartnersView />
        <BreakView />
        <FooterView />
      </div>
    </Router>
  );
}

export default App;
