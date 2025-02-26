import "react-resizable/css/styles.css"
import { ResizableJobItem } from "./ResizableJobItem"
import { columnsForJobTables } from "../../utils/data"
import { loadJobsFromLocalStorage } from "../../utils/localStorageUtils"
import { useRef, useState } from "react"
import { RightClick } from "./RightClick"

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
    // Get container's bounding rectangle
    const containerRect = containerRef.current?.getBoundingClientRect()

    // Calculate coordinates relative to the container if available, or fallback to page coordinates
    const x = containerRect ? event.clientX - containerRect.left : event.clientX
    const y = containerRect ? event.clientY - containerRect.top : event.clientY

    setMenuPosition({ x, y })

    event.preventDefault() // Prevent default context menu
    setRightClick({ id: jobId })
    console.log("Right-click detected!", event, jobId)
  }

  const [menuPosition, setMenuPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-max border-l-2 border-t-2 border-b-1 ml-6 mr-6">
      <div className="bg-offWhite">
        <div
          className="grid grid-flow-col w-max"
          onMouseLeave={() => {
            setMouseHoverJob({ id: "" })
          }}
          ref={containerRef}
          onClick={() => {
            setMenuPosition(null)
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
                  <div
                    key={job.id + jobIndex}
                    className=":hover-bg-pink-300 w-full border-b-1 h-10 pt-2 pl-2"
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

                  {/* {mouseHoverJob.id != job.id && (
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
                  )} */}
                  {/* 
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
                  )} */}

                  {rightClick.id == job.id && menuPosition && (
                    <div
                      style={{
                        position: "absolute",
                        top: menuPosition.y,
                        left: menuPosition.x,
                        zIndex: 20,
                      }}
                    >
                      <RightClick
                        onBgDivClickHander={() => {
                          setRightClick({ id: "" })
                        }}
                        onRightClickHandler={(
                          event: React.MouseEvent<HTMLDivElement>
                        ) => {
                          onRightClickHandler(event, "")
                        }}
                      />
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
                            onContextMenu={(event) => {
                              onRightClickHandler(event, job.id)
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
                            onContextMenu={(event) => {
                              onRightClickHandler(event, job.id)
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
