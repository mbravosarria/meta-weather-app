import React from "react";
import { State, cityReducer, initialState } from "@/context/city/city.reducer";

type Props = {
  children: React.ReactNode;
};

interface CityProviderState extends State {
  setCity: (city: State) => void;
  resetCity: () => void;
}

export const cityContext = React.createContext<CityProviderState | undefined>(
  undefined
);

cityContext.displayName = "cityContext";

export const useCity = () => {
  const context = React.useContext(cityContext);
  if (context === undefined) {
    throw new Error(`useCity must be used within a cityProvider`);
  }
  return React.useMemo(() => context, [context]);
};

export const CityProvider: any = (props: any) => {
  const [state, dispatch] = React.useReducer(cityReducer, initialState);

  const setCity = (city: State) => {
    dispatch({ type: "SET_CITY", city });
  };

  const resetCity = () => {
    dispatch({ type: "RESET_CITY" });
  };

  const value = React.useMemo(
    () => ({
      ...state,
      setCity,
      resetCity,
    }),
    [state]
  );

  return <cityContext.Provider value={value} {...props} />;
};
