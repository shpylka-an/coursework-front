import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state.auth)
  console.log(isLoggedIn)

  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
      )}
    />
  )
}

export default PrivateRoute