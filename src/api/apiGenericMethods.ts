import axios from "axios";
import type { AxiosResponse } from "axios"; // Ensure you are importing the type only

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const postRequest = async <T>(
  endpoint: string,
  data: Record<string, any>,
  token: string
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.post(
      `${BASE_URL}${endpoint}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(`Error in POST ${endpoint}:`, error.response || error.message);
    throw error;
  }
};

export const getRequest = async <T>(
  endpoint: string,
  token: string,
  params: Record<string, any> = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(
      `${BASE_URL}${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params,
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(`Error in GET ${endpoint}:`, error.response || error.message);
    throw error;
  }
};

export const putRequest = async <T>(
  endpoint: string,
  token: string
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.put(
      `${BASE_URL}${endpoint}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.error(`Error in PUT ${endpoint}:`, error.response || error.message);
    throw error;
  }
};
