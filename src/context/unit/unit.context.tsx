import React from "react";
import { State, unitReducer, initialState } from "@/context/unit/unit.reducer";

type Props = {
  children: React.ReactNode;
};

interface UnitProviderState extends State {
  setUnit: (unit: State) => void;
  resetUnit: () => void;
}

export const unitContext = React.createContext<UnitProviderState | undefined>(
  undefined
);

unitContext.displayName = "unitContext";

export const useUnit = () => {
  const context = React.useContext(unitContext);
  if (context === undefined) {
    throw new Error(`useUnit must be used within a unitProvider`);
  }
  return React.useMemo(() => context, [context]);
};

export const UnitProvider: any = (props: any) => {
  const [state, dispatch] = React.useReducer(unitReducer, initialState);

  const setUnit = (unit: State) => {
    dispatch({ type: "SET_UNIT", unit });
  };

  const resetUnit = () => {
    dispatch({ type: "RESET_UNIT" });
  };

  const value = React.useMemo(
    () => ({
      ...state,
      setUnit,
      resetUnit,
    }),
    [state]
  );

  return <unitContext.Provider value={value} {...props} />;
};
