import { OptionsDropDown } from "./OptionsDropDown"

type RightClickProps = {
  onCloseTheDropDownHandler: () => void
  onRightClickHandler: (event: React.MouseEvent<HTMLDivElement>) => void
}
export const RightClick = ({
  onCloseTheDropDownHandler,
  onRightClickHandler,
}: RightClickProps) => {
  return (
    <div
      onClick={() => {
        onCloseTheDropDownHandler()
      }}
      onContextMenu={(event) => {
        onRightClickHandler(event)
      }}
    >
      <div className="z-15 w-full h-full fixed left-0 top-0 bg-blue-500/0"></div>
      <div
        className="z-20 absolute mt-1"
        onClick={(event) => event.stopPropagation()}
      >
        <OptionsDropDown
          closeTheDropDownHandler={() => {
            onCloseTheDropDownHandler()
          }}
        />
      </div>
    </div>
  )
}
