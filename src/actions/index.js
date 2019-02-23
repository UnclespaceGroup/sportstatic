import * as types from '../constants'
// Импортируем все экспорты с данного файла и называем их как types

// Экшен для добавления новых данных о тренировках в стор
export const AddData = (data) => {
  return dispatch => {
    dispatch({
      type: types.ADD_DATA,
      payload: data
    })
  }
}

export const AddResult = (data) => {
  return dispatch => {
    dispatch({
      type: types.ADD_RESULT,
      payload: data
    })
  }
}


// Экшен просто возвращает dispatch