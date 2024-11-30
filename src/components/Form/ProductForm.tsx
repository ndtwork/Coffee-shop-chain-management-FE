import React, { useState, useEffect } from "react";
import { TextField, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createProduct, updateProduct } from "../../services/productService.ts";

const ProductForm: React.FC<{ productId?: number }> = ({ productId }) => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    productMaterials: [],
  });
  const [loading, setLoading] = useState(false); // Trạng thái xử lý
  const [error, setError] = useState<string | null>(null); // Trạng thái lỗi
  const navigate = useNavigate();

  // Xử lý sự thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Bắt đầu xử lý
    setError(null); // Reset lỗi

    try {
      if (productId) {
        // Cập nhật sản phẩm
        await updateProduct(productId, productData);
      } else {
        // Thêm sản phẩm mới
        await createProduct(productData);
      }
      navigate("/admin/product"); // Chuyển hướng về danh sách sản phẩm
    } catch (err: any) {
      setError(err.message || "An error occurred while submitting the form");
    } finally {
      setLoading(false); // Kết thúc xử lý
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        {productId ? "Edit Product" : "Create Product"}
      </Typography>
      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}

      <TextField
        label="Product Name"
        name="name"
        value={productData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={productData.description}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={productData.price}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Image URL"
        name="image"
        value={productData.image}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />

      {/* Thêm input cho `productMaterials` nếu cần */}
      {/* Nếu không cần thì xóa phần này đi */}
      {/* 
      <TextField
        label="Product Materials"
        name="productMaterials"
        value={productData.productMaterials.join(", ")} // Giả sử là một array
        onChange={(e) =>
          setProductData((prev) => ({
            ...prev,
            productMaterials: e.target.value.split(", "),
          }))
        }
        fullWidth
        margin="normal"
      />
      */}

      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Submit"}
      </Button>
    </form>
  );
};

export default ProductForm;
