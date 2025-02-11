type MenuButtonProps = {
  text: string
  onClickHandler?: () => void
}

export const MenuButton = ({ text, onClickHandler }: MenuButtonProps) => {
  return (
    <button
      className="p-2 text-lg font-bold cursor-pointer text-fuchsia-500 hover:text-amber-950"
      onClick={onClickHandler}
    >
      {text}
    </button>
  )
}
