import { useState } from "react"
import { ResizableBox } from "react-resizable"
import "react-resizable/css/styles.css"

// Types for grid items
interface GridItem {
  id: number
  content: string
  desc: string
  width: number
}
export const Test = () => {
  const [gridItems, setGridItems] = useState<GridItem[]>([
    { id: 1, content: "Job 1", desc: "3e4r2wgfmavlmlariierat", width: 100 },
    {
      id: 2,
      content: "Job 2",
      desc: "3e4r2wgdsfdsdfsfmavlmlariierat",
      width: 100,
    },
    { id: 3, content: "Job 3", desc: "3e4r2wgfmavlmlariierat", width: 100 },
    {
      id: 4,
      content: "Job 4",
      desc: "3e4r2wgfmavlmsssssssslariierat",
      width: 100,
    },
  ])

  // Handle resize stop event
  const onResizeStop = (index: number, newSize: { width: number }) => {
    const updatedItems = [...gridItems]
    updatedItems[index] = { ...updatedItems[index], ...newSize }
    setGridItems(updatedItems)
  }
  return (
    <div>
      <div
        className="grid-container bg-green-100"
        style={{
          display: "grid",
          // gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateColumns: "auto auto auto auto",
          gap: "10px",
        }}
      >
        {gridItems.map((item, index) => (
          <ResizableBox
            className="bg-yellow-200"
            key={item.id}
            width={item.width}
            axis="x"
            minConstraints={[100, 100]}
            maxConstraints={[500, 400]}
            onResizeStop={(e, data) =>
              onResizeStop(index, {
                width: data.size.width,
              })
            }
          >
            <div className="bg-pink-300">{item.content}</div>
          </ResizableBox>
        ))}
      </div>
    </div>
  )
}
