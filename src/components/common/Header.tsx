import React from 'react'
import { Icon } from '@iconify/react'

export default function Header() {
  return (
    <header
      className={
        'w-full h-16 bg-white border-b-2 flex items-center justify-center'
      }
    >
      <div className={'w-[1260px] flex'}>
        <div className={'flex w-3/4 items-center pl-2'}>
          <h1 className={'text-2xl font-bold'}>DEV.MS</h1>
        </div>
        <div className={'flex w-1/4 justify-end'}>
          <div className={'flex w-32 justfiy-end border-l-2 justify-around'}>
            <Icon icon='mdi:github' className={'w-9 h-9'} />
            <Icon
              icon='material-symbols:dark-mode-outline'
              className={'w-9 h-9'}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
