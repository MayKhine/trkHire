import { MenuBar } from "../menu/MenuBar"
import { jobByStatusColumns } from "../../utils/data"
import { jobByStatusColumnsType, reChartPieDataType } from "../../utils/types"
import { PieChartGraph } from "../charts/PieChartGraph"
import { Legend } from "../charts/Legend"
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
  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <div className="bg-pink-600 w-full h-full overflow-hidden flex flex-col">
        <div className="text-2xl font-bold p-6 border-2 border-l-0">
          Welcome
        </div>
        <div className="bg-pink-200 gap-6 flex flex-col h-full border-b-2 border-r-2">
          <div className="flex bg-amber-200">
            Legend
            <Legend initalColor="#388743" text="saved" />
            <Legend initalColor="#388743" text="applied" />
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
