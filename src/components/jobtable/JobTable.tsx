import "react-resizable/css/styles.css"
import { ResizableJobItem } from "./ResizableJobItem"
import { columnsForJobTables, jobs } from "../../utils/data"

export const JobTable = () => {
  // Handle resize stop event
  const onResizeStop = (width: number) => {
    // const updatedItems = gridItems.map((item) => {
    //   return { ...item, width: width } // Update the width of every item
    // })

    // setGridItems(updatedItems)
    console.log("before", columnsForJobTables.width)

    columnsForJobTables.width = width
    console.log(columnsForJobTables.width)
  }

  const jobKeys = Object.keys(jobs[0])
  console.log(jobKeys)

  return (
    <div className="bg-offWhite w-full">
      <div className="grid grid-flow-col gap-4 bg-amber-100 w-max">
        {/* <div className="custom-handle text-amber-900 border-2 h-full pr-"></div> */}

        {/* <div className="overflow-hidden min-w-0 w-30">
          <div className="bg-amber-200 w-full  overflow-hidden text-ellipsis whitespace-nowrap block">
            TESTTEST TEST
          </div>
        </div> */}
        {columnsForJobTables.columns.map((col, index) => {
          return (
            <ResizableJobItem
              key={index}
              id={col.id}
              width={columnsForJobTables.width}
              index={index}
              text={col.text}
              onResizeHandler={(width: number) => {
                onResizeStop(width)
              }}
            >
              <div>
                {jobs.map((job, jobIndex) => {
                  const key = col.id as keyof typeof job
                  return (
                    <div
                      key={job.id + jobIndex}
                      className="w-full overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{ width: "100%" }}
                    >
                      {String(job[key] ?? "-")}
                    </div>
                  )
                })}
              </div>
            </ResizableJobItem>
          )
        })}
      </div>
    </div>
  )
}
