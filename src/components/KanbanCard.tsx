import { useDraggable } from "@dnd-kit/core"
import { jobType } from "../utils/types"

type KanbanCardProps = {
  job: jobType
}
export const KanbanCard = ({ job }: KanbanCardProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: job.id,
    data: { job },
  })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-blue-100 p-3 rounded shadow cursor-grab hover:bg-blue-200 active:opacity-50"
      style={{
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      }}
    >
      {job.id} {job.title}
    </div>
  )
}
