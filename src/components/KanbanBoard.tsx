import { useState } from "react"
import { jobColumnType, jobType } from "../utils/types"
import { jobColumns } from "../utils/data"
import { closestCorners, DndContext, DragOverlay } from "@dnd-kit/core"
import { KanbanColumn } from "./KanbanColumn"
import { KanbanCard } from "./KanbanCard"
import { SortableContext } from "@dnd-kit/sortable"

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

    //return if no from or to or they are same columns
    if (!fromColumn || !toColumn || fromColumn === toColumn) return

    //filter out the current job from its column
    const fromJobs = fromColumn.jobs.filter((job) => job.id !== active.id)
    //add current job to its new column
    const toJobs = [...toColumn.jobs, activeJob!]

    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === fromColumn.id
          ? { ...col, jobs: fromJobs }
          : col.id === toColumn.id
          ? { ...col, jobs: toJobs }
          : col
      )
    )

    setActiveJob(null)
    console.log("jobcolumn: ", columns)

    // setColumns((prev) => {
    //   const updated = [...prev]

    //   const fromColumn = updated.find((col) => col.id === fromColumnId)
    //   const toColumn = updated.find((col) => col.id === toColumnId)

    //   if (!fromColumn || !toColumn) return prev

    //   const job = fromColumn.jobs.find((j) => j.id === active.id)
    //   fromColumn.jobs = fromColumn.jobs.filter((j) => j.id !== active.id)

    //   // Insert into the correct index
    //   const overIndex = toColumn.jobs.findIndex((j) => j.id === over.id)
    //   if (overIndex === -1) {
    //     toColumn.jobs.push(job)
    //   } else {
    //     toColumn.jobs.splice(overIndex, 0, job)
    //   }

    //   return updated
    // })
  }

  return (
    <div className="bg-pink-300 h-full">
      Kanban board
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
          {columns.map((column) => (
            <KanbanColumn key={column.id} column={column} />
          ))}
        </div>

        <DragOverlay>{activeJob && <KanbanCard job={activeJob} />}</DragOverlay>
      </DndContext>
    </div>
  )
}
