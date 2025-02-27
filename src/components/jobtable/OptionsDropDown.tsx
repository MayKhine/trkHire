import { TextButton } from "../buttons/TextButton"

type OptionsDropDownProps = {
  closeTheDropDownHandler: () => void
}

export const OptionsDropDown = ({
  closeTheDropDownHandler,
}: OptionsDropDownProps) => {
  return (
    <div className="bg-offWhite border-1 rounded-sm ">
      <TextButton
        text="edit"
        onClickHandler={() => {
          console.log("to do - edit ")
          closeTheDropDownHandler()
        }}
      />

      <TextButton
        text="delete"
        onClickHandler={() => {
          console.log("to do - delete ")
          closeTheDropDownHandler()
        }}
      />
    </div>
  )
}
