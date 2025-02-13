import { MenuButton } from "./MenuButton"

export const MenuBar = () => {
  return (
    <div className="bg-offWhite min-w-50 p-4 flex flex-col items-start">
      <MenuButton text="Dashboard" />
      <MenuButton text="Job Tracker" />
      <MenuButton text="Job Table" />
    </div>
  )
}
