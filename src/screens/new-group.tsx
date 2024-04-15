import { Button } from '@components/button'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { useNavigation } from '@react-navigation/native'
import { createGroup } from '@storage/group/create-group'
import { AppError } from '@utils/app-error'
import { UsersThree } from 'phosphor-react-native'
import { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { green } from 'tailwindcss/colors'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleCreateGroup() {
    if (group.trim().length === 0) {
      return Alert.alert('Novo grupo', 'Nome do grupo é obrigatório')
    }

    try {
      await createGroup(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Erro ao criar novo grupo')
      }
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-600 p-6">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        enabled={Platform.OS === 'ios'}
      >
        <Header sholdShowReturnButton />

        <View className="flex-1 w-full justify-center items-center">
          <UsersThree size={56} color={green[700]} />

          <Highlight
            title="Nova turma"
            subtitlte="crie a turma para adicionar as pessoas"
          />

          <Input
            value={group}
            onChangeText={setGroup}
            placeholder="Digite o nome"
          />

          <Button
            onPress={handleCreateGroup}
            style={{ marginTop: 20 }}
            text="Criar"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
