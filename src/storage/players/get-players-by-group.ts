import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storage-config'

import { PlayerStorageDTO } from './player-storage-dto'

export async function getPlayersByGroup(group: string) {
  const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)
  const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

  return players
}
