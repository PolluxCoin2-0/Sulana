import axios, { AxiosResponse } from "axios";

/**
 * Base URL fetched from environment variables. Assumes the environment variable
 * is stored in `.env.development` and starts with `NEXT_PUBLIC_`.
 */
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

/**
 * Generic POST request handler with token authentication.
 * @param endpoint - The API endpoint to call (without base URL).
 * @param data - Data to send in the POST request.
 * @param token - The authentication token to be included in headers.
 * @returns A promise resolving to the response data.
 */
export const postRequest = async <T>(
  endpoint: string,
  data: Record<string, any>,
  token: string
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.post(`${BASE_URL}${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        "Content-Type": "application/json", // Optional: Set content type to JSON
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(`Error in POST ${endpoint}:`, error.response || error.message);
    throw error;
  }
};

/**
 * Generic GET request handler with token authentication.
 * @param endpoint - The API endpoint to call (without base URL).
 * @param token - The authorization token to send in the headers.
 * @param params - Query parameters to send in the GET request.
 * @returns A promise resolving to the response data.
 */
export const getRequest = async <T>(
  endpoint: string,
  token: string,
  params: Record<string, any> = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params, // Add query parameters here
    });
    return response.data;
  } catch (error: any) {
    console.error(`Error in GET ${endpoint}:`, error.response || error.message);
    throw error;
  }
};

/**
 * Generic PUT request handler.
 * @param endpoint - The API endpoint to call (without base URL).
 * @param token - The authorization token to send in the headers.
 * @returns A promise resolving to the response data.
 */
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
