type DeleteButtonProps = {
  onClickHandler: () => void
}

export const DeleteButton = ({ onClickHandler }: DeleteButtonProps) => {
  return <button onClick={onClickHandler}> Delete </button>
}
