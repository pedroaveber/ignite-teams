import { TextInput, TextInputProps } from 'react-native'
import { gray } from 'tailwindcss/colors'

export function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      placeholderTextColor={gray[300]}
      className="flex-1 self-center text-base max-h-[56px] w-full min-h-[56px] font-roboto-regular bg-gray-700 text-white rounded-md pb-2 px-6 box-border"
    />
  )
}
