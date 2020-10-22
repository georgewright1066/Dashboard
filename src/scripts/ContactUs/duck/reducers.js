import types from './types';

const contactUs = (state={}, action) => {
  switch(action.type) {
  case types.SEND_CONTACT_FORM_SUCCESS:
    return { ...state, success: action.payload };
  case types.SEND_CONTACT_FORM_ERROR:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default contactUs;
