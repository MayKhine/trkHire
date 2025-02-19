import { ResizableBox } from "react-resizable"

type ResizableJobItemProps = {
  id: number
  text: string
  width: number
  index: number
  onResizeHandler: (width: number) => void
}
export const ResizableJobItem = ({
  id,
  text,
  width,
  onResizeHandler,
}: ResizableJobItemProps) => {
  return (
    <ResizableBox
      className="bg-yellow-200"
      key={id}
      width={width}
      axis="x"
      minConstraints={[100, 100]}
      maxConstraints={[500, 400]}
      onResizeStop={(_, data) => onResizeHandler(data.size.width)}
    >
      <div className="bg-pink-300">{text}</div>
    </ResizableBox>
  )
}
