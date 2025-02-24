import { MenuBar } from "../menu/MenuBar"
import { jobByStatusColumns } from "../../utils/data"
import { jobByStatusColumnsType, reChartPieDataType } from "../../utils/types"
import { PieChartGraph } from "../charts/PieChartGraph"
import { ColorPicker } from "../charts/ColorPicker"
import { useState } from "react"
export const HomePg = () => {
  const getTheJobsByStatus = (
    jobByStatusColumns: Array<jobByStatusColumnsType>
  ) => {
    return jobByStatusColumns.map((col) => ({
      name: col.colTitle,
      value: col.jobs.length,
    })) as reChartPieDataType
  }

  const jobData = getTheJobsByStatus(jobByStatusColumns)
  const [legendColorArr, setLegendColorArr] = useState([
    { id: "saved", color: "green" },
    { id: "applied", color: "blue" },
    { id: "interview", color: "yellow" },
    { id: "offer", color: "pink" },
    { id: "rejected", color: "red" },
  ])

  console.log("legend Color arr: ", legendColorArr[0])
  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <div className="bg-pink-200 w-full h-full overflow-hidden flex flex-col relative">
        <div className="text-2xl font-bold p-6 border-2 border-l-0">
          Welcome
        </div>
        <div className="bg-amber-200 gap-6 flex flex-col h-full border-b-2 border-r-2 overflow-x-auto max-w-[100%] ">
          <div className="flex bg-amber-600 relative">
            Legend
            {legendColorArr.map((e, index) => {
              return (
                <ColorPicker
                  key={index}
                  color={e.color}
                  text={e.id}
                  onColorChangeHandler={(val: string) => {
                    console.log("color change called", e.id, val)
                    setLegendColorArr((prev) => {
                      return prev.map((item) => {
                        return item.id === e.id ? { ...item, color: val } : item
                      })
                    })
                  }}
                />
              )
            })}
          </div>
          <div className="overflow-x-auto max-w-[100%] h-full">
            <div> Colors </div>
            <div>
              <PieChartGraph dataArr={jobData} width={250} height={250} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
