import { Outlet } from 'react-router-dom'
import NavBar from 'src/components/nav'

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
