import { useState } from "react"
import { jobType } from "../utils/types"
import { jobColumns } from "../utils/data"
import { DndContext } from "@dnd-kit/core"
import { KanbanColumn } from "./KanbanColumn"

export const KanbanBoard = () => {
  const [columns, setColumns] = useState(jobColumns)

  const [activeJob, setActiveJob] = useState<jobType | null>(null)

  const handleDragStart = (event: any) => {
    setActiveJob(event.active.data.current?.job)
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    console.log("handle drag end :", active.id, over.id)
    if (!over) return

    //look for the current job's column using its id in all columns
    const fromColumn = columns.find((col) =>
      col.jobs.some((job) => job.id === active.id)
    )

    //get the to column from over
    const toColumn = columns.find((col) => col.id === over.id)
  }

  return (
    <div className="bg-pink-300 h-full">
      Kanban board
      <DndContext
        // collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
          {columns.map((column) => (
            <KanbanColumn key={column.id} column={column} />
          ))}
        </div>

        {/* <DragOverlay>{activeJob && <KanbanCard job={activeJob} />}</DragOverlay> */}
      </DndContext>
    </div>
  )
}
