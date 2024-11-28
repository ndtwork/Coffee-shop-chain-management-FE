import axios from "axios";
import { LoginResponse } from "../types/auth";

const API_URL = "http://localhost:8080";

export const login = async (formData: { username: string; password: string }): Promise<LoginResponse> => {
  const form = new FormData();
  form.append("username", formData.username);
  form.append("password", formData.password);

  const response = await axios.post(`${API_URL}/login`, form, {
    headers: {
      "Content-Type": "multipart/form-data", // This ensures the API knows we're sending form-data
    },
  });
  return response.data;
};
