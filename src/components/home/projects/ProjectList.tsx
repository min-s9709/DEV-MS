import React from 'react'
import { projectData } from '../../../data/projects'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import ProjectCard from './ProjectCard'

type ImageData = {
  node: {
    relativePath: string
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type QueryResult = {
  allFile: {
    edges: ImageData[]
  }
}

export default function ProjectList() {
  const data: QueryResult = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return (
    <div className='grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
      {projectData.map((item, index) => {
        const imageData = data.allFile.edges.find(
          (edge) => edge.node.relativePath === item.img,
        )?.node.childImageSharp?.gatsbyImageData as IGatsbyImageData

        return <ProjectCard key={index} data={item} imageData={imageData} />
      })}
    </div>
  )
}
