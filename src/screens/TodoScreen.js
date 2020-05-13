import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Theme } from '../Theme'
import { AntDesign, FontAwesome} from '@expo/vector-icons'
import { AppCard } from '../Components/UI/AppCard'
import { AppTextBold } from '../Components/UI/AppTextBold'
import { EditModal } from '../Components/EditModal'
import { AppButton } from '../Components/UI/AppButton'

export const TodoScreen = ({onSave, goBack, todo, onRemove}) =>{
  const [modal, setModal] = React.useState(false)

  const saveHandler = ( title ) =>{
    onSave(todo.id, title)
    setModal(false)
  }
  const cancelHendler = () =>{
    setModal(false)
  }
  
  return(
    <View>
      <EditModal 
        value = { todo.title }
        visible = { modal } 
        onCancel = { cancelHendler }
        onSave = { saveHandler }
      />
      <AppCard style = {styled.card}>
        <AppTextBold style = { styled.titleText}>{todo.title}</AppTextBold>
        <AppButton 
          onPress = { () => setModal(true) }>
            <FontAwesome name = 'edit' size={20}/>
          </AppButton>
      </AppCard>
      <View style = { styled.buttonsBlock}>
        <View style = { styled.buttonWrapper}>
          <AppButton 
          color= { Theme.GREY_COLOR }
          onPress = {goBack.bind()}
          >
            <AntDesign name = 'back' size={20} />
          </AppButton>
        </View>
        <View style = { styled.buttonWrapper}>
          <AppButton 
            color = { Theme.DANGER_COLOR }
            onPress = { onRemove.bind(null , todo.id)}>
              <FontAwesome name ="remove" size ={20} color = '#fff'/>
            </AppButton>
        </View>
      </View>
    </View>
  )
}
const styled = StyleSheet.create({
  buttonsBlock:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  buttonWrapper:{
    width: Dimensions.get('window').width /3
  },
  titleText: {
    fontSize: 20
  },
  card:{
    marginBottom:20
  }
})