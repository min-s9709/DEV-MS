import React from 'react'
import EachIcon from './EachIcon'

const profile = [
  { name: 'Github', path: 'https://github.com/min-s9709', icon: 'mdi:github' },
  {
    name: 'Mail',
    path: 'mailto:mim970929@gmail.com',
    icon: 'material-symbols:mail-outline',
  },
  { name: 'Blog', path: '/blog', icon: 'gridicons:posts' },
]

export default function IconGroups() {
  return (
    <div className={'min-w-[120px] flex justify-between mt-5'}>
      {profile.map((item) => (
        <EachIcon key={item.name} item={item} />
      ))}
    </div>
  )
}
