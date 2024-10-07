import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navabar';
import Header from './components/header';
import PlanButtons from './components/buttons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewPlan from './components/CreatePlan';
import ExistingPlan from './components/ExistingPlan';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Header />
      <PlanButtons />
      <Routes>
          <Route path="/existing-plan"  element={<ExistingPlan />} />
          <Route path="/new-plan" element={<NewPlan />} />
        </Routes>
      
    </div>
    </Router>
  );
};

export default App
