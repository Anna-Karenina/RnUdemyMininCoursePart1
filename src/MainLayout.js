import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Navbar } from './Components/Navbar'
import { Theme } from './Theme'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { ScreenContext } from './Context/screen/screenContext'

export const MainLayout = () =>{
  const { todoId } = React.useContext(ScreenContext)
console.log(todoId)
  return(
    <View>
    <Navbar title = 'Todo App!'/>
    <View style={styles.container}>
     {todoId ? <TodoScreen /> : <MainScreen />}
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});

