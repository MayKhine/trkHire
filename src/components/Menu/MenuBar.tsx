import { NavLink } from "react-router-dom"
import { MenuButton } from "./MenuButton"

export const MenuBar = () => {
  return (
    <div>
      <nav className="flex flex-col bg-offWhite items-start bg-pink min-w-50 p-4 h-full">
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
  )
}
