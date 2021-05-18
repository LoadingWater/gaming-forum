import { SET_USER_ID } from "./types";

const handlers = {
  [SET_USER_ID]: (state, {userId}) => ({
    ...state,
    userId
  }),
  DEFAULT: (state) => state,
};

export const serviceReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
