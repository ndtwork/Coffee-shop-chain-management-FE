import React from 'react';
import ProductList from '../components/ProductList';

const AdminProduct: React.FC = () => {
  return (
    <div>
      <h1>Product Management</h1>
      <ProductList />
    </div>
  );
};

export default AdminProduct;