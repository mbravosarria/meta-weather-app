type Action = { type: "SET_UNIT"; unit: State } | { type: "RESET_UNIT" };

export interface State {
  unit: string;
}

export const initialState: State = {
  unit: "",
};

export function unitReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_UNIT": {
      return {
        ...state,
        unit: action.unit.unit,
      };
    }
    case "RESET_UNIT": {
      return {
        unit: "",
      };
    }
    default:
      return state;
  }
}
