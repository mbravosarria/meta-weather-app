type Action = { type: "SET_CITY"; city: State } | { type: "RESET_CITY" };

export interface State {
  code: string;
}

export const initialState: State = {
  code: "4330236",
};

export function cityReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CITY": {
      return {
        ...state,
        code: action.city.code,
      };
    }
    case "RESET_CITY": {
      return {
        code: "4330236",
      };
    }
    default:
      return state;
  }
}
