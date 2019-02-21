export function fetchContacts() {
  return dispatch => {
    dispatch(fetchContactsBegin());
    let remoteJSON = "provide any static http path of the same json";
    let localJSON = "./assets/json/contacts.json";
    fetch(localJSON, { mode: 'no-cors' })
      .then(function (response) {
        return response.json();
      })
      .then(responseJson => {
        localJSON
        dispatch(fetchContactsSuccess(responseJson));
        return responseJson;
      })
      .catch(error => handleErrors(error));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.message);
  }
  return response;
}

//Action Types
export const FETCH_CONTACTS_BEGIN = "FETCH_CONTACTS_BEGIN";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE";
export const SELECT_CONTACT = "SELECT_CONTACT";
export const SEARCH_CONTACTS = "SEARCH_CONTACTS";

export const fetchContactsBegin = () => ({
  type: FETCH_CONTACTS_BEGIN
});

export const fetchContactsSuccess = contacts => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts
});

export const fetchContactsFailure = error => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: { error }
});

export const selectContact = (contact, contacts) => ({
  type: SELECT_CONTACT,
  payload: { contact, contacts }
})

export const searchContacts = (searchValue, contacts) => ({
  type: SEARCH_CONTACTS,
  payload: { searchValue, contacts }
})




