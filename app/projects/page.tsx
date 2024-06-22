import Link from 'next/link'
import React from 'react'
import Card from './Card'

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
      <div className='my-10  grid grid-cols-1 lg:grid-cols-2 gap-3'> 

        <Card
          delayTime={0.5}
          title="SwiftShop"
          link="https://swiftshop-chi.vercel.app/"
          gitLink="https://github.com/GummyJohn/swiftshop"
          img="/swiftshop.jpg"
          description="Ecomm webiste with full cart functionality"
          tags={['NextJS', 'Supabase', 'Tailwind', 'Responsive']}
        />

        <Card
          delayTime={0.65}
          title="RecipeHub"
          link="https://recipehub-swart.vercel.app/"
          gitLink="https://github.com/GummyJohn/recipe_nextjs"
          img="/recipehub.jpg"
          description="Recipe Hub where user can explore new recipe and customize their personal recipe list"
          tags={['API', 'NextJS', 'Tailwind', 'Responsive']}
        />

        <Card
          delayTime={0.75}
          title="Inventory Management"
          link="https://inventorycrud.vercel.app/"
          gitLink="https://github.com/GummyJohn/inventory-frontend-nextjs"
          img="/inventoryCRUD.png"
          description="Self Made Inventory Management API enabling users to create, update, delete, and restore products"
          tags={['NodeJS', 'NextJS', 'Tailwind', 'Responsive', 'Express', 'MongoDB']}
        />

      </div>
    </>
  )
}

export default ProjectsPage