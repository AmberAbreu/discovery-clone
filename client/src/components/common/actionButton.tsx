import React from 'react'

interface btnProps {
  title: string
  link: string
}

export default function ActionButton({ title, link }: btnProps) {
  return (
    <a href={link}>
      <button className="bg-basta_green hover:bg-basta_yellow mt-[1vw] w-[20vh] rounded-full px-5 py-2 text-white">
        {title}
      </button>
    </a>
  )
}
