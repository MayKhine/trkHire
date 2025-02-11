import { useState } from "react"
import { JobApplicationType } from "../../utils/types"
// import { jobColumns } from "../../utils/data"
import { jobByStatusColumns } from "../../utils/data"

import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core"
import { KanbanColumn } from "./KanbanColumn"
import { KanbanCard } from "./KanbanCard"
import { arrayMove } from "@dnd-kit/sortable"
import { jobs as initialJobs } from "../../utils/data"

export const KanbanBoard = () => {
  const [columns, setColumns] = useState(jobByStatusColumns)
  const [jobs, setJobs] = useState(initialJobs)

  const [activeJob, setActiveJob] = useState<JobApplicationType | null>(null)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveJob(event.active.data.current?.job)
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return

    // console.log(
    //   "active. ",
    //   active,
    //   active.data.current?.colId,
    //   "over",
    //   over.data.current?.colId
    // )

    // const fromColumn = columns.find((col) =>
    //   col.jobs.some((job) => job.id === active.id)
    // )

    // const fromColumn = columns.find((col) =>
    //   col.jobs.some((job) => job.id === active.id)
    // )

    // const toColumn = columns.find((col) =>
    //   col.jobs.some((job) => job.id === over.id)
    // )

    // const fromColumnId = fromColumn?.id
    // let toColumnId = toColumn?.id

    const fromColumnId = active.data.current?.colId
    let toColumnId = over.data.current?.colId

    if (!toColumnId) toColumnId = over.id.toString()

    if (!fromColumnId || !toColumnId || fromColumnId === toColumnId) return

    setColumns((prev) => {
      const updated = [...prev]
      const updatedFromColumn = updated.find((col) => col.id === fromColumnId)
      const updatedToColumn = updated.find((col) => col.id === toColumnId)

      if (!updatedFromColumn || !updatedToColumn) return prev

      // Move the job to a new column
      // const job = updatedFromColumn.jobs.find((j) => j.id === active.id)
      // updatedFromColumn.jobs = updatedFromColumn.jobs.filter(
      //   (j) => j.id !== active.id
      // )

      const job = updatedFromColumn.jobs.find((jobId) => jobId === active.id)
      updatedFromColumn.jobs = updatedFromColumn.jobs.filter(
        (jobId) => jobId !== active.id
      )

      if (job) updatedToColumn.jobs.push(job)

      return updated
    })

    //also set the job
    setJobs((prev) => {
      return prev.map((job) =>
        job.id === active.id
          ? { ...job, status: over.data.current?.colId ?? over.id }
          : job
      )
    })
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveJob(null)

    const { active, over } = event
    if (!over) return

    // const fromColumn = columns.find((col) =>
    //   col.jobs.some((job) => job.id === active.id)
    // )

    // const toColumn = columns.find((col) =>
    //   col.jobs.some((job) => job.id === over.id)
    // )

    // const fromColumnId = fromColumn?.id
    // const toColumnId = toColumn?.id

    const fromColumnId = active.data.current?.colId
    const toColumnId = over.data.current?.colId

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
          (jobId) => jobId === active.id
        )

        const newIndex = updatedToColumn.jobs.findIndex(
          (jobId) => jobId === over.id
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

  console.log("Job: ", jobs[0])
  return (
    <div className="h-full bg-red-200 flex flex-col">
      <div className="text-2xl font-bold p-6"> Job Tracker </div>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 p-6 bg-pink-100 h-full">
          {columns.map((column) => (
            <KanbanColumn key={column.id} column={column} />
          ))}
        </div>

        <DragOverlay>{activeJob && <KanbanCard job={activeJob} />}</DragOverlay>
      </DndContext>
    </div>
  )
}
