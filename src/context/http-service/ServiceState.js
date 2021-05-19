import React, { useReducer } from "react";
import { serviceReducer } from "./serviceReducer";
import { ServiceContext } from "./serviceContext";
import { makeHttpService } from "../../service/httpService";
import { makeAuthService } from "../../service/authService";
import { SET_USER_ID } from "./types";

export const ServiceState = ({ children }) => {
  const httpService = makeHttpService();
  const initialState = {
    httpService,
    authService: makeAuthService({httpService}),
    userId: ""
  };
  const [state, dispatch] = useReducer(serviceReducer, initialState);
  
  const setUserId = (userId) => {
    dispatch({ type: SET_USER_ID, userId });
  };

  return (
    <ServiceContext.Provider value={{authService: state.authService, setUserId}}>
      {children}
    </ServiceContext.Provider>
  );
};
