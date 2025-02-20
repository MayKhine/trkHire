import { KanbanBoard } from "../kanbanboard/KanbanBoard"
import { MenuBar } from "../menu/MenuBar"

export const KanbanBoardPg = () => {
  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <div className="bg-pink-600 w-full h-full overflow-hidden flex flex-col">
        <div className="text-2xl font-bold p-6 border-2 border-l-0">
          Job Tracker
        </div>
        <div className="bg-pink-200 gap-6 flex flex-col h-full border-b-2 border-r-2">
          <div className="overflow-x-scroll max-w-[100%] h-full">
            <KanbanBoard />
          </div>
        </div>
      </div>
    </div>
  )
}
