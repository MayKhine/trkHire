import { MenuBar } from "../menu/MenuBar"
import { jobByStatusColumns } from "../../utils/data"
import {
  jobByStatusColumnsType,
  jobStatusType,
  reChartPieDataType,
} from "../../utils/types"
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
    { id: "saved" as jobStatusType, color: "green" },
    { id: "applied" as jobStatusType, color: "blue" },
    { id: "interview" as jobStatusType, color: "yellow" },
    { id: "offer" as jobStatusType, color: "pink" },
    { id: "rejected" as jobStatusType, color: "red" },
  ])

  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <div className="bg-pink-200 w-full h-full overflow-hidden flex flex-col relative">
        <div className="text-2xl font-bold p-6 border-2 border-l-0">
          Welcome
        </div>
        <div className="bg-lightBlue1 gap-6 flex flex-col h-full border-b-2 border-r-2 overflow-x-auto max-w-[100%] ">
          <div className="bg-offWhite flex flex-col justify-center items-center w-full pt-4 pb-4 border-b-2">
            <div className="flex">
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
                          return item.id === e.id
                            ? { ...item, color: val }
                            : item
                        })
                      })
                    }}
                  />
                )
              })}
            </div>
            <div className="text-lg font-bold"> Legend</div>
          </div>
          <div className="ml-4 bg-amber-200 w-max flex flex-col justify-center items-center">
            <div>
              <PieChartGraph
                dataArr={jobData}
                width={250}
                height={250}
                colorArr={legendColorArr}
              />
            </div>
            <div>Pie Char by Status</div>
          </div>
        </div>
      </div>
    </div>
  )
}
