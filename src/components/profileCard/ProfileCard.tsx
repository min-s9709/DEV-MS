import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import IconGroups from '../Icons/IconGroups'

export default function ProfileCard() {
  return (
    <div className={'w-full items-center h-80 shadow-md flex p-4'}>
      <div className={'min-w-[180px] min-h-[180px] w-1/4'}>
        <StaticImage
          className={'object-cover rounded-full'}
          src='../../images/profile.jpeg'
          alt='profile'
        />
      </div>
      <div className={'flex flex-col items-center w-3/4 p-2'}>
        <h1 className={'text-size-big-title font-bold'}>
          💻 안녕하세요 FE 개발자 김민성 입니다.
        </h1>
        <div className={'flex flex-col items-center mt-5'}>
          <p
            className={
              'text-size-midium-title font-semibold text-dark-gray-color'
            }
          >
            현재 WEB FrontEnd 개발을 공부하고 있으며, 주로 React를 통해 작업하고
            있습니다.
          </p>
          <p
            className={
              'text-size-midium-title font-semibold text-dark-gray-color'
            }
          >
            사용자에게 즐거운 경험을 제공할 수 있는 개발자로 성장하고 싶습니다.
          </p>
        </div>
        <IconGroups />
      </div>
    </div>
  )
}
