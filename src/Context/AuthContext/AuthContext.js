import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          auth: action.payload,
          isAuthenticate: true,
        };
      case "features":
        return {
          ...state,
          features: action.payload,
        };
      case "logout":
        return {
          ...state,
          auth: {},
        };
      default:
        return state;
    }
  };
  const initialState = {
    auth: {},
    features: {},
    isAuthenticate: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
