import React, { useState } from 'react';
import acImage from '../assets/ac.png';
import heatingImage from '../assets/heating.png';
import ventilationImage from '../assets/ventilation.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Air Conditioner',
    description: 'High efficiency air conditioners for maximum comfort.',
    image: acImage,
    details:
      'Our air conditioners are designed to provide efficient cooling even in the hottest conditions. They feature advanced energy-saving technology and robust performance.',
  },
  {
    id: 2,
    name: 'Heating System',
    description: 'Reliable heating solutions to keep you warm.',
    image: heatingImage,
    details:
      'Our heating systems are built to last, providing consistent warmth and comfort during the coldest months. Engineered for efficiency and durability.',
  },
  {
    id: 3,
    name: 'Ventilation',
    description: 'Advanced ventilation systems ensuring fresh air circulation.',
    image: ventilationImage,
    details:
      'Experience superior air quality with our state-of-the-art ventilation systems. They are designed to remove pollutants and provide optimal airflow throughout your space.',
  },
];

const ProductSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="services" className="mb-5">
      <h2 className="mb-4">Our Products &amp; Services</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm product-card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => setSelectedProduct(product)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="modal fade show d-block modal-fade-in"
          tabIndex={-1}
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProduct.image}
                  className="img-fluid mb-3"
                  alt={selectedProduct.name}
                />
                <p>{selectedProduct.details}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
