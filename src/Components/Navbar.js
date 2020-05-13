import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Theme } from '../Theme'
import { AppTextBold } from './UI/AppTextBold'

export const Navbar = ({title}) => {
  return(
    <View style = {{...styled.navbar, ...Platform.select({
      ios:styled.navbarIos,
      android: styled.navbarAndroid
    }) }}>
      <AppTextBold style = {styled.Text}>{title}</AppTextBold>
    </View>
  )
}
const styled = StyleSheet.create({
  navbar:{
    height:70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor:Theme.MAIN_COLOR
  },
  navbarIos:{
    borderBottomColor: Theme.MAIN_COLOR,
    borderBottomWidth: 1
  },
  Text:{
    color: Platform.OS === 'ios' ?  Theme.MAIN_COLOR :  'white',
    fontSize: 20
  }
})
