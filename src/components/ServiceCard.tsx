import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  isAvailable: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, category, isAvailable }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Categoria: {category}</h6>
        <p className="card-text">{description}</p>
        {isAvailable ? (
          <span className="badge bg-success">Disponível</span>
        ) : (
          <span className="badge bg-secondary">Indisponível</span>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;