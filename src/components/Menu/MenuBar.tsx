import { NavLink } from "react-router-dom"
import { MenuButton } from "./MenuButton"

export const MenuBar = () => {
  return (
    <div className="flex flex-col bg-offWhite items-start p-4 border-2 h-full min-w-40">
      <div className="text-2xl font-bold pb-4">TrkHire</div>

      <nav className="flex flex-col items-start">
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
