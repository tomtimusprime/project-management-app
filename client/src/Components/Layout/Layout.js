import React from 'react'
import TopBar from './components/Topbar/Topbar'
const Layout = ({children}) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  )
}

export default Layout
