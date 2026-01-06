import React from 'react';
import './App.css';
import NavigationBar from "./components/Nav"
import PageContent from "./components/Main"
import SpecialsSection from './components/Menu';
import SiteFooter from './components/Footer';

const App = () => {
  return (
    <div className="app-wrapper">
      <NavigationBar />
      <PageContent />
      <SpecialsSection />
      <SiteFooter />
    </div>
  );
}

export default App;
