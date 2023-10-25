import { Image } from '@nextui-org/react'
import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import Link from 'next/link'

function HomeSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-4 sm:p-8 md:p-16 lg:p-32 xl:p-48'>
      <div className='flex items-center gap-2'>
        <FaBookOpen className='text-white' />
        <h1 className='text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Mangas Disponibles</h1>
      </div>
      <div>
        <Link href='/jujutsu'>
          <Image
            width={300}
            alt="JJK portada"
            src='/portada.jpg'
            className='shadow-lg shadow-white hover:animate-pulse'
          />
        </Link>
      </div>
    </div>
  )
}

export default HomeSection
