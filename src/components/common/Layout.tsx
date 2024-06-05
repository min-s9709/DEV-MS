import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className={'flex flex-col items-center'}>
      <Header />
      <main className={'w-full lg:w-[1260px]  min-h-[calc(100vh-160px)] p-2'}>
        메인컨텐츠
      </main>
      <Footer />
    </div>
  )
}
