// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { logOut, currentUser } = useAuth()

  const message =
    currentUser && currentUser.id
      ? `Logged in as user with id: ${currentUser.id}`
      : `Logged in but currentUser or currentUser.id is falsy. Current user stringified is: ${JSON.stringify(currentUser, null, '\t')}`
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <br />
      <p>{message}</p>
      <br />

      <button onClick={logOut}>{`Logout?`}</button>
    </>
  )
}

export default HomePage
