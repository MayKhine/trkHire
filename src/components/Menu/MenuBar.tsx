import { NavLink } from "react-router-dom"
import { MenuButton } from "./MenuButton"

export const MenuBar = () => {
  return (
    <div className="bg-offWhite w-50 p-4 flex items-start">
      <nav>
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
