import axios, { AxiosResponse, AxiosError } from 'axios';
import { useState } from 'react';

type ApiResponse<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

const useApi = <T>() => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const makeRequest = async (
    url: string,
    method: 'get' | 'post' | 'put' | 'delete' = 'get',
    payload?: any
  ) => {
    setResponse({ data: null, loading: true, error: null });

    try {
      const result: AxiosResponse<T> = await axios({
        method,
        url,
        data: payload,
      });
      setResponse({ data: result.data, loading: false, error: null });
    } catch (err) {
      const error = err as AxiosError;
      setResponse({
        data: null,
        loading: false,
        error: error.message || 'Erro ao realizar a requisição',
      });
    }
  };

  return { ...response, makeRequest };
};

export default useApi;