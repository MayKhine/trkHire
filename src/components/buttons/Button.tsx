type ButtonProps = {
  text: string
  onClickHandler?: () => void
}

export const Button = ({ text, onClickHandler }: ButtonProps) => {
  return (
    <button
      className="bg-blue-100 border-solid border-1 border-pink-500 w-36  p-2 rounded shadow cursor-pointer hover:bg-blue-200"
      onClick={onClickHandler}
    >
      {text}
    </button>
  )
}
