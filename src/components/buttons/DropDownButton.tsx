type DropDownButtonProps = {
  text: string
  onClickHandler: () => void
}
export const DropDownButton = ({
  text,
  onClickHandler,
}: DropDownButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      className="bg-blue-100 border-solid border-1 border-pink-500 w-full p-2 rounded shadow cursor-pointer hover:bg-blue-200 flex justify-start"
    >
      {text}
    </button>
  )
}
