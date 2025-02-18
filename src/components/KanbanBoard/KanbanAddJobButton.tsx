type KanbanAddJobButtonProps = {
  onClickHandler: () => void
}

export const KanbanAddJobButton = ({
  onClickHandler,
}: KanbanAddJobButtonProps) => {
  return (
    <button
      className="bg-lightYellow w-full flex p-3 rounded-3xl border-2 border-lightBlue1 box-border cursor-pointer hover:bg-yellow "
      onClick={onClickHandler}
    >
      + Add a job
    </button>
  )
}
