import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { getAllProducts, deleteProduct } from "../services/productService";

interface ProductListProps {
  onEdit: (id: number) => void;
  onView: (id: number) => void;
  onOpenForm: (open: boolean) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onEdit, onView, onOpenForm }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((product) => product.productID !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search item"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.productID}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <img src={product.image} alt={product.name} width="50" />
                </TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => onView(product.productID)}>
                    View
                  </Button>
                  <Button color="primary" onClick={() => onEdit(product.productID)}>
                    Edit
                  </Button>
                  <Button color="secondary" onClick={() => handleDelete(product.productID)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
