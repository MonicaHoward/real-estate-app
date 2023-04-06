import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AllProperties from './components/AllProperties';
import Home from './components/Home';
import Shop from './components/Shop';
import Property from './components/Property';



function App() {
  return (
    <Router>
      <nav>
        <Link className="router-link" to="/">Home</Link>{' '}
        <Link className="router-link" to="/shop">Shop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="" element={<AllProperties />} />
          <Route path=":id" element={<Property />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
