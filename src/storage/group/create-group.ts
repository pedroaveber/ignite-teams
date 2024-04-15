import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storage-config'
import { AppError } from '@utils/app-error'

import { getAllGroups } from './get-all-groups'

export async function createGroup(groupName: string) {
  const storedGroups = await getAllGroups()
  const groupAlreadyExists = storedGroups.includes(groupName)

  if (groupAlreadyExists) {
    throw new AppError('Grupo com o mesmo nome já existe')
  }

  const storage = JSON.stringify([...storedGroups, groupName])
  await AsyncStorage.setItem(GROUP_COLLECTION, storage)
}
