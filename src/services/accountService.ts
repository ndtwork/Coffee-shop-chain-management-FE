import axios from "axios";
import { APIResponse, Account, CreateAccount, UpdateAccount } from "../types/account";

const BASE_URL = "http://localhost:8080/api/account";

// Fetch all accounts
export const getAllAccounts = async (): Promise<APIResponse<Account[]>> => {
  const response = await axios.get<APIResponse<Account[]>>(`${BASE_URL}/get/all`);
  return response.data;
};

// Fetch account by ID
export const getAccountById = async (id: number): Promise<APIResponse<Account>> => {
  const response = await axios.get<APIResponse<Account>>(`${BASE_URL}/get/${id}`);
  return response.data;
};

// Create a new account
export const createAccount = async (account: CreateAccount): Promise<APIResponse<Account>> => {
  const response = await axios.post<APIResponse<Account>>(`${BASE_URL}/create`, account);
  return response.data;
};

// Update an existing account
export const updateAccount = async (id: number, account: UpdateAccount): Promise<APIResponse<Account>> => {
  const response = await axios.put<APIResponse<Account>>(`${BASE_URL}/update/${id}`, account);
  return response.data;
};

// Delete an account
export const deleteAccount = async (id: number): Promise<APIResponse<Account>> => {
  const response = await axios.delete<APIResponse<Account>>(`${BASE_URL}/delete/${id}`);
  return response.data;
};
