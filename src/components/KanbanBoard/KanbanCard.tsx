import { jobType } from "../../utils/types"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

type KanbanCardProps = {
  colId?: string
  job: jobType
}
export const KanbanCard = ({ colId, job }: KanbanCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: job.id, data: { job, colId } })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-blue-100 p-3 rounded shadow cursor-grab hover:bg-blue-200 active:opacity-50"
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <div> {job.id}</div>
      <div> {job.title}</div>
      <div> {job.company}</div>
    </div>
  )
}
