const types = {
  SETTEMPERATURE: "SETTEMPERATURE",
  SETCURRENT: "SETCURRENT",
  SETPROGRAM: "SETPROGRAM",
};

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SETTEMPERATURE: {
      return {
        ...state,
        temperature: action.payload.value,
      };
    }
    case types.SETCURRENT: {
      return {
        ...state,
        current: action.payload.value,
      };
    }
    case types.SETPROGRAM: {
      return {
        ...state,
        program: action.payload.value,
      };
    }
    default:
      return state;
  }
};

export const setTemperature = (value) => {
  return {
    type: types.SETTEMPERATURE,
    payload: {
      value,
    },
  };
};
export const setCurrent = (value) => {
  return {
    type: types.SETCURRENT,
    payload: {
      value,
    },
  };
};
export const setProgram = (value) => {
  return {
    type: types.SETPROGRAM,
    payload: {
      value,
    },
  };
};
export { types };
