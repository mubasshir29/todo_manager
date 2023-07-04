import React from 'react'
import Nav from './Nav'
import AddTask from './AddTask'

function Layout({children}) {
  return (
    <>
        <Nav/>
        <div className='w-[80%] mx-auto flex flex-col gap-6'>{children}</div>
    </>
  )
}

export default Layout