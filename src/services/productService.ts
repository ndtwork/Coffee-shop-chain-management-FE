import axios from "axios";
import { Product } from "../types/product";

const API_URL = "http://localhost:8080/api/product";

// Fetch tất cả sản phẩm
export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}/get/all`);
    console.log("API Response:", response.data); // Debug dữ liệu trả về
    return response.data.data; // Trả về trường `data` từ API
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching products:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch products");
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred while fetching products");
    }
  }
};

// Tạo mới sản phẩm
export const createProduct = async (product: Omit<Product, "productID">): Promise<Product> => {
  try {
    const response = await axios.post(`${API_URL}/create`, product);
    console.log("Created Product:", response.data);
    return response.data.data; // Trả về sản phẩm vừa tạo
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error creating product:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to create product");
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred while creating the product");
    }
  }
};

// Xóa sản phẩm theo ID
export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
    console.log("Deleted Product ID:", id);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error deleting product:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to delete product");
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred while deleting the product");
    }
  }
};

// Cập nhật sản phẩm theo ID
export const updateProduct = async (id: number, product: Omit<Product, "productID">): Promise<Product> => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, product);
    console.log("Updated Product:", response.data);
    return response.data.data; // Trả về sản phẩm đã cập nhật
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error updating product:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to update product");
    } else {
      console.error("Unknown error:", error);
      throw new Error("An unknown error occurred while updating the product");
    }
  }
};
