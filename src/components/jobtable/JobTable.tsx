import { useState } from "react"
import { ResizableBox } from "react-resizable"
import "react-resizable/css/styles.css"
import { ResizableJobItem } from "./ResizableJobItem"

// Types for grid items
interface GridItem {
  id: number
  content: string
  desc: string
  width: number
}
export const JobTable = () => {
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
  const onResizeStop = (width: number) => {
    const updatedItems = gridItems.map((item) => {
      return { ...item, width: width } // Update the width of every item
    })

    setGridItems(updatedItems)
  }
  return (
    <div className="bg-offWhite w-full">
      <div className="grid grid-flow-row gap-6 bg-amber-100 w-max">
        {gridItems.map((item, index) => {
          return (
            <div key={index} className="grid grid-flow-col bg-amber-300 gap-4">
              <ResizableJobItem
                id={item.id}
                width={item.width}
                index={index}
                text={item.content}
                onResizeHandler={(width: number) => {
                  onResizeStop(width)
                }}
              ></ResizableJobItem>
              <div className="bg-amber-50 w-50"> {item.content}</div>
              <div className="bg-amber-50 w-70"> {item.desc}</div>
              <div className="bg-amber-50 w-35"> {item.width}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
