import React from 'react'
import { Outlet } from 'react-router-dom'

const RouteFather = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default RouteFather