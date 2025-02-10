import { useDroppable } from "@dnd-kit/core"
import { jobColumnType } from "../utils/types"
import { KanbanCard } from "./KanbanCard"

type KanbanColumnProps = {
  column: jobColumnType
}

export const KanbanColumn = ({ column }: KanbanColumnProps) => {
  const { setNodeRef } = useDroppable({ id: column.id })

  return (
    <div ref={setNodeRef} className="w-64 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">{column.id}</h2>
      <div className="space-y-2">
        {column.jobs.map((job) => (
          <KanbanCard key={job.id} job={job} />
        ))}
      </div>
      {/* <SortableContext
        items={column.jobs}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {column.jobs.map((job) => (
            <KanbanCard key={job.id} job={job} />
          ))}
        </div>
      </SortableContext> */}
    </div>
  )
}
