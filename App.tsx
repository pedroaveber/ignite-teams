/* eslint-disable  camelcase */

import { Loading } from '@components/loading'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Routes } from '@routes/index'
import { StatusBar } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return fontsLoaded ? (
    <>
      <StatusBar translucent barStyle="light-content" />
      <Routes />
    </>
  ) : (
    <Loading />
  )
}
