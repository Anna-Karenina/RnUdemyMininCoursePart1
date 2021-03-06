import React, { useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './../types'
import { ScreenContext } from '../screen/screenContext'
import { Alert } from 'react-native'

export const TodoState = ( {children} ) =>{
  const initialState = { 
    todos: [
      {id : '1', title: 'DO smth'}
    ]
  }
  const {changeScreen} = React.useContext(ScreenContext)

  const [state, dispatch] = useReducer(todoReducer, initialState)
  const addTodo = title => dispatch({type: ADD_TODO, title}) 
  const removeTodo = id =>{
    const todo = state.todos.find(t=>t.id === id)
      Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            changeScreen(null)
            dispatch({type: REMOVE_TODO, id})
          }
        }
      ],
      { cancelable: false }
    )
  }
  const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})
  return(
    <TodoContext.Provider
      value = {{
        todos: state.todos,
        addTodo, removeTodo, updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
    )
}