import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
import { Apptodo } from '../Components/Apptodo'
import { Todo } from './../Components/Todo'
import { Theme } from '../Theme'
import { TodoContext } from '../Context/todo/todoContext'
import { ScreenContext } from '../Context/screen/screenContext'

export const MainScreen = () =>{
  const {addTodo, todos, removeTodo } = React.useContext(TodoContext)
  const {changeScreen} = React.useContext(ScreenContext)
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - Theme.PADDING_HORIZONTAL *2)

  React.useEffect(()=>{
    const update = () =>{
      const newWidth = Dimensions.get('window').width - Theme.PADDING_HORIZONTAL *2
      setDeviceWidth(newWidth)

    }
    Dimensions.addEventListener('change', update)
    return ()=> Dimensions.removeEventListener('change', update)
  })

  let content = (
  <View style={{width: deviceWidth}}>
    <FlatList
    data={todos}
    renderItem= { 
      ({item}) => (
        <Todo
          onOpen = { changeScreen }
          todo = {item}  
          onRemove = { removeTodo } 
        />) 
    }
    keyExtractor = {item => item.id.toString()}
    />  
    </View>
  )
  if(todos.length === 0){
    content = (
    <View style = {styled.imageWrap}>
      <Image
        resizeMode = 'contain'
        style = { styled.image }
        source = {require('./../../assets/noimage.png')}
      />
    </View>
  )}
  return(
    <View>
      <Apptodo onSubmit = { addTodo }/>
      { content }
    </View>
  )
}
const styled = StyleSheet.create({
  imageWrap:{
    alignItems:'center',
    justifyContent: 'center',
    padding:10,
    height: 300
  },
  image:{
    width:'100%',
    height:'100%',
  }
})