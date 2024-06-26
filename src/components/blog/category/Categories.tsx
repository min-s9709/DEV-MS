import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Category from './Category'

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
      {category === 'All' ? (
        <Category categoryName='All' isSelected={true} />
      ) : (
        <Category categoryName='All' isSelected={false} />
      )}

      {data.allMdx.distinct.map((c, index) => (
        <Category key={index} categoryName={c} isSelected={category === c} />
      ))}
    </div>
  )
}
