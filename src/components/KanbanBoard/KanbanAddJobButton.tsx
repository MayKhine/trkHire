type KanbanAddJobButtonProps = {
  onClickHandler: () => void
}

export const KanbanAddJobButton = ({
  onClickHandler,
}: KanbanAddJobButtonProps) => {
  return (
    <button
      className="bg-blue-100 border-solid border-1 border-pink-500 w-full flex p-3 rounded shadow cursor-pointer hover:bg-blue-200 "
      onClick={onClickHandler}
    >
      + Add a job
    </button>
  )
}
