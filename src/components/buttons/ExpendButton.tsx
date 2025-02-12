import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"

type ExpendButtonProps = {
  onClickHandler: () => void
  expendToggle: boolean
}
export const ExpendButton = ({
  onClickHandler,
  expendToggle,
}: ExpendButtonProps) => {
  return (
    <div>
      {!expendToggle && (
        <button onClick={onClickHandler} className="cursor-pointer">
          <MdKeyboardDoubleArrowDown className="bg-pink-300 w-8 h-8" />
        </button>
      )}

      {expendToggle && (
        <button onClick={onClickHandler} className="cursor-pointer">
          <MdKeyboardDoubleArrowUp className="bg-pink-300 w-8 h-8" />
        </button>
      )}
    </div>
  )
}
