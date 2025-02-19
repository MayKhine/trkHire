import { KanbanBoard } from "../kanbanboard/KanbanBoard"
import { MenuBar } from "../menu/MenuBar"

export const KanbanBoardPg = () => {
  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <KanbanBoard />
    </div>
  )
}
