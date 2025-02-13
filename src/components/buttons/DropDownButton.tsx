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
      className="text-darkGray w-full p-2 cursor-pointer hover:bg-lightYellow flex justify-start "
    >
      {text}
    </button>
  )
}
