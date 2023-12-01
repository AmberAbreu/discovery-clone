import { BrowserRouter as Router, Outlet } from 'react-router-dom'
import { AppRoutes } from './utils/routes'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'

export const AppRoot = () => {
  return (
    <Router>
      <AppRoutes />
      <Outlet />
    </Router>
  )
}

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoot />
    </ApolloProvider>
  )
}
