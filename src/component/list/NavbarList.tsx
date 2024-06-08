import React from 'react'

function NavbarList() {
  return (
<ul className="flex items-center" aria-labelledby="user-menu-button">
  <li className="p-3">
    <a href="#" className="text-white">Dashboard</a>
  </li>
  <li className="p-3">
    <a href="#" className="">Settings</a>
  </li>
  <li className="p-3">
    <a href="#" className="">Earnings</a>
  </li>
  <li className="p-3">
    <a href="#" className="">Sign out</a>
  </li>
</ul>

  )
}

export default NavbarList
