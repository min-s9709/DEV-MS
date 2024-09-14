import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Title from '../../common/Title'
import Tag from '../../common/Tag'
import Navbutton from '../../common/Navbutton'
import { aboutData } from '../../../data/introduce'
import Introduce from './Introduce'

export default function About() {
  return (
    <>
      <Title>About Me</Title>
      <div className='grid grid-cols-2 max-lg:grid-cols-1'>
        <div className='flex flex-col items-center w-full gap-5'>
          <StaticImage
            src='../../../images/homeprofile.png'
            alt='home-profile'
            className='rounded-full w-60 h-60'
          />
          <div className='flex gap-5'>
            {aboutData.tag.map((name, index) => (
              <Tag key={index} size='big' name={name} />
            ))}
          </div>
          <Navbutton destination='/resume' content='이력서 보러가기' />
        </div>
        <div className='flex flex-col gap-2 max-lg:mt-8'>
          {aboutData.introduce.map((item, index) => (
            <Introduce
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-6 mt-6'>
        <h2 className='text-2xl font-bold'>Skill&Tool</h2>
        <div className='grid w-full grid-cols-2'>
          <div className='flex gap-3'>
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/HTML.svg'
              alt='html'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/CSS.svg'
              alt='css'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/JavaScript.svg'
              alt='javascript'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/TypeScript.svg'
              alt='typescript'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/React.svg'
              alt='react'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/TailwindCSS-Light.svg'
              alt='tailwind-css'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/StyledComponents.svg'
              alt='styled-components'
            />
          </div>
          <div className='flex gap-3'>
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/Github-Light.svg'
              alt='github'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/VSCode.svg'
              alt='vscode'
            />
            <StaticImage
              className='w-10 h-10'
              src='../../../images/stacks/Discord.svg'
              alt='discord'
            />
          </div>
        </div>
      </div>
    </>
  )
}
