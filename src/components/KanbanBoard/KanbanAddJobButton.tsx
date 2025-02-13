type KanbanAddJobButtonProps = {
  onClickHandler: () => void
}

export const KanbanAddJobButton = ({
  onClickHandler,
}: KanbanAddJobButtonProps) => {
  return (
    <button
      className="bg-lightYellow w-full flex p-3 rounded shadow cursor-pointer hover:bg-yellow "
      onClick={onClickHandler}
    >
      + Add a job
    </button>
  )
}
