import LogoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import { CaretLeft } from 'phosphor-react-native'
import { Image, TouchableOpacity, View } from 'react-native'

interface HeaderProps {
  sholdShowReturnButton?: boolean
}

export function Header({ sholdShowReturnButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <View className="w-full flex-row justify-center items-center">
      {sholdShowReturnButton && (
        <TouchableOpacity
          onPress={handleGoBack}
          className="flex-1 flex-row flex justify-start"
        >
          <CaretLeft color="#FFFFFF" size={32} weight="bold" />
        </TouchableOpacity>
      )}

      <Image alt="" className="h-[55px] w-[46px]" source={LogoImg} />
    </View>
  )
}
