import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WebsitesTab from './sections/WebsitesTab'
import GamesTab from './sections/GamesTab'


const ProjectsPage = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col gap-5'>
        <h2 className='text-white text-6xl tracking-widest'>
          <span className='text-orange-500'>P</span>rojects
        </h2>
        <Link href='/' className='py-2 px-4 bg-orange-500 text-white cursor-pointer rounded-xl hover:bg-orange-800'>
          Back Home 
        </Link>
      </div>

      <Tabs defaultValue='website' className='my-10'>

        <TabsList className=' text-white my-5'>
          <TabsTrigger value='website' className='text-xl px-5 py-2 rounded-xl'>Websites</TabsTrigger>
          <TabsTrigger value='games' className='text-xl px-5 py-2 rounded-xl'>Games</TabsTrigger>
        </TabsList>

        <TabsContent value='website'>
          <WebsitesTab/>
        </TabsContent>
        <TabsContent value='games'>
          <GamesTab/>
        </TabsContent>

      </Tabs>
    </>
  )
}

export default ProjectsPage