import React from 'react'
import basta_logo from 'src/assets/images/basta_logo_white.png'
import { logout } from 'src/stores/auth'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()
  const logOutUser = () => {
    logout()
    navigate('/log-in')
  }
  return (
    <nav className="flex h-[10vh] items-center justify-between  pb-[2vw] pl-[3vw] pr-[3vw] pt-[2vw]">
      <div>
        <a href="/home">
          <img className="w-[21vh]" src={basta_logo} />
        </a>
      </div>
      <div>
        <ul className="flex items-center gap-[4vw]">
          <li>
            <a className="hover:text-gray-500" href="#">
              Help
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="/all-sessions">
              All Courses
            </a>{' '}
          </li>
          <li>
            <a className="hover:text-gray-500" href="my-profile">
              {' '}
              My Profile
            </a>
          </li>
          <li>
            <button className="hover:text-gray-500" onClick={logOutUser}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
