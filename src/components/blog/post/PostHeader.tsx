import React from 'react'

interface IPostHeader {
  title: string
  date: string
  category: string
}

export default function PostHeader({ title, date, category }: IPostHeader) {
  return (
    <div
      className={
        'mt-20 w-full flex flex-col items-center justify-center mb-3 py-3 border-b-[1px]'
      }
    >
      <h1 className={'text-3xl font-extrabold mb-2'}>{title}</h1>
      <h3 className={'text-size-mediu-title text-dark-gray-color mb-1'}>
        {date}
      </h3>
      <div className={`w-fit mr-3 bg-c-light-color text-center rounded-xl`}>
        <h3 className={`px-2 py-1 text-c-green-color text-base`}>{category}</h3>
      </div>
    </div>
  )
}
