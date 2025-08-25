export const useApi = async <T = any,>(
  url: string,
  {
    method = "GET",
    body,
    token,
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    token?: string;
  } = {}
) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const { data, error, pending } = await useFetch<T>(url, {
    method,
    body,
    headers,
  });

  return { data, error, pending };
};
