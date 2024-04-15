import { Button } from '@components/button'
import { GroupCard } from '@components/group-card'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { ListEmpty } from '@components/list-empty'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getAllGroups } from '@storage/group/get-all-groups'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const navigation = useNavigation()

  function handleCreateNewGroup() {
    navigation.navigate('new')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      const data = await getAllGroups()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <SafeAreaView className="bg-gray-600 flex-1 w-full px-6">
      <Header />

      <Highlight title="Turmas" subtitlte="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => {
          return <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => {
          return (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )
        }}
      />

      <Button onPress={handleCreateNewGroup} text="Criar nova turma" />
    </SafeAreaView>
  )
}
