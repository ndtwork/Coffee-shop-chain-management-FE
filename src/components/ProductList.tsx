import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getAllProducts, deleteProduct } from '../services/productService';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      setProducts(data.data); // Giả sử data trả về có dạng { data: [...] }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/product/edit/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table Title</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(product.id)} color="primary">Edit</Button>
                <Button onClick={() => handleDelete(product.id)} color="secondary">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
