type MenuButtonProps = {
  text: string
  onClickHandler?: () => void
}

export const MenuButton = ({ text, onClickHandler }: MenuButtonProps) => {
  return (
    <button
      className="p-2 text-lg font-bold cursor-pointer text-blue hover:text-darkBlue"
      onClick={onClickHandler}
    >
      {text}
    </button>
  )
}
