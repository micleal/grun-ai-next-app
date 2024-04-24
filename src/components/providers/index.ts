import { UserNameProvider } from '@/utils/contexts/name-context'
import { ThemeProvider } from 'next-themes'

export const Provider = {
  Theme: ThemeProvider,
  Name: UserNameProvider,
}
