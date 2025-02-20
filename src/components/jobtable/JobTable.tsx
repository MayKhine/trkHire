import "react-resizable/css/styles.css"
import { ResizableJobItem } from "./ResizableJobItem"
import { columnsForJobTables, jobs } from "../../utils/data"

export const JobTable = () => {
  // Handle resize stop event
  const onResizeStop = (width: number) => {
    columnsForJobTables.width = width
  }

  const jobKeys = Object.keys(jobs[0])
  console.log(jobKeys)

  return (
    <div className="w-max">
      <div className="bg-offWhite">
        <div className="grid grid-flow-col w-max">
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
                        className="w-full overflow-hidden text-ellipsis whitespace-nowrap border-b-1 h-10 pl-2 pt-2"
                        style={{ width: "100%" }}
                      >
                        {String(job[key] ?? "  ")}
                      </div>
                    )
                  })}
                </div>
              </ResizableJobItem>
            )
          })}
        </div>
      </div>
    </div>
  )
}
