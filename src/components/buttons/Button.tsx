type ButtonProps = {
  text: string
  onClickHandler?: () => void
}

export const Button = ({ text, onClickHandler }: ButtonProps) => {
  return (
    <button
      className="bg-darkBlue text-offWhite font-bold  w-36  p-2 rounded-3xl  cursor-pointer hover:bg-blue hover:text-yellow"
      onClick={onClickHandler}
    >
      {text}
    </button>
  )
}
