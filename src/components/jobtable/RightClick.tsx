import { OptionsDropDown } from "./OptionsDropDown"

type RightClickProps = {
  onBgDivClickHander: () => void
  onRightClickHandler: (event: React.MouseEvent<HTMLDivElement>) => void
}
export const RightClick = ({
  onBgDivClickHander,
  onRightClickHandler,
}: RightClickProps) => {
  return (
    <div
      onClick={() => {
        // setRightClick({ id: "" })
        onBgDivClickHander()
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
        <OptionsDropDown />
      </div>
    </div>
  )
}
