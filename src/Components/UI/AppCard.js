import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AppCard = (props) => (
  <View style = { {...styled.default, ...props.style} }>
    {props.children}
  </View>
)

const styled = StyleSheet.create({
  default: {
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: .3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
  }
})