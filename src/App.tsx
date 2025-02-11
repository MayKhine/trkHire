import { KanbanBoard } from "./components/kanbanboard/KanbanBoard"
import { MenuBar } from "./components/menu/MenuBar"

export const App = () => {
  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <KanbanBoard />
    </div>
  )
}
