import AsyncStorage from '@react-native-async-storage/async-storage'
import { PLAYER_COLLECTION } from '@storage/storage-config'
import { AppError } from '@utils/app-error'

import { getPlayersByGroup } from './get-players-by-group'
import { PlayerStorageDTO } from './player-storage-dto'

export async function addPlayerToGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  const storedPlayers = await getPlayersByGroup(group)

  const playerAlreadyExists = storedPlayers.some(
    ({ name }) =>
      name.toLocaleLowerCase() === newPlayer.name.toLocaleLowerCase(),
  )

  if (playerAlreadyExists) {
    throw new AppError('Essa pessoa já está adicionada em um time aqui.')
  }

  const storage = JSON.stringify([...storedPlayers, newPlayer])
  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
}
