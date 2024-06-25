import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default function Banner() {
  return (
    <div className={'relative w-full h-80'}>
      <StaticImage
        src='../../../images/blogBanner.jpg'
        alt='blog-banner'
        className={'object-cover w-full h-full opacity-90'}
      ></StaticImage>
      <div className={'absolute top-1/2 left-1/3 right-1/3 text-center'}>
        <h1 className={'font-extrabold text-size-big-title text-white'}>
          김민성의 개발 블로그
        </h1>
        <h3
          className={
            'font-bold text-size-medium-title text-light-gray-color mt-6'
          }
        >
          개발하면서 겪는 다양한 경험들을 기록하는 공간입니다.
        </h3>
      </div>
    </div>
  )
}
