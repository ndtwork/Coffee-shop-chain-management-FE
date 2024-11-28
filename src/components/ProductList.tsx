import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getAllProducts, deleteProduct } from '../services/productService';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        // Chắc chắn rằng bạn đang trích xuất dữ liệu đúng cách từ `response.data.data`
        setProducts(response.data); // response.data là mảng dữ liệu sản phẩm trong JSON
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    setProducts((prevProducts) => prevProducts.filter((product) => product.productID !== id));
  };

  const handleEdit = (id: number) => {
    navigate(`/admin/product/edit/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.productID}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <img src={product.image} alt={product.name} width={50} />
              </TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(product.productID)} color="primary">Edit</Button>
                <Button onClick={() => handleDelete(product.productID)} color="secondary">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
