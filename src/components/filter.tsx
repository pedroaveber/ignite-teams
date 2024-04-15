import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface FilterProps extends TouchableOpacityProps {
  isActive?: boolean
  title: string
}

export function Filter({ isActive = false, title, ...props }: FilterProps) {
  return (
    <TouchableOpacity
      {...props}
      className={`rounded-[4px] h-9 w-16 items-center justify-center ${isActive && 'border border-green-700'}`}
    >
      <Text className="uppercase font-roboto-bold text-sm text-white">
        {title}
      </Text>
    </TouchableOpacity>
  )
}
