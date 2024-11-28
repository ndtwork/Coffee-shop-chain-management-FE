import axios from 'axios';

const API_URL = 'http://localhost:8080/api/product';

interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  image: string;
 // productMaterials: Array<any>; // Giả sử các vật liệu sản phẩm có thể là bất kỳ
}

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/get/all`);
  return response.data;
};

export const createProduct = async (productDTO: CreateProductDTO) => {
  const response = await axios.post(`${API_URL}/create`, productDTO);
  return response.data;
};

export const deleteProduct = async (id: number) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};

export const updateProduct = async (id: number, productDTO: CreateProductDTO) => {
  const response = await axios.put(`${API_URL}/update/${id}`, productDTO);
  return response.data;
};
