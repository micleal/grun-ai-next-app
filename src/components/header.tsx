import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className='container'>
      <div className='mx-auto flex items-center justify-between gap-2 py-2'>
        <h1 className='mt-2 text-4xl font-bold italic'>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <ThemeToggle />
      </div>
    </header>
  )
}
