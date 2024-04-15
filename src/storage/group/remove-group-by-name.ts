import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storage-config'

import { getAllGroups } from './get-all-groups'

export async function removeGroupByName(groupDeleted: string) {
  const storedGroups = await getAllGroups()
  const groups = storedGroups.filter((group) => group !== groupDeleted)

  await Promise.all([
    AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups)),
    AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`),
  ])
}
