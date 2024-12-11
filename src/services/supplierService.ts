export interface Supplier {
    id: number; // Unique ID of the supplier
    name: string; // Name of the supplier
    phone: string; // Phone number of the supplier
    address: string; // Address of the supplier
  }
  
  export interface CreateSupplier {
    name: string;
    phone: string;
    address: string;
  }
  
  export interface UpdateSupplier {
    name?: string; // Optional fields for updating
    phone?: string;
    address?: string;
  }
  
  export interface APIResponse<T> {
    status: string; // "success" or "error"
    message: string; // Response message
    data: T; // Generic data returned by the backend
  }
  