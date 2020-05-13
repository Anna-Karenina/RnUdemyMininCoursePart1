import React from 'react'
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import { AppTextBold } from './AppTextBold'
import { Theme } from './../../Theme'

export const AppButton = ({onPress, children, color= Theme.MAIN_COLOR }) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  return(
  <Wrapper
    activeOpacity = {.7}
    onPress = { onPress }
  >
    <View style = { {...styled.default, backgroundColor: color} }>
      <AppTextBold style= { styled.text}>{children}</AppTextBold>
    </View>
  </Wrapper>
  )
}

const styled = StyleSheet.create({
  default: {
    paddingHorizontal:10,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  text:{
    color: 'white'
  }
})