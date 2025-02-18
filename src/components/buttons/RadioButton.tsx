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
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={onClickHandler}
    >
      <div className="rounded-full border-lightGray bg-offWhite w-5.5 h-5.5 flex items-center justify-center border-1 ">
        {priority.toLowerCase() == text.toLowerCase() && (
          <div className="rounded-full bg-darkBlue w-3 h-3 "> </div>
        )}
      </div>
      <div>{text}</div>
    </div>
  )
}
