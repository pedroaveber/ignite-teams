import { Text, View } from 'react-native'

interface HighlightProps {
  title: string
  subtitlte: string
}

export function Highlight({ title, subtitlte }: HighlightProps) {
  return (
    <View className="w-full my-8">
      <Text className="text-center text-xl font-roboto-bold text-white">
        {title}
      </Text>

      <Text className="text-center text-base font-roboto-regular text-gray-300">
        {subtitlte}
      </Text>
    </View>
  )
}
