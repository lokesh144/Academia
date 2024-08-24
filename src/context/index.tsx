
'use client'
import React,{ReactNode,useState} from "react";
import type { AppProps } from 'next/app';
import PropTypes from "prop-types";

// export const MaterialTailwind = React.createContext<MaterialTailwindContextType | null>(null);
export const MaterialTailwind = React.createContext<MaterialTailwindContextType | null>(null);
MaterialTailwind.displayName = "MaterialTailwindContext";
interface MaterialTailwindContextType {
  // Define your context value types here
   // Replace 'any' with actual type
  //  const value = React.useMemo(
  //   () => [controller, dispatch],
  //   [controller, dispatch]
  // );
}
export function reducer(state:any, action:any) {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
interface MaterialTailwindProviderProps{
  children:ReactNode;
  value: MaterialTailwindContextType;
}
export function MaterialTailwindProvider({children}:MaterialTailwindProviderProps) {
  // export function MaterialTailwindProvider: <MaterialTailwindProviderProps> : ({ children }) => {
    // console.log(props);
  const initialState:MaterialTailwindContextType  = {
    openSidenav: false,
    sidenavColor: "dark",
    sidenavType: "white",
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
  };

  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <MaterialTailwind.Provider value={value}>
      {children}
   </MaterialTailwind.Provider> 
  );
}
export function useMaterialTailwindController() {
  const context = React.useContext(MaterialTailwind);

  if (!context) {
    throw new Error("useMaterialTailwindController should inside the MaterialTailwindProvider.");
  }

  return context;
}

// MaterialTailwindProvider.displayName = "/src/context/index.jsx";
MaterialTailwindProvider.displayName = "MaterialTailwindProvider";


MaterialTailwindProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // value: PropTypes.node.isRequired,
};

export const setOpenSidenav = (dispatch:any, value:any) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (dispatch:any, value:any) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (dispatch:any, value:any) =>
  dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch:any, value:any) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch:any, value:any) =>
  dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (dispatch:any, value:any) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });

export default MaterialTailwindProvider; 