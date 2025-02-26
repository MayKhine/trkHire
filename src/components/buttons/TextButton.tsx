type TextButtonProps = {
  text: string
  onClickHandler?: () => void
}
export const TextButton = ({ text, onClickHandler }: TextButtonProps) => {
  return (
    <button
      className="m-1 p-1 w-18 cursor-pointer hover:text-darkBlue hover:bg-lightYellow rounded-sm"
      onClick={onClickHandler}
    >
      {text}
    </button>
  )
}
