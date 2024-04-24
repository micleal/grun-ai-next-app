'use client'

import { useChat } from 'ai/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState, useEffect, use, FormEvent } from 'react'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Textarea } from './ui/textarea'
import { ScrollArea } from './ui/scroll-area'
import { useName } from '@/utils/hooks/useName'

export function Chat() {
  const totalCharacterNumber = 2000
  const { name } = useName()
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className='grid grid-rows-[1fr_auto] p-2'>
      <section className='container flex flex-col px-0'>
        <ScrollArea className='h-1 flex-grow overflow-y-auto'>
          <ul className='h-full flex-grow overflow-y-auto p-4'>
            {messages.map((message, index) => {
              return message.role === 'user' ? (
                <li
                  key={index}
                  className='overflow-x-ellipsis flex resize-none rounded'
                >
                  <div className='mb-2 flex w-fit flex-col items-start justify-start gap-2 rounded bg-accent px-8 py-4 text-accent-foreground'>
                    <span className='font-semibold text-primary'>
                      {`${(!name && 'You') || name} (${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()})`}
                    </span>
                    <span>{message.content}</span>
                  </div>
                </li>
              ) : (
                <li
                  key={index}
                  className='overflow-x-ellipsis flex resize-none justify-end'
                >
                  <div className='mb-2 flex w-fit flex-col items-end justify-end gap-2 rounded bg-primary px-8 py-4 text-primary-foreground'>
                    <span className='font-semibold text-secondary'>
                      {`Grun (${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()})`}
                    </span>
                    <span>{message.content}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </ScrollArea>
      </section>
      <section className='p-4'>
        <form
          className='relative flex flex-auto flex-row gap-3'
          onSubmit={handleSubmit}
        >
          <div className='relative flex h-full flex-1 flex-col'>
            <label
              htmlFor='user-input'
              className='sr-only absolute bottom-full left-0 right-0'
            >
              Prompt
            </label>
            <div className='flex w-full items-center'>
              <div className='relative flex h-auto min-h-12 w-full flex-col items-center justify-center overflow-hidden rounded-md border has-[(textarea:focus)]:border-border has-[(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)]'>
                <Textarea
                  rows={1}
                  className='m-0 max-h-[25dvh] min-h-9 w-full resize-none overflow-y-hidden border-0 py-2 pr-28 outline-none focus-visible:ring-0'
                  dir='auto'
                  placeholder='Say something...'
                  name='user-input'
                  value={input}
                  onChange={handleInputChange}
                  maxLength={2000}
                  spellCheck={true}
                />
                <p className='absolute bottom-1 right-14 text-xs font-medium italic text-muted-foreground'>
                  {input.length}/{totalCharacterNumber}
                </p>
                <Button
                  className='absolute bottom-1 right-2'
                  type='submit'
                  size='icon'
                >
                  <PaperPlaneIcon className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
