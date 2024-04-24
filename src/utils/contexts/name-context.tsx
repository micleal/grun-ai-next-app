'use client'

 import { createContext, useState } from 'react'

export const UserNameContext = createContext<{
  name: string
  setName: (name: string) => void
}>({
  name: '',
  setName: () => {},
})

export function UserNameProvider({
  children,
}: {
  children: Readonly<React.ReactNode>
}) {
  const [name, setName] = useState('')
  return (
    <UserNameContext.Provider value={{ name, setName }}>
      {children}
    </UserNameContext.Provider>
  )
}
