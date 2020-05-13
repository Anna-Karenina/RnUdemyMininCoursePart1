import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Navbar } from './Components/Navbar'
import { Theme } from './Theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { TodoContext } from './Context/todo/todoContext'

export const MainLayout = () =>{
  const { todos, addTodo, removeTodo, updateTodo} = React.useContext(TodoContext)
  const [todoId, setTodoId] = React.useState(null)

  // const addTodo = (title) =>{
  //   setTodos(prev => [
  //     { id:Date.now().toString(), title: title}, ...prev
  //   ])
  // }
  
  // const updateTodo = (id, title) =>{
  //   setTodos(prev => prev.map(todo =>{
  //     if(todo.id === id ){
  //       todo.title = title
  //     }
  //     return todo
  //   }))
  // }

  // const removeTodo = id =>{
  //   const todo = todos.find(todo => todo.id === id)
  //   Alert.alert(
  //     'Удаление элемента',
  //     `Вы уверены, что хотите удалить ${todo.title}?`,
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'remove',
  //         style: 'destructive',
  //         onPress: () => { 
  //           setTodoId( null )
  //           setTodos(prev => prev.filter(todo => todo.id !== id ))
  //         },
  //       },
  //     ],{ cancelable: false }
  //   )
  // }
  
  let content = (
    <MainScreen
      openTodo = { setTodoId }
      todos = { todos }
      addTodo = { addTodo }
      removeTodo = { removeTodo }
    />
  )
  if(todoId){
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content =  <TodoScreen
      todo = { selectedTodo }
      onSave = { updateTodo }
      goBack = { ()=>  setTodoId(null)}
      onRemove = { removeTodo }/>
  }

  return(
    <View>
    <Navbar title = 'Todo App!'/>
    <View style={styles.container}>
      {content}
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});