

const INITIAL_STATE = { 
  auth: {
    token: '',
    auth: false,
    loader: true
  }
}

function authReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LOGIN') {
    return {
      auth: {
        token: action.token,
        auth: action.auth,
        loader: action.loader
      }
    }
  }
  if (action.type === 'SET_LOGOUT') {
    return{
      auth: {
        token: action.token,
        auth: action.auth,
        loader: action.loader
      }
    }
  }
  return state;
}

export default authReducer;