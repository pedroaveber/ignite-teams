import { ActivityIndicator, View } from 'react-native'
import { green } from 'tailwindcss/colors'

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-600">
      <ActivityIndicator color={green[700]} size={32} />
    </View>
  )
}
