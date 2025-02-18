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
          <MdKeyboardDoubleArrowDown size={20} className="h-6" />
        </button>
      )}

      {expendToggle && (
        <button onClick={onClickHandler} className="cursor-pointer">
          <MdKeyboardDoubleArrowUp size={20} className="h-6" />
        </button>
      )}
    </div>
  )
}
