import { api } from "../../api";

export const handleLogin = async(values, dispatch, navigate) => {
  const {data} = await api.post('/auth', values);
  if (data) {
    localStorage.setItem('token', data);
    api.defaults.headers.common['Authorization'] = data;
    
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
      loading: false
    }
    dispatch(logado);
    //navigate('/pessoa')
    window.location.href = '/pessoa'
  } else {
    alert('Erro no Login');
  }
}

export const handleLogout = async(dispatch, navigate) => {
  localStorage.removeItem('token');
  api.defaults.headers.common['Authorization'] = '';
  //navigate('/')

  const deslogado = {
    type: 'SET_LOGOUT',
    auth: false,
    loading: false,
    token: null
  }
  dispatch(deslogado);
  //navigate('/login')
  window.location.href = '/login'
}