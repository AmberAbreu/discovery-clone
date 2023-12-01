import React from 'react'

export default function Dashboard() {
  return (
    <main className="max-h-screen overflow-auto">
      <div className="rounded-lg bg-white p-8">
        <h1 className="mb-10 text-3xl font-bold">Your Personal Dashboard</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-stretch">
            <div className="text-xs text-gray-400">Members connected</div>
            <div className="h-100 mx-4 border-l"></div>
            <div className="flex flex-nowrap -space-x-3">
              <div className="h-9 w-9">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="https://ui-avatars.com/api/?background=random"
                />
              </div>
              <div className="h-9 w-9">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="https://ui-avatars.com/api/?background=random"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center rounded-xl border px-3 text-gray-800 transition hover:border-gray-400 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-chat-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-gray-900 px-5 text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              Open
            </button>
          </div>
        </div>

        <hr className="my-10" />

        <div className="grid grid-cols-2 gap-x-20">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Your Sessions</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="rounded-xl bg-green-100 p-4">
                  <div className="text-xl font-bold leading-none text-gray-800">Upcoming:</div>
                  <div className="mt-5">
                    <p className="mb-3">You have no sessions.</p>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-800 transition hover:text-green-500"
                    >
                      Sign up for a session
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
                <div className="text-2xl font-bold leading-none">20</div>
                <div className="mt-2">Sessions attended</div>
              </div>
              <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
                <div className="text-2xl font-bold leading-none">5</div>
                <div className="mt-2">Sessions left</div>
              </div>
              <div className="col-span-2">
                <div className="rounded-xl bg-purple-100 p-4 text-gray-800">
                  <div className="mb-3 text-xl font-bold leading-none">Recommended Sessions</div>
                  <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
                    <div className="flex justify-between">
                      <div className="text-xs text-gray-400">Number 10</div>
                      <div className="text-xs text-gray-400">4h</div>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="font-bold hover:text-yellow-800 hover:underline"
                    >
                      Blog and social posts
                    </a>
                    <div className="text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="mr-1 inline align-middle text-gray-800"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                      Deadline is today
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Previous sessions:</h2>

            <div className="space-y-4">
              <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
                <div className="flex justify-between">
                  <div className="text-xs text-gray-400">Number 10</div>
                  <div className="text-xs text-gray-400">4h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  Results Oriented Resumes
                </a>
                <div className="text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="mr-1 inline align-middle text-gray-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  Deadline is today
                </div>
              </div>
              <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
                <div className="flex justify-between">
                  <div className="text-xs text-gray-400">Grace Aroma</div>
                  <div className="text-xs text-gray-400">7d</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  Build Your PRO-file
                </a>
                <div className="text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="mr-1 inline align-middle text-gray-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                  New feedback
                </div>
              </div>
              <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
                <div className="flex justify-between">
                  <div className="text-xs text-gray-400">Petz App</div>
                  <div className="text-xs text-gray-400">2h</div>
                </div>
                <a
                  href="javascript:void(0)"
                  className="font-bold hover:text-yellow-800 hover:underline"
                >
                  Job Search Strategy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
