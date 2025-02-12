import { useState } from "react"
import { Button } from "../buttons/Button"
import { RadioButton } from "../buttons/RadioButton"
import { DropDownButton } from "../buttons/DropDownButton"
import { JobApplicationType } from "../../utils/types"

type JobFormModalProps = {
  onCancleHandler: () => void
  onAddHandler: () => void
}

type jobStatusType = "saved" | "applied" | "interview" | "offer" | "rejected"
type priorityType = "low" | "medium" | "high"
export const JobFormModal = ({
  onCancleHandler,
  onAddHandler,
}: JobFormModalProps) => {
  // const [priority, setPriority] = useState<priorityType>("medium")
  // const [status, setStatus] = useState<jobStatusType>("saved")
  const [statusDropDownToggle, setStatusDropDownToggle] = useState(false)
  const statusMap: Record<string, string> = {
    saved: "Saved",
    applied: "Applied",
    interview: "Interview",
    offer: "Offer",
    rejected: "Rejected",
  }
  const [newJob, setNewJob] = useState<JobApplicationType>({
    id: "",
    title: "",
    jobLink: "",
    company: "",
    priority: "medium",
    status: "saved",
    archive: false,
  })
  const statusText = statusMap[newJob.status]

  const newJobChangeHandler = (key: string, event: any) => {
    setNewJob((prev) => {
      return { ...prev, [key]: event.target.value }
    })
  }

  const createJob = () => {
    console.log("New job: ", newJob)
  }

  return (
    <div className="w-full h-full z-10 absolute left-0 top-0 flex justify-center bg-sky-500/30 items-center">
      <div className="w-4/5 min-h-150 bg-amber-400 flex flex-col p-10">
        <div className="flex-grow flex w-full bg-pink-200  flex-col">
          <div>
            <div>Job Title</div>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="title"
              type="text"
              placeholder="Job Title"
              alt="Job Title"
              onChange={(event) => {
                newJobChangeHandler("title", event)
              }}
            />
          </div>
          <div>
            <div>Job Url</div>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="jobLink"
              type="text"
              placeholder="Job Link"
              alt="Job Link"
              onChange={(event) => {
                newJobChangeHandler("jobLink", event)
              }}
            />
          </div>
          <div>
            <div>Company</div>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="company"
              type="text"
              placeholder="Company"
              alt="Company"
              onChange={(event) => {
                newJobChangeHandler("company", event)
              }}
            />
          </div>
          <div>
            <div>Priority</div>
            <div className="flex bg-amber-100 items-center justify-around  p-2 rounded mb-2">
              <RadioButton
                onClickHandler={() => {
                  // setPriority("low")
                  setNewJob((prev) => {
                    return { ...prev, priority: "low" }
                  })
                }}
                text="Low"
                priority={newJob.priority}
              />

              <RadioButton
                onClickHandler={() => {
                  // setPriority("medium")
                  setNewJob((prev) => {
                    return { ...prev, priority: "medium" }
                  })
                }}
                text="Medium"
                priority={newJob.priority}
              />

              <RadioButton
                onClickHandler={() => {
                  // setPriority("high")
                  setNewJob((prev) => {
                    return { ...prev, priority: "high" }
                  })
                }}
                text="High"
                priority={newJob.priority}
              />
            </div>
          </div>
          <div
            className="w-full  relative  flex flex-col"
            onMouseLeave={() => {
              setStatusDropDownToggle(false)
            }}
          >
            <div>
              <div>Status</div>
              <div className="w-full  border p-2 rounded mb-2 bg-pink-100 cursor-pointer">
                <div
                  onClick={() => {
                    console.log("to do : open the drop down")
                    setStatusDropDownToggle(!statusDropDownToggle)
                  }}
                >
                  {statusText}
                </div>
              </div>
            </div>

            {statusDropDownToggle && (
              <div className="absolute top-full inset-x-0 z-20 flex w-full flex-col bg-amber-300">
                <DropDownButton
                  text="Saved"
                  onClickHandler={() => {
                    // setStatus("saved")
                    setNewJob((prev) => {
                      return { ...prev, status: "saved" }
                    })
                    setStatusDropDownToggle(false)
                  }}
                />
                <DropDownButton
                  text="Applied"
                  onClickHandler={() => {
                    // setStatus("applied")
                    setNewJob((prev) => {
                      return { ...prev, status: "applied" }
                    })
                    setStatusDropDownToggle(false)
                  }}
                />
                <DropDownButton
                  text="Interview"
                  onClickHandler={() => {
                    // setStatus("interview")
                    setNewJob((prev) => {
                      return { ...prev, status: "interview" }
                    })
                    setStatusDropDownToggle(false)
                  }}
                />
                <DropDownButton
                  text="Offer"
                  onClickHandler={() => {
                    // setStatus("offer")
                    setNewJob((prev) => {
                      return { ...prev, status: "offer" }
                    })
                    setStatusDropDownToggle(false)
                  }}
                />
                <DropDownButton
                  text="Rejected"
                  onClickHandler={() => {
                    // setStatus("rejected")
                    setNewJob((prev) => {
                      return { ...prev, status: "rejected" }
                    })
                    setStatusDropDownToggle(false)
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-evenly w-full bg-green-300">
          <Button text="Cancel" onClickHandler={onCancleHandler} />
          <Button
            text="Add"
            onClickHandler={() => {
              createJob()
              // onAddHandler()
            }}
          />
        </div>
      </div>
    </div>
  )
}
