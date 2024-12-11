export interface Account {
    id: number; // ID of the account
    username: string; // Username of the account
    email: string; // Email address
    chatID?: string; // Optional chat ID
    branchID: number; // Branch ID
  }
  
  export interface CreateAccount {
    username: string;
    email: string;
    branchID: number;
  }
  
  export interface UpdateAccount {
    password?: string;
    email?: string;
    chatID?: string;
    branchID?: number;
  }
  
  export interface APIResponse<T> {
    status: string; // Status of the response, e.g., "success" or "error"
    message: string; // Optional message for the response
    data: T; // The data returned from the backend
  }
  