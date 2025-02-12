type RadioButtonProps = {
  onClickHandler: () => void
  text: string
  priority: string
}
export const RadioButton = ({
  text,
  priority,
  onClickHandler,
}: RadioButtonProps) => {
  return (
    <div className="flex gap-2 items-center ">
      <div
        className="rounded-full bg-white w-5 h-5 flex items-center justify-center"
        onClick={onClickHandler}
      >
        {priority.toLowerCase() == text.toLowerCase() && (
          <div className="rounded-full bg-amber-900 w-3 h-3 "> </div>
        )}
      </div>
      <div>{text}</div>
    </div>
  )
}
