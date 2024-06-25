import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

interface ICategories {
  category?: string
}
export default function Categories({ category }: ICategories) {
  const data = useStaticQuery<Queries.CategoryQuery>(graphql`
    query Category {
      allMdx {
        distinct(field: { frontmatter: { category: SELECT } })
      }
    }
  `)
  return (
    <div className={'w-full flex justify-start py-4 overflow-x-scroll'}>
      {category ? (
        <Link to={'?category='}>
          <div className={'w-fit mr-3 bg-c-light-color text-center rounded-xl'}>
            <h3 className={'px-2 py-1 text-c-green-color  text-base'}>All</h3>
          </div>
        </Link>
      ) : (
        <Link to={'?category='}>
          <div className={'w-fit mr-3 bg-c-green-color text-center rounded-xl'}>
            <h3 className={'px-2 py-1 text-c-light-color text-base'}>All</h3>
          </div>
        </Link>
      )}

      {data.allMdx.distinct.map((c, index) => (
        <Link key={index} to={`?category=${c}`}>
          <div
            className={`w-fit mr-3 ${category === c ? `bg-c-green-color` : `bg-c-light-color`} text-center rounded-xl`}
          >
            <h3
              className={`px-2 py-1 ${category === c ? `text-c-light-color` : `text-c-green-color `} text-base`}
            >
              {c}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
