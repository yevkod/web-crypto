import React from 'react';
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

function App() {
  return (
    <div className="App">
      <NavbarView />
      <MainView />
      <AnonymousView />
      <HideView />
      <HowItWorkView />
      <OptionView />
      <UtilityView />
      <ComparisonView />
      <MarketView />
      <RoadMapView />
    </div>
  );
}

export default App;
