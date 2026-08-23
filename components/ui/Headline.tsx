import Link from 'next/link'
import React from 'react'

const Headline = () => {
  return (
    <div className='p-7 bg-black/40'>
      <div className='flex justify-between items-center'>
        <h2 className='text-4xl'>Our collections</h2>
        <Link href="" className='text-2xl'>view</Link>
      </div>
      <div className='mt-3 bg-white/20 p-[1px]'></div>
    </div>
  )
}

export default Headline
