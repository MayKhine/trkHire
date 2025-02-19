import { MenuBar } from "../menu/MenuBar"

export const HomePg = () => {
  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <div> This is home page. This will host the dashboard</div>
    </div>
  )
}
