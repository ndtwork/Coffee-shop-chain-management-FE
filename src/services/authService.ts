// authService.ts
import axios from "axios";
import { LoginFormData, LoginResponse } from "../types/auth";  // Import interface

const API_URL = "http://localhost:8080";

export const login = async (formData: LoginFormData): Promise<LoginResponse> => {
  const form = new FormData();
  form.append("username", formData.username);
  form.append("password", formData.password);

  try {
    // Không cần chỉ định "Content-Type" khi dùng FormData
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, form);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;  // Đảm bảo trả về lỗi nếu có
  }
};
