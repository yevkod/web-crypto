import React, { useState } from 'react';
import './App.css';
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
    <div className="App overflow-hidden">
      {menu && (
        <div className='flex lg:hidden fixed rounded-lg z-[50] top-[60px] right-0 flex-col shadow-md bg-white'>
          <BurgerMenuView setMenu={setMenu} />
        </div>
      )}
      <NavbarView menu={menu} setMenu={setMenu} />
      <div id="mainView"><MainView /></div>
      <div id="anonymousView"><AnonymousView /></div>
      <div id="hideView"><HideView /></div>
      <div id="howItWorkView"><HowItWorkView /></div>
      <div id="optionView"><OptionView /></div>
      <div id="utilityView"><UtilityView /></div>
      <div id="comparisonView"><ComparisonView /></div>
      <div id="marketView"><MarketView /></div>
      <div id="roadMapView"><RoadMapView /></div>
      <div id="teamView"><TeamView /></div>
      <div id="partnersView"><PartnersView /></div>
      <div id="breakView"><BreakView /></div>
      <div id="footerView"><FooterView /></div>
    </div>
  );
}

export default App;
