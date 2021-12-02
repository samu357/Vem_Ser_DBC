const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1, tittle: 'Iniciando com React', lessons: [
        { id: 1, title: 'Primeira Aula' },
        { id: 2, title: 'Segunda Aula' }
      ]
    },

    {
      id: 2, tittle: 'Iniciando com Redux', lessons: [
        { id: 3, title: 'Terceira Aula' },
        { id: 4, title: 'Quarta Aula' }

      ]
    }

  ]
}




const videoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_LESSON') {

    return ({
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    }
    )
  }
  return (
    state
  )
}

export default videoReducer;