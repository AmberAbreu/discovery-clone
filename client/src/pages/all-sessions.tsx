import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SESSIONS } from 'src/utils/queries'
import EventCard from 'src/components/common/eventCard'
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'

export interface Session {
  CourseName: string
  CourseImage: string
  RSVPPageDescription: string
}

export const AllSessions = () => {
  const [sessions, setSessions] = useState<Session[]>([])
  const [error, setError] = useState<string | null>(null)

  loadDevMessages()
  loadErrorMessages()

  const { loading } = useQuery(GET_SESSIONS, {
    onCompleted: (data) => {
      console.log('🎉', data)
      setSessions(data?.airtableData?.courses)
    },
    onError: (error) => {
      setError(error.message)
    },
  })

  if (loading) {
    return <div>loading</div>
  }
  return (
    <div className="mt-[5vh] justify-center">
      <div className="text-center">
        <h1 className="ml-[50px] font-sans text-4xl text-white">All Sessions</h1>

        {/* <label className="mb-2 block text-2xl text-gray-900 dark:text-white">First name</label> */}
        <input
          type="text"
          className="mt-[30px] w-[20%]  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search for a Session"
          required
        />
      </div>

      <div className="mx-auto my-[70px] grid w-[80%] grid-cols-3 gap-x-8 gap-y-8">
        {sessions.map((session, id) => {
          return <EventCard session={session} key={id} />
        })}
      </div>
    </div>
  )
}
