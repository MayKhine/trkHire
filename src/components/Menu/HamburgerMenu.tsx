import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import { MenuButton } from "./MenuButton"

export const HamburgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="w-full">
      <div className="border-2 w-full p-4 bg-offWhite flex items-center gap-4">
        <GiHamburgerMenu
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
        />
        <div className="text-2xl font-bold"> TrkHire</div>
      </div>

      {toggleMenu && (
        <div
          onClick={() => {
            setToggleMenu(!toggleMenu)
          }}
        >
          <div className="z-15 w-full h-full fixed left-0 top-0 "></div>
          <div
            className="z-20 absolute mt-1"
            onClick={(event) => event.stopPropagation()}
          >
            <nav className="flex flex-col bg-offWhite items-start min-w-40 p-4 border-2 h-full">
              <NavLink to="/">
                <MenuButton text="Dashboard" />
              </NavLink>
              <NavLink to="/jobtracker">
                <MenuButton text="Job Tracker" />
              </NavLink>
              <NavLink to="/jobtable">
                <MenuButton text="Job Table" />
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
