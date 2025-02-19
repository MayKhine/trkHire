import { ReactNode } from "react"
import { ResizableBox } from "react-resizable"

type ResizableJobItemProps = {
  id: string
  text: string
  width: number
  index: number
  onResizeHandler: (width: number) => void
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
      className="bg-pink-200 flex"
      key={id}
      width={width}
      axis="x"
      minConstraints={[150, 150]}
      // minConstraints={[150]}
      // maxConstraints={[500, 400]}
      onResizeStop={(_, data) => onResizeHandler(data.size.width)}
      handle={
        <div className="custom-handle text-amber-900 border-r-2 h-full cursor-grab "></div>
      }
    >
      <div className="w-full pr-4">
        <div className="text-lg font-bold">{text}</div>
        {children}
      </div>
    </ResizableBox>
  )
}
