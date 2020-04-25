const types = {
  ADDUSER: "ADDUSER",
  SETUSERS: "SETUSERS",
  SETNAME: "SETNAME",
};

const defaultState = {
  name: "", //current user name
  users: [], //all users
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SETUSERS: {
      return {
        ...state,
        users: action.payload.value,
      };
    }
    case types.ADDUSER: {
      let users = [...state.users];
      if (!users.includes(action.payload.value)) {
        users.push(action.payload.value);
      }
      return {
        ...state,
        users,
      };
    }
    case types.SETNAME: {
      if (!state.users.includes(action.payload.value)) {
        return {
          ...state,
          name: action.payload.value,
        };
      }
    }
    default:
      return state;
  }
};

export const setUsers = (value) => {
  return {
    type: types.SETUSERS,
    payload: {
      value,
    },
  };
};
export const addUser = (value) => {
  return {
    type: types.ADDUSER,
    payload: {
      value,
    },
  };
};
export const setName = (value) => {
  return {
    type: types.SETNAME,
    payload: {
      value,
    },
  };
};
export { types };
