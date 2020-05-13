import React from 'react'
import { View, StyleSheet, TextInput, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Theme } from '../Theme'

export const Apptodo = ({ onSubmit }) =>{
  const [value, setValue] = React.useState('')
  const pressHendler = () =>{
    if(value.trim()){
      onSubmit(value)
      setValue('')  
      Keyboard.dismiss()  
    } else{
  console.log('errr')
    }

  }

  return(
    <View style = {styled.block}>
      <TextInput
        returnKeyType = 'done'
        autoCorrect = { false } 
        autoCapitalize = 'none'
        style = { styled.input }
        onChangeText = { setValue }
        value={value}
        placeholder='Add new Todo'/> 
      <AntDesign.Button 
        name = 'pluscircleo'
        onPress = { pressHendler}>
        add
      </AntDesign.Button>
    </View>
  )
}

const styled = StyleSheet.create({
  block:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input:{
    width: '70%',
    padding:10,
    borderColor: Theme.MAIN_COLOR,
    borderStyle: 'solid',
    borderBottomWidth: 2,
  }
})