import { HamburgerMenu } from "./HamburgerMenu"
import { MenuBar } from "./MenuBar"

export const Menu = () => {
  return (
    <div>
      <div className="block md:hidden">
        <div className="flex w-full bg-red-500">
          <HamburgerMenu />
        </div>
      </div>

      <div className="hidden md:block h-full">
        <div className="flex h-full">
          <MenuBar />
        </div>
      </div>
    </div>
  )
}
