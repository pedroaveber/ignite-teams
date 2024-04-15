import { MaterialIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { gray } from 'tailwindcss/colors'

import { ButtonIcon } from './button-icon'

interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <View className="w-full rounded-md box-border px-4 h-[56px] bg-gray-500 flex-row items-center mb-4">
      <MaterialIcons name="person" size={24} color={gray[200]} />

      <Text className="ml-2 text-base flex-1 text-gray-200 font-roboto-regular">
        {name}
      </Text>

      <ButtonIcon onPress={onRemove} icon="close" variant="secondary" />
    </View>
  )
}
