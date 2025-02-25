import { useDroppable } from "@dnd-kit/core"
import { jobByStatusColumnsType } from "../../utils/types"
import { KanbanCard } from "./KanbanCard"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { KanbanAddJobButton } from "./KanbanAddJobButton"
import { useState } from "react"
import { jobs } from "../../utils/data"
import { JobForm } from "../forms/JobForm"
type KanbanColumnProps = {
  column: jobByStatusColumnsType
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
      className="w-64 min-w-64 bg-offWhite p-4 rounded-lg shadow-md min-h-[300px] "
    >
      <h2 className="text-lg font-bold mb-2">{column.colTitle}</h2>

      <SortableContext
        items={column.jobs.map((jobId) => jobId)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-4">
          {column.jobs.map((jobId) => {
            const curJob = jobs.find((element) => element.id === jobId)!
            return <KanbanCard key={jobId} job={curJob} colId={column.id} />
          })}

          <KanbanAddJobButton
            onClickHandler={() => {
              setJobFormModalToggle(true)
            }}
          />
        </div>
      </SortableContext>

      {jobFormModalToggle && (
        <JobForm
          onCancleHandler={() => {
            setJobFormModalToggle(false)
          }}
          jobStatus={column.id}
        ></JobForm>
      )}
    </div>
  )
}
