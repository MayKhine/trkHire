import { useDroppable } from "@dnd-kit/core"
import { jobColumnType } from "../utils/types"
import { KanbanCard } from "./KanbanCard"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

type KanbanColumnProps = {
  column: jobColumnType
}

export const KanbanColumn = ({ column }: KanbanColumnProps) => {
  // const { setNodeRef } = useDroppable({ id: column.id })
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: { columnId: column.id },
  })

  return (
    // <div ref={setNodeRef} className="w-64 bg-white p-4 rounded-lg shadow-md">
    //   <h2 className="text-lg font-bold mb-2">{column.id}</h2>

    //   <SortableContext
    //     items={column.jobs}
    //     // items={column.jobs.map((job) => job.id)}
    //     strategy={verticalListSortingStrategy}
    //   >
    //     <div className="space-y-2">
    //       {column.jobs.map((job) => (
    //         <KanbanCard key={job.id} job={job} />
    //       ))}
    //     </div>
    //   </SortableContext>
    // </div>
    <div
      ref={setNodeRef}
      className="w-64 bg-gray-100 p-4 rounded-lg shadow-md min-h-[300px]"
    >
      <h2 className="text-lg font-bold mb-2">{column.id}</h2>

      <SortableContext
        items={column.jobs.map((job) => job.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {column.jobs.map((job) => (
            <KanbanCard key={job.id} job={job} colId={column.id} />
          ))}
        </div>
      </SortableContext>
    </div>
  )
}
