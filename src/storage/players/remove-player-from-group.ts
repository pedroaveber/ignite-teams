import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storage-config'

import { getPlayersByGroup } from './get-players-by-group'

export async function removePlayerFromGroup(name: string, group: string) {
  const stored = await getPlayersByGroup(group)

  const filtered = stored.filter((player) => player.name !== name)
  const players = JSON.stringify(filtered)

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
}
