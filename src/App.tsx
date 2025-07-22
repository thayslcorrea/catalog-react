import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceCard from './components/ServiceCard';

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Catálogo de Serviços - Catalog</h1>
      <ServiceCard
        title="Academia Boa Forma"
        description="Espaço completo para musculação e atividades físicas com profissionais qualificados."
        category="Academia"
        isAvailable={true}
      />
      <ServiceCard
        title="Padaria Pão Quente"
        description="Pães, doces e lanches fresquinhos todos os dias no centro da cidade."
        category="Padaria"
        isAvailable={false}
      />
      <ServiceCard
        title="Auto Peças do Zé"
        description="Peças automotivas nacionais e importadas com garantia."
        category="Auto Peças"
        isAvailable={true}
      />
    </div>
  );
};

export default App;