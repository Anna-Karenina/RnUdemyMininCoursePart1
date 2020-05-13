import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from './UI/AppText'

export const Todo = ( { todo, onRemove, onOpen} ) =>{
  return(
    <TouchableOpacity
      activeOpacity = { .5 }
      onPress = { ()=> onOpen(todo.id)}
      onLongPress = {  onRemove.bind(null, todo.id)}
    >
      <View style={styled.todo}>
        <AppText style = { styled.title}>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  )
}
const styled = StyleSheet.create({
  todo:{
    flexDirection:'row',
    alignItems: 'center',
    padding:15,
    borderWidth:1,
    borderColor: '#eee',
    borderRadius:5,
    marginBottom: 10
  },
  title:{
    fontFamily: 'roboto-bold'
  }
})