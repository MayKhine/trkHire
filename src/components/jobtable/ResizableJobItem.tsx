import { ReactNode } from "react"
import { ResizableBox } from "react-resizable"

type ResizableJobItemProps = {
  id: string
  text: string
  width: number
  index: number
  onResizeHandler: (id: string, width: number) => void
  children: ReactNode
}
export const ResizableJobItem = ({
  id,
  text,
  width,
  onResizeHandler,
  children,
}: ResizableJobItemProps) => {
  return (
    <ResizableBox
      className="flex"
      key={id}
      width={width}
      axis="x"
      minConstraints={[50, 150]}
      onResizeStop={(_, data) => onResizeHandler(id, data.size.width)}
      handle={
        <div className="custom-handle text-pink-500 border-r-2 h-full cursor-grab z-10"></div>
      }
    >
      <div className="w-full">
        <div className="text-lg font-bold border-b-2 p-2 w-full overflow-hidden text-ellipsis whitespace-nowrap h-10 pl-2 pt-2">
          {text}
        </div>
        {children}
      </div>
    </ResizableBox>
  )
}
