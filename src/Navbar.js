import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export const Navbar = ({title}) => {
  return(
    <View style = {styled.navbar}>
      <Text style = {styled.Text}>{title}</Text>
    </View>
  )
}
const styled = StyleSheet.create({
  navbar:{
    height:70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    backgroundColor:'#3949ab'
  },
  Text:{
    color: 'white',
    fontSize: 20
  }
})
