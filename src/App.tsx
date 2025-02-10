import { KanbanBoard } from "./components/KanbanBoard/KanbanBoard"
import { MenuBar } from "./components/Menu/MenuBar"

export const App = () => {
  return (
    <div className="flex w-full bg-amber-300">
      <MenuBar />
      <KanbanBoard />
    </div>
  )
}
