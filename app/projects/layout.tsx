import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const ProjectPageLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className='mt-20 md:w-[80%] max-w-[1300px] mx-auto px-5'>{children}</main>
  )
}

export default ProjectPageLayout