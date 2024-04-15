import { Button } from '@components/button'
import { ButtonIcon } from '@components/button-icon'
import { Filter } from '@components/filter'
import { Header } from '@components/header'
import { Highlight } from '@components/highlight'
import { Input } from '@components/input'
import { ListEmpty } from '@components/list-empty'
import { PlayerCard } from '@components/player-card'
import { useNavigation, useRoute } from '@react-navigation/native'
import { removeGroupByName } from '@storage/group/remove-group-by-name'
import { addPlayerToGroup } from '@storage/players/add-play-to-group'
import { getPlayersByGroup } from '@storage/players/get-players-by-group'
import { removePlayerFromGroup } from '@storage/players/remove-player-from-group'
import { AppError } from '@utils/app-error'
import { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface RouteParams {
  group: string
}

interface Player {
  name: string
  team: string
}

export function Players() {
  const route = useRoute()
  const navigation = useNavigation()

  const { group } = route.params as RouteParams

  const [team, setTeam] = useState('Time A')
  const [playerName, setPlayerName] = useState('')

  const [players, setPlayers] = useState<Player[]>([])

  async function handleAddPlayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert('Adicionar participante', 'Nome é obrigatório')
    }

    const newPlayer: Player = {
      name: playerName,
      team,
    }

    try {
      await addPlayerToGroup(newPlayer, group)

      setPlayers([...players, newPlayer])
      setPlayerName('')

      Keyboard.dismiss()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Adicionar participante', error.message)
      } else {
        Alert.alert('Adicionar participante', 'Erro ao adicionar participante')
      }
    }
  }

  async function handleRemovePlayer(name: string) {
    try {
      await removePlayerFromGroup(name, group)
      setPlayers(players.filter((player) => player.name !== name))
    } catch (error) {
      return Alert.alert('Remover participante', 'Erro ao remover participante')
    }
  }

  async function fetchPlayersByGroup() {
    try {
      const players = await getPlayersByGroup(group)
      setPlayers(players)
    } catch (error) {
      console.log(error)
    }
  }

  async function removeGroup() {
    try {
      await removeGroupByName(group)
      navigation.navigate('groups')
    } catch (error) {
      Alert.alert('Remover turma', 'Erro ao remover turma')
    }
  }

  async function handleRemoveGroup() {
    Alert.alert('Remover', 'Deseja realmente remover essa turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: async () => await removeGroup() },
    ])
  }

  useEffect(() => {
    fetchPlayersByGroup()
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-gray-600 p-6">
      <KeyboardAvoidingView
        className="flex-1"
        behavior="padding"
        enabled={Platform.OS === 'ios'}
      >
        <Header sholdShowReturnButton />

        <Highlight
          title={group}
          subtitlte="adicione a galera e separe os times"
        />

        <View className="w-full flex-row bg-gray-700 pr-4">
          <Input
            onChangeText={setPlayerName}
            value={playerName}
            placeholder="Nome da pessoa"
            autoCorrect={false}
            onSubmitEditing={handleAddPlayer}
          />

          <ButtonIcon onPress={handleAddPlayer} icon="add" />
        </View>

        <View className="w-full flex items-center justify-between flex-row my-8">
          <FlatList
            horizontal
            className="flex-1 gap-2"
            data={['Time A', 'Time B']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <Filter
                  title={item}
                  onPress={() => setTeam(item)}
                  disabled={
                    item.toLocaleLowerCase() === team.toLocaleLowerCase()
                  }
                  isActive={
                    item.toLocaleLowerCase() === team.toLocaleLowerCase()
                  }
                />
              )
            }}
          />

          <Text className="text-gray-200 font-roboto-bold text-sm">
            {players.length}
          </Text>
        </View>

        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            if (item.team !== team) return null
            return (
              <PlayerCard
                onRemove={() => handleRemovePlayer(item.name)}
                name={item.name}
              />
            )
          }}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas neste time" />
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />

        <Button
          onPress={handleRemoveGroup}
          text="Remover turma"
          variant="secondary"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
