import React from 'react'

const BgComponent = () => {
  return (
    <div className='z-[1] fixed h-screen w-full'>
        <h2 className='text-[1rem] text-zinc-400 select-none opacity-[0.6] font-semibold leading-none tracking-tight w-full text-center absolute top-10'>Notes.</h2>
        <h1 className='text-[14vw] text-zinc-900 select-none opacity-[0.9] font-semibold leading-none tracking-tight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Notes.</h1>
    </div>
  )
}

export default BgComponent