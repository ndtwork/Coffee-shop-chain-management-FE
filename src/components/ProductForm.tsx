import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createProduct, updateProduct } from '../services/productService';

const ProductForm: React.FC<{ productId?: number }> = ({ productId }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [productMaterials] = useState<any[]>([]); // Giả sử dữ liệu vật liệu là array
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = { name, description, price, image, productMaterials };

    if (productId) {
      await updateProduct(productId, productData); // Cập nhật sản phẩm
    } else {
      await createProduct(productData); // Thêm sản phẩm mới
    }

    navigate('/admin/product');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Product Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth required />
      <TextField label="Price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} fullWidth required />
      <TextField label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} fullWidth required />
      
      {/* Thêm các input cho productMaterials nếu cần */}
      
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default ProductForm;
