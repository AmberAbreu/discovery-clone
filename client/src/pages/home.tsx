import React, { useState } from 'react'
import hero from 'src/assets/images/hero.png'
import ActionButton from 'src/components/common/actionButton'
import EventCard from 'src/components/common/eventCard'
import Hero from 'src/components/hero'
import { useQuery } from '@apollo/client'
import { GET_SESSIONS } from 'src/utils/queries'
import { Session } from './all-sessions'

import NavBar from 'src/components/nav'

export const Home = () => {
  const [sessions, setSessions] = useState<Session[]>([])
  const [error, setError] = useState<string | null>(null)
  const { loading } = useQuery(GET_SESSIONS, {
    onCompleted: (data) => {
      console.log('🎉', data)
      setSessions(data?.airtableData?.courses)
    },
    onError: (error) => {
      setError(error.message)
    },
  })
  return (
    <>
      <Hero />
      <section>
        <div className="mt-[5vh] justify-center">
          <h1 className="ml-[50px] font-sans text-3xl text-white">Recommended Sessions</h1>
          <div className="mx-auto mt-[70px] grid w-[80%] grid-cols-3 gap-x-8 gap-y-8">
            {sessions.map((session, id) => {
              return <EventCard session={session} key={id} />
            })}
          </div>
          <div className="mt-[50px] flex justify-center">
            <ActionButton link="/all-sessions" title="View All Sessions" />
          </div>
        </div>
      </section>
      <div className="h-[100vh]"></div>
    </>
  )
}
