type ExpendButtonProps = {
  onClickHandler: () => void
}
export const ExpendButton = ({ onClickHandler }: ExpendButtonProps) => {
  return <button onClick={onClickHandler}> </button>
}
