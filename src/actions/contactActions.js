export function fetchContacts() {
  return dispatch => {
    dispatch(fetchContactsBegin());
    fetch("./assets/json/contacts.json")
      .then(function(response) {
        return response.json();
      })
      .then(responseJson => {
        dispatch(fetchContactsSuccess(responseJson));
        return responseJson;
      })
      .catch(error => handleErrors(error));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_CONTACTS_BEGIN = "FETCH_CONTACTS_BEGIN";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE";

export const fetchContactsBegin = () => ({
  type: FETCH_CONTACTS_BEGIN
});

export const fetchContactsSuccess = contacts => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: { contacts }
});

export const fetchContactsFailure = error => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: { error }
});
