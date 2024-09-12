import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Title from '../../common/Title'
import Tag from '../../common/Tag'
import Navbutton from '../../common/Navbutton'

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
            <Tag size='big' name='#김민성' />
            <Tag size='big' name='#프론트엔드' />
            <Tag size='big' name='#소통' />
          </div>
          <Navbutton destination='/resume' content='이력서 보러가기' />
        </div>
        <div className='flex flex-col gap-2 max-lg:mt-8'>
          <div className='flex flex-col gap-3 p-4 bg-c-green-color rounded-xl'>
            <h3 className='text-base font-bold text-white'>
              어떠한 내용이 들어갈까
            </h3>
            <p className='text-white text-[14px] leading-relaxed'>
              웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초
              지식을 쌓았습니다. 사용자와의 소통에 대해 중요성을 인지하고, 더
              밀접하게 상호작용 가능한 프로젝트를 개발하고자 프론트엔드 개발자로
              전향을 결심하게 되었습니다. React, Styled Components, Redux
              Toolkit 등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는
              새로운 도전에 나서고 있습니다.
            </p>
          </div>
          <div className='flex flex-col gap-3 p-4 bg-c-green-color rounded-xl'>
            <h3 className='text-base font-semibold text-white'>
              어떠한 내용이 들어갈까
            </h3>
            <p className='text-white text-[14px] leading-relaxed'>
              웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초
              지식을 쌓았습니다. 사용자와의 소통에 대해 중요성을 인지하고, 더
              밀접하게 상호작용 가능한 프로젝트를 개발하고자 프론트엔드 개발자로
              전향을 결심하게 되었습니다. React, Styled Components, Redux
              Toolkit 등 다양한 프레임워크와 라이브러리를 도입해 발전할 수 있는
              새로운 도전에 나서고 있습니다.
            </p>
          </div>
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
