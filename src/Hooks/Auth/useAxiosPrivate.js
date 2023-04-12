import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { api } from "../../Utils/Api";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { state } = useAuth();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${state?.auth?.token}`;
      }
      return config;
    },(error) => Promise.reject(error));

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error.response.status === 401) {
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return api(prevRequest);
        }
        // if(error.response.status === 403){
        //   navigate("/login")
        // }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [state, refresh]);
  return;
};

export default useAxiosPrivate;
