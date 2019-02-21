import {
  FETCH_CONTACTS_BEGIN,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  SELECT_CONTACT,
  SEARCH_CONTACTS
} from "../actions/contactActions.js";

const initialState = {
  contacts: [],
  filteredContacts: [],
  selectedContact: null,
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
        contacts: action.payload,
        filteredContacts: action.payload,
        selectedContact: action.payload[0]
      };

    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        contacts: [],
        filteredContacts: []
      };

    case SELECT_CONTACT:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        filteredContacts: action.payload.contacts,
        selectedContact: action.payload.contact,
      };
    case SEARCH_CONTACTS:
      const { searchValue } = action.payload;
      //Search all the fields except 'avtar' as it is irrevelant for search
      let filteredList = state.contacts.filter((contact) => {
        // get all keys of freight
        for (let key in contact) {
          let field = contact[key];
          for (let label in field) {
            if (searchValue.trim() == "" || (label != "avtar" && field[label].toLowerCase().indexOf(searchValue.toLowerCase()) > -1)) {
              return true;
            }
          }
        }
        return false;
      });
      return {
        ...state, loading: false,
        error: action.payload.error,
        filteredContacts: filteredList,
        selectedContact: filteredList[0]
      };

    default:
      return state;
  }
}
