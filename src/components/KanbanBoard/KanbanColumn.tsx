import { useDroppable } from "@dnd-kit/core"
import { jobColumnType } from "../../utils/types"
import { KanbanCard } from "./KanbanCard"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { KanbanAddJobButton } from "./KanbanAddJobButton"
import { useState } from "react"
import { JobFormModal } from "../modals/JobFormModal"

type KanbanColumnProps = {
  column: jobColumnType
}

export const KanbanColumn = ({ column }: KanbanColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: { columnId: column.id },
  })
  const [jobFormModalToggle, setJobFormModalToggle] = useState(false)
  return (
    <div
      ref={setNodeRef}
      className="w-64 bg-gray-100 p-4 rounded-lg shadow-md min-h-[300px]"
    >
      <h2 className="text-lg font-bold mb-2">{column.colTitle}</h2>

      <SortableContext
        items={column.jobs.map((job) => job.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {column.jobs.map((job) => (
            <KanbanCard key={job.id} job={job} colId={column.id} />
          ))}

          <KanbanAddJobButton
            onClickHandler={() => {
              setJobFormModalToggle(true)
            }}
          />
        </div>
      </SortableContext>

      {jobFormModalToggle && (
        <JobFormModal
          onAddHandler={() => {
            console.log("Tod o . add job")
          }}
          onCancleHandler={() => {
            setJobFormModalToggle(false)
          }}
        ></JobFormModal>
      )}
    </div>
  )
}
