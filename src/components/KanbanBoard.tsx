import React, { useState } from "react"
import { jobType } from "../utils/types"
import { jobColumns } from "../utils/data"
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core"
import { KanbanColumn } from "./KanbanColumn"
import { KanbanCard } from "./KanbanCard"
import { arrayMove } from "@dnd-kit/sortable"

export const KanbanBoard = () => {
  const [columns, setColumns] = useState(jobColumns)

  const [activeJob, setActiveJob] = useState<jobType | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveJob(event.active.data.current?.job)
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return

    console.log("active. ", active, "over", over)

    const fromColumn = columns.find((col) =>
      col.jobs.some((job) => job.id === active.id)
    )

    const toColumn = columns.find((col) =>
      col.jobs.some((job) => job.id === over.id)
    )

    const fromColumnId = fromColumn?.id
    let toColumnId = toColumn?.id

    if (!toColumnId) toColumnId = over.id.toString()

    if (!fromColumnId || !toColumnId || fromColumnId === toColumnId) return

    setColumns((prev) => {
      const updated = [...prev]
      const updatedFromColumn = updated.find((col) => col.id === fromColumnId)
      const updatedToColumn = updated.find((col) => col.id === toColumnId)

      if (!updatedFromColumn || !updatedToColumn) return prev

      // Move the job to a new column
      const job = updatedFromColumn.jobs.find((j) => j.id === active.id)
      updatedFromColumn.jobs = updatedFromColumn.jobs.filter(
        (j) => j.id !== active.id
      )
      if (job) updatedToColumn.jobs.push(job)

      return updated
    })
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveJob(null)

    const { active, over } = event
    if (!over) return

    const fromColumn = columns.find((col) =>
      col.jobs.some((job) => job.id === active.id)
    )

    const toColumn = columns.find((col) =>
      col.jobs.some((job) => job.id === over.id)
    )

    const fromColumnId = fromColumn?.id
    const toColumnId = toColumn?.id

    if (!fromColumnId || !toColumnId) return

    setColumns((prev) => {
      const updated = prev.map((column) => ({
        ...column,
        jobs: [...column.jobs], // Make a shallow copy of the jobs array
      }))

      const updatedFromColumn = updated.find((col) => col.id === fromColumnId)
      const updatedToColumn = updated.find((col) => col.id === toColumnId)

      if (!updatedFromColumn || !updatedToColumn) return prev

      // Reorder inside the same column
      if (fromColumnId === toColumnId) {
        const oldIndex = updatedFromColumn.jobs.findIndex(
          (job) => job.id === active.id
        )

        const newIndex = updatedToColumn.jobs.findIndex(
          (job) => job.id === over.id
        )

        console.log("old index", oldIndex, "newindex: ", newIndex)

        updatedFromColumn.jobs = arrayMove(
          updatedFromColumn.jobs,
          oldIndex,
          newIndex
        )
      }
      return updated
    })
  }

  return (
    <div className="bg-pink-300 h-full">
      Kanban board
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
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
