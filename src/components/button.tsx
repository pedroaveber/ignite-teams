import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends Omit<TouchableOpacityProps, 'className'> {
  variant?: 'primary' | 'secondary'
  text: string
}

export function Button({ variant = 'primary', text, ...props }: ButtonProps) {
  const buttonVariants = {
    primary: 'bg-green-700',
    secondary: 'bg-red-700',
  }

  return (
    <TouchableOpacity
      {...props}
      className={`flex-1 w-full max-h-[56px] min-h-[56px] box-border ${buttonVariants[variant]} rounded-md justify-center items-center`}
    >
      <Text className="text-base text-white font-roboto-bold">{text}</Text>
    </TouchableOpacity>
  )
}
