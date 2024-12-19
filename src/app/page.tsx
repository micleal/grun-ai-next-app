'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useName } from '@/utils/hooks/useName'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { setName, name } = useName()
  const { push } = useRouter()
  
  useEffect(() => {
    if (name) {
      push('/chat')
    }
  }, [name, push])

  const handleName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const n = new FormData(e.currentTarget).get('name') as string
    setName(n)
  }

  return (
    <main className='flex flex-col items-center justify-center gap-2'>
      <h2 className='text-lg font-semibold text-primary'>
        Hi, what&apos;s your name?
      </h2>
      <form
        method='post'
        className='flex w-full flex-col items-center justify-center gap-2'
        onSubmit={handleName}
      >
        <label htmlFor='name' className='sr-only'>
          Name
        </label>
        <Input
          id='name'
          className='w-1/2'
          name='name'
          placeholder='Your name here'
        />
        <Button type='submit' className='w-1/2'>
          Submit
        </Button>
      </form>
    </main>
  )
}
