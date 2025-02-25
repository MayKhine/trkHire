import "react-resizable/css/styles.css"
import { ResizableJobItem } from "./ResizableJobItem"
import { columnsForJobTables } from "../../utils/data"
import { loadJobsFromLocalStorage } from "../../utils/localStorageUtils"
import { useState } from "react"

export const JobTable = () => {
  const jobs = loadJobsFromLocalStorage()
  const [mouseHoverJob, setMouseHoverJob] = useState({ id: "" })
  const [rightClick, setRightClick] = useState({ id: "" })
  // Handle resize stop event
  const onResizeStop = (id: string, width: number) => {
    // columnsForJobTables.width = width
    columnsForJobTables.map((col) => {
      if (col.id == id) {
        col.width = width
        return
      }
    })
  }

  const selectJobHandler = (jobId: string) => {
    if (jobId == mouseHoverJob.id) {
      setMouseHoverJob({ id: "" })
      return
    }

    setMouseHoverJob({ id: jobId })
  }

  const onRightClickHandler = (
    event: React.MouseEvent<HTMLDivElement>,
    jobId: string
  ) => {
    event.preventDefault() // Prevent default context menu
    setRightClick({ id: jobId })
    console.log("Right-click detected!", event, jobId)
  }

  return (
    <div className="w-max border-l-2 border-t-2 border-b-1 ml-6 mr-6">
      <div className="bg-offWhite">
        <div
          className="grid grid-flow-col w-max"
          onMouseLeave={() => {
            setMouseHoverJob({ id: "" })
          }}
        >
          <ResizableJobItem
            index={123}
            id="no"
            width={45}
            text="No"
            onResizeHandler={(id: string, width: number) => {
              onResizeStop(id, width)
            }}
          >
            {jobs.map((job, jobIndex) => {
              return (
                <div key={job.id}>
                  {mouseHoverJob.id != job.id && (
                    <div
                      key={job.id + jobIndex}
                      className="w-full border-b-1 h-10 pt-2 pl-2"
                      style={{ width: "100%" }}
                      onMouseEnter={() => {
                        selectJobHandler(job.id)
                      }}
                      onContextMenu={(event) => {
                        onRightClickHandler(event, job.id)
                      }}
                    >
                      {jobIndex + 1}
                    </div>
                  )}

                  {mouseHoverJob.id == job.id && (
                    <div
                      key={job.id + jobIndex}
                      className="bg-pink-300 w-full border-b-1 h-10 pt-2 pl-2"
                      style={{ width: "100%" }}
                      onMouseEnter={() => {
                        selectJobHandler(job.id)
                      }}
                      onContextMenu={(event) => {
                        onRightClickHandler(event, job.id)
                      }}
                    >
                      {jobIndex + 1}
                    </div>
                  )}

                  {rightClick.id == job.id && (
                    <div
                      onClick={() => {
                        setRightClick({ id: "" })
                      }}
                      onContextMenu={(event) => {
                        onRightClickHandler(event, "")
                      }}
                    >
                      <div className="z-15 w-full h-full fixed left-0 top-0 bg-blue-500/50"></div>
                      <div
                        className="z-20 absolute mt-1"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <div className="bg-pink-400">Right CLick</div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </ResizableJobItem>

          {columnsForJobTables.map((col, index) => {
            return (
              <ResizableJobItem
                key={index}
                id={col.id}
                width={columnsForJobTables[index].width}
                index={index}
                text={col.text}
                onResizeHandler={(id: string, width: number) => {
                  onResizeStop(id, width)
                }}
              >
                <div>
                  {jobs.map((job, jobIndex) => {
                    const key = col.id as keyof typeof job
                    return (
                      <div key={job.id + jobIndex}>
                        {mouseHoverJob.id != job.id && (
                          <div
                            key={job.id + jobIndex}
                            className="w-full overflow-hidden text-ellipsis whitespace-nowrap border-b-1 h-10 pl-2 pt-2"
                            style={{ width: "100%" }}
                            onMouseEnter={() => {
                              selectJobHandler(job.id)
                            }}
                          >
                            {String(job[key] ?? "  ")}
                          </div>
                        )}

                        {mouseHoverJob.id == job.id && (
                          <div
                            key={job.id + jobIndex}
                            className="bg-pink-300 w-full overflow-hidden text-ellipsis whitespace-nowrap border-b-1 h-10 pl-2 pt-2"
                            style={{ width: "100%" }}
                            onMouseEnter={() => {
                              selectJobHandler(job.id)
                            }}
                          >
                            {String(job[key] ?? "  ")}
                          </div>
                        )}
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
