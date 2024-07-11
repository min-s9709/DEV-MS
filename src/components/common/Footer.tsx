import React from 'react'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer
      className={
        'bottom-0 w-full h-14 border-t-2 flex items-center justify-center'
      }
    >
      <div className={'w-[1260px] flex items-center'}>
        <p className={'text-dark-gray-color pl-2'}>
          Copyright © @min-s9709. All rights reserved.
        </p>
        <Icon icon='mdi:github' className={'w-6 h-6'} />
      </div>
    </footer>
  )
}
