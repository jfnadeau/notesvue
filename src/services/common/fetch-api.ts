export interface ApiErrorResponse {
  message: string;
}

export class ApiError extends Error {}

export const fetchApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const res = await fetch(`/api/${endpoint}`);
    if (!res.ok) {
      const json = await res.json<ApiErrorResponse>();
      throw new ApiError(json.message);
    } else {
      const json = res.json<T>();
      return json;
    }
  } catch (ex) {
    if (ex instanceof TypeError) {
      throw new ApiError(ex.message);
    } else {
      throw ex;
    }
  }
};
