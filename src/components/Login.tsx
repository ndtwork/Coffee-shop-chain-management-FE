import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  // State để lưu thông tin đăng nhập
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  // Xử lý khi form thay đổi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý khi submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Gửi thông tin đến API đăng nhập
      const response = await axios.post(
        "http://localhost:8080/api/auth/login", // Thay bằng endpoint API của bạn
        formData
      );
      console.log(response.data);

      // Giả sử API trả về token JWT
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Lưu token vào localStorage
        navigate("/dashboard"); // Chuyển hướng sau khi đăng nhập thành công
      }
    } catch (error: any) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
