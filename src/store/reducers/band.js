const types = {
  TRIGGERATTACK: "TRIGGERATTACK",
  TRIGGERRELEASE: "TRIGGERRELEASE",
  SETUSER: "SETUSER",
};
const instruments = {
  JUNO: "JUNO",
  RHODES: "RHODES",
  MPC: "MPC",
};

const defaultState = {
  instruments: {
    JUNO: { user: "", note: null, velocity: 0 },
    RHODES: { user: "", note: null, velocity: 0 },
    MPC: { user: "", note: null, velocity: 0 },
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
      return { ...newState };
    }
    case types.TRIGGERRELEASE: {
      let newState = { ...state };
      newState.instruments[action.payload.instrument].note = null;
      newState.instruments[action.payload.instrument].velocity = 0;
      return { ...newState };
    }
    case types.SETUSER: {
      let newState = { ...state };
      Object.keys(newState.instruments).forEach((key) => {
        if (newState.instruments[key].user === action.payload.user) {
          newState.instruments[key].user = "";
        }
      });
      if (action.payload.instrument !== "NONE") {
        newState.instruments[action.payload.instrument].user =
          action.payload.user;
      }

      return { ...newState };
    }
    default:
      return state;
  }
};

export const getChoosenInstrument = (user) => {
  return (state) => {
    let instrument = "NONE";
    Object.keys(state.band.instruments).forEach((key) => {
      if (state.band.instruments[key].user === user) {
        instrument = key;
      }
    });
    return instrument;
  };
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
export const setUser = (instrument, user) => {
  return {
    type: types.SETUSER,
    payload: {
      instrument,
      user,
    },
  };
};
export { types, instruments };
