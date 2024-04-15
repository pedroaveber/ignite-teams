import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { green, red } from 'tailwindcss/colors'

interface ButtonIconProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary'
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({
  variant = 'primary',
  icon,
  ...props
}: ButtonIconProps) {
  const buttonVariants = {
    primary: green[700],
    secondary: red[700],
  }

  return (
    <TouchableOpacity
      {...props}
      className={`size-[56px] justify-center items-center ml-4`}
    >
      <MaterialIcons size={32} name={icon} color={buttonVariants[variant]} />
    </TouchableOpacity>
  )
}
