import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import ScrollBackButton from './elements/ScrollBackButton';

function App() {
  return (
    <div className="font-sans text-xs md:text-sm text-burnt-sienna">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="500" element={<ServerError />} />   */}
          <Route exact path="terms" element={<Terms />} />
          <Route exact path="privacy" element={<Privacy />} />
          {/* <Route exact path='/login' element={authenticated ? <Navigate to="/app/dashboard" />  : login} /> */}
          {/* <Route exact path='/register' element={<Register />} /> */}
        </Routes>

        <ScrollBackButton />
      </Router>
    </div>
  );
}

export default App;
