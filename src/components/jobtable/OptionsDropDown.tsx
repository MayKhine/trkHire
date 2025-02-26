import { TextButton } from "../buttons/TextButton"
export const OptionsDropDown = () => {
  return (
    <div className="bg-offWhite border-1 rounded-sm ">
      <TextButton
        text="edit"
        onClickHandler={() => {
          console.log("to do - edit ")
        }}
      />

      <TextButton
        text="delete"
        onClickHandler={() => {
          console.log("to do - delete ")
        }}
      />
    </div>
  )
}
