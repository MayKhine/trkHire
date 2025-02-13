import { IoMdClose } from "react-icons/io"

type DeleteButtonProps = {
  onClickHandler: () => void
}

export const DeleteButton = ({ onClickHandler }: DeleteButtonProps) => {
  return (
    <button onClick={onClickHandler} className="cursor-pointer text-darkGray">
      <IoMdClose size={20} />
    </button>
  )
}
