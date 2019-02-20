import {
  FETCH_CONTACTS_BEGIN,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE
} from "../actions/contactActions.js";

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function userReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_CONTACTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: []
      };

    default:
      return state;
  }
}
