import { UsersThree } from 'phosphor-react-native'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { green } from 'tailwindcss/colors'

interface GroupCardProps extends Omit<TouchableOpacityProps, 'className'> {
  title: string
}

export function GroupCard({ title, ...props }: GroupCardProps) {
  return (
    <TouchableOpacity
      className="box-border mt-2 px-4 w-full justify-start h-[90px] flex items-center bg-gray-500 rounded-md flex-row"
      {...props}
    >
      <UsersThree size={32} color={green[700]} weight="fill" />

      <Text className="text-base ml-4 text-gray-200 font-roboto-regular">
        {title}
      </Text>
    </TouchableOpacity>
  )
}
