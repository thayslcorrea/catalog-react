import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import ServiceCard from './components/ServiceCard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container text-center">
        <div className="row">
          <ServiceCard title="Restaurante" description="Cataguases - MG" category="food" isAvailable={true} />
          <ServiceCard title="Padaria" description="Cataguases - MG" category="food" isAvailable={true} />
          <ServiceCard title="Açougue" description="Cataguases - MG" category="food" isAvailable={false} />
          <ServiceCard title="Mercado" description="Cataguases - MG" category="food" isAvailable={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
