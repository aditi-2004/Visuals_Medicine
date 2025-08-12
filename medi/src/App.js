import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
import MedicineDetail from './components/MedicineDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <img src="/images/logo.jpg" alt="HyCure" />
          <h1>HyCure</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/medicine/:id" element={<MedicineDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
