type MenuButtonProps = {
  text: string
  onClickHandler?: () => void
}

export const MenuButton = ({ text, onClickHandler }: MenuButtonProps) => {
  return (
    <button
      className="pt-2 pb-2 text-lg font-bold cursor-pointer text-blue hover:text-darkBlue"
      onClick={onClickHandler}
    >
      {text}
    </button>
  )
}
