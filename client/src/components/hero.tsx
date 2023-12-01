import React from 'react'
import ActionButton from './common/actionButton'

export default function Hero() {
  return (
    <div className="bg-hero flex h-[90vh] flex-col justify-center bg-cover bg-no-repeat pl-[3vw]">
      <div className="w-[40%] text-white">
        <h1 className="mb-[10px] font-sans text-5xl ">
          <b>Welcome to Discovery!</b>
        </h1>
        <p className="text-3xl">Find yourself. Plan your career. Discover your passion.</p>
        <ActionButton link={'/home'} title={'Register for a Seekr Debrief'} />
      </div>
    </div>
  )
}
