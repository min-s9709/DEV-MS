import React from 'react'

interface ICategoryHeader {
  category?: string
}

export default function CategoryHeader({ category }: ICategoryHeader) {
  return (
    <div className={'w-full border-b-[1px] p-2'}>
      <div className={'flex justify-center'}>
        <h1 className={'text-size-big-title mr-4'}>
          {category ? category : 'All'}
        </h1>
        <h1 className={'text-size-big-title text-[#DA0909]'}>8</h1>
      </div>
    </div>
  )
}
