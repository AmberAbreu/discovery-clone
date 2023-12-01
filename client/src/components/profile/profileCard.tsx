import React from 'react'

export default function ProfileCard() {
  return (
    // <div className=" items-center rounded bg-gray-50 dark:bg-gray-800">
    <div className="flex h-[85vh] flex-col justify-center rounded-xl p-6 shadow-md dark:bg-gray-900 dark:text-gray-100 sm:px-12">
      <img
        src="https://source.unsplash.com/150x150/?portrait?3"
        alt=""
        className="mx-auto aspect-square h-32 w-32 rounded-full dark:bg-gray-500"
      />
      <div className="space-y-4 divide-y text-center dark:divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
          <h2 className="text-xl font-semibold sm:text-2xl">leroy.jenkins@email.com</h2>
          <h2 className="text-xl font-semibold sm:text-2xl">Password</h2>
        </div>
      </div>
    </div>
    // </div>
  )
}
