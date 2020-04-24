const types = {
  TRIGGERATTACK: "TRIGGERATTACK",
  TRIGGERRELEASE: "TRIGGERRELEASE",
};
const instruments = {
  JUNO: "JUNO",
  RHODES: "RHODES",
};

const defaultState = {
  instruments: {
    JUNO: { note: null, velocity: 0 },
    RHODES: { note: null, velocity: 0 },
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.TRIGGERATTACK: {
      let newState = { ...state };
      newState.instruments[action.payload.instrument].note =
        action.payload.note;
      newState.instruments[action.payload.instrument].velocity =
        action.payload.velocity;
      return newState;
    }
    case types.TRIGGERRELEASE: {
      let newState = { ...state };
      newState.instruments[action.payload.instrument].note = null;
      newState.instruments[action.payload.instrument].velocity = 0;
      return { ...newState };
    }
    default:
      return state;
  }
};

export const triggerAttack = (instrument, note, velocity) => {
  return {
    type: types.TRIGGERATTACK,
    payload: {
      instrument,
      note,
      velocity,
    },
  };
};
export const triggerRelease = (instrument) => {
  return {
    type: types.TRIGGERRELEASE,
    payload: {
      instrument,
    },
  };
};
export { types, instruments };
