import { api } from "../../Utils/Api";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const useRefreshToken = () => {
  const { dispatch } = useAuth();

  const refresh = async () => {
    try{
      const response = await api.get("auth/refreshtoken", {
        withCredentials: true,
      });
      dispatch({ type: "login", payload: response.data });
      return response.token;
    }catch(err){
      console.log(err,"useRefreshToken")
      return ""
    }
  };

  return refresh;
};

export default useRefreshToken;
