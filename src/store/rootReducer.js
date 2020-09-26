import { ACTIONS_TYPES } from './actions';

const initialState = {
  month: '',
  day: '',
  isOpened: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.OPEN_MODAL: {
      const { payload } = action;

      return {
        ...state,
        month: payload.month,
        day: payload.day,
        isOpened: true,
      };
    }

    case ACTIONS_TYPES.CLOSE_MODAL: {
      return {
        ...state,
        month: '',
        day: '',
        isOpened: false,
      };
    }
    default:
      return state;
  }
};
