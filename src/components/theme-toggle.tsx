'use client'

import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='right-2 top-2'
          variant='outline'
          size='icon'
        >
          <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          className={cn(theme === 'light' && 'text-primary')}
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(theme === 'dark' && 'text-primary')}
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(theme === 'system' && 'text-primary')}
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
