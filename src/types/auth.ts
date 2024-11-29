export interface LoginFormData {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    redirectUrl: string;
    role: string;
    username: string;
    status: string;
  }
  