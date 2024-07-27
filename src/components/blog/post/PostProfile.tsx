import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import IconGroups from '../../Icons/IconGroups'

export default function PostProfile() {
  return (
    <div className={'flex w-full gap-7 pb-10'}>
      <StaticImage
        className={'max-w-[180px] max-h-[180px] rounded-full'}
        src='../../../images/profile.jpeg'
        alt='profile'
      />
      <div className={'flex flex-col justify-between'}>
        <h1 className={'text-size-big-title font-bold'}>김민성</h1>
        <p className={'text-size-body text-dark-gray-color'}>
          사용자에게 즐거운 경험을 제공할 수 있는 FE 개발자를 지향합니다.
        </p>
        <IconGroups />
      </div>
    </div>
  )
}
