import React,{useEffect} from 'react'
import { View, Modal, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { Theme } from '../Theme'
import { AppButton } from './UI/AppButton'

export const EditModal = ({ onSave, value, onCancel, visible }) => {
  const [title, setTitle ] = React.useState(value)
    const saveHandler = ( ) => {
      if(title.trim().length < 3){
        Alert.alert('Error', `Mininmal title length must be  3 symbols, now ${title.trim().length} symbols`)
      } else {
        onSave(title)
      }
    }
    useEffect(()=>{
      if(title !== value){
        setTitle(value)
      }
    },[onCancel])
  return(
    <Modal 
      visible = { visible }
      animationType = 'slide'
      transparent = { false }
    >
      {console.log(title)}
      {console.log(value)}
      <View style = {styled.wrap}>
        <TextInput 
          value = { title }
          onChangeText= { setTitle } 
          placeholder = 'new Title'
          maxLength = { 64 }
          autoCapitalize = 'none'
          style = {styled.input}/>
        <View style = { styled.buttonblock}>
        <AppButton 
          title=""
          color = {Theme.DANGER_COLOR}
          onPress = {onCancel}
        >Cancel</AppButton> 
        <AppButton 
          onPress = {saveHandler}>Save</AppButton>
        </View>
      </View>
    </Modal>
  )
}
const styled = StyleSheet.create({
  wrap:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    padding:10,
    borderBottomColor: Theme.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%'
  },
  buttonblock: {
    width: '100%',
    marginTop:10,
    flexDirection: "row",
    justifyContent: 'space-around'
  }
})
