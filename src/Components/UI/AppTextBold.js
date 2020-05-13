import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const AppTextBold = (props) => (
  <Text style = { {...styled.default, ...props.style} }>
    {props.children}
  </Text>
)

const styled = StyleSheet.create({
  default: {
    fontFamily:'roboto-bold'
  }
})