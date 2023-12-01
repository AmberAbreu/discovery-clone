import React from 'react'
import ActionButton from './actionButton'

interface session {
  CourseName: string
  CourseImage: string
  RSVPPageDescription: string
}

interface cardProps {
  session: session
}

export default function EventCard({ session }: cardProps) {
  return (
    <div className=" h-[70vh] max-w-sm overflow-hidden rounded shadow-lg">
      <img className="h-[50%]  w-full" src={session?.CourseImage} alt="Sunset in the mountains" />
      {/* <div className="float-right ml-12 w-60 origin-top -translate-y-60 translate-x-20 rotate-45 bg-[#85c540] text-center">
        One Session Left!
      </div> */}
      <div className="px-6 py-3">
        <div className="text-l mb-2 font-sans font-bold text-white">{session?.CourseName}</div>
        <b className="text-white">Available Sessions: 1</b>
        <div className="h-24 overflow-auto ">
          <p className="text-base text-[#C0C0C0]">{session?.RSVPPageDescription}</p>
        </div>
      </div>
      <div className="px-6">
        <ActionButton link="/" title={'RSVP'} />
      </div>
    </div>
  )
}
