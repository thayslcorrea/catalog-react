import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container text-center">
        <h1 className="display-4">Catalog</h1>
        <p className="lead">Bem-vindo ao sistema de catálogo virtual</p>
      </div>
    </header>
  );
};

export default Header;