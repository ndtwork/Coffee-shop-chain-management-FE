// Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";  // Đảm bảo bạn đang import đúng

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>(""); // Quản lý giá trị input username
  const [password, setPassword] = useState<string>(""); // Quản lý giá trị input password
  const [error, setError] = useState<string | null>(null); // Quản lý thông báo lỗi
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn form reload trang
    setError(null); // Reset lỗi

    try {
      const response = await login({ username, password });
      if (response.status === "success") {
        navigate(response.redirectUrl); // Chuyển hướng sau khi đăng nhập thành công
      } else {
        setError("Login failed. Please check your credentials.");
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // Đảm bảo rằng khi xảy ra lỗi, bạn có thể truy cập được message hoặc dữ liệu lỗi
      console.error("Error during login:", err.response?.data || err.message);
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
