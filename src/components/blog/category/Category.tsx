import { Link } from 'gatsby'
import React from 'react'

interface ICategory {
  isSelected: boolean
  categoryName: string
}

export default function Category({ isSelected, categoryName }: ICategory) {
  return (
    <Link to={`?category=${categoryName}`}>
      <div
        className={`w-fit mr-3 ${isSelected ? `bg-c-green-color` : `bg-c-light-color`} text-center rounded-xl`}
      >
        <h3
          className={`px-2 py-1 ${isSelected ? `text-c-light-color` : `text-c-green-color `} text-base`}
        >
          {categoryName}
        </h3>
      </div>
    </Link>
  )
}
