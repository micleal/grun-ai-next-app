import { useContext } from 'react'
import { UserNameContext } from '../contexts/name-context'

export function useName() {
  const { name, setName } = useContext(UserNameContext)
  return { name, setName }
}
