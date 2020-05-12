import React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

export const Apptodo = () =>{
  return(
    <View style = {styled.block}>
      <TextInput style = { styled.input }/> 
      <Button title="add"/>
    </View>
  )
}

const styled = StyleSheet.create({
  block:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width: '70%',
    padding:10,
    borderColor: '#3949ab',
    borderStyle: 'solid',
    borderBottomWidth: 2,
  }
})