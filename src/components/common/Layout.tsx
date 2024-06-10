import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface ILayoutProps {
  children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={'flex flex-col items-center'}>
      <Header />
      <main
        className={
          'lg:w-[1260px] min-h-[calc(100vh-160px)] justify-center flex'
        }
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
