import { useState } from "react"
import { Button } from "../buttons/Button"
import { RadioButton } from "../buttons/RadioButton"
import { DropDownButton } from "../buttons/DropDownButton"
import { interviewType, jobApplicationType } from "../../utils/types"

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
  const [statusDropDownToggle, setStatusDropDownToggle] = useState(false)
  const [jobTypeDropDownToggle, setJobTypeDropDownToggle] = useState(false)
  const [interviews, setInterviews] = useState<Array<string>>([])
  const statusMap: Record<string, string> = {
    saved: "Saved",
    applied: "Applied",
    interview: "Interview",
    offer: "Offer",
    rejected: "Rejected",
  }

  const jobTypeMap: Record<string, string> = {
    full: "Fulltime",
    part: "Partime",
    contract: "Contract",
    internship: "Internship",
  }

  const interviewMap: Record<string, string> = {
    interviewRound: "round",
    interviewDate: "date",
    interviewNotes: "notes",
  }
  const [newJob, setNewJob] = useState<jobApplicationType>({
    id: "",
    title: "",
    jobLink: "",
    company: "",
    priority: "medium",
    status: "saved",
    archive: false,
    type: "full",
  })

  const statusText = statusMap[newJob.status]
  const jobTypeText = jobTypeMap[newJob.type]
  const newJobChangeHandler = (
    key: string,
    event: any,
    interviewIndex?: number
  ) => {
    if (
      (typeof interviewIndex === "number" && key === "interviewRound") ||
      (typeof interviewIndex === "number" && key === "interviewDate") ||
      (typeof interviewIndex === "number" && key === "interviewNotes")
    ) {
      const tempKey = interviewMap[key]
      const tempInterview = { [tempKey]: event.target.value }

      setNewJob((prev) => {
        const updatedInterviews = prev.interviews ? [...prev.interviews] : []

        // If interviews is undefined, initialize it
        if (!prev.interviews) {
          return { ...prev, interviews: [tempInterview] }
        }
        // If index is undefined, add a new entry
        else if (
          updatedInterviews.length > 0 &&
          !updatedInterviews[interviewIndex]
        ) {
          updatedInterviews.push(tempInterview)
          return { ...prev, interviews: updatedInterviews }
        }
        // else, update the existing interview object
        else {
          updatedInterviews[interviewIndex] = {
            ...updatedInterviews[interviewIndex],
            [tempKey]: event.target.value,
          }
          return { ...prev, interviews: updatedInterviews }
        }
      })
      return
    }

    setNewJob((prev) => {
      return { ...prev, [key]: event.target.value }
    })
    return
  }

  const createJob = () => {
    console.log("New job: ", newJob)
  }

  return (
    <div className="w-full h-full z-10 absolute left-0 top-0 flex justify-center bg-sky-500/30 items-center">
      <div className="w-4/5 min-h-150 bg-amber-400 flex flex-col p-10">
        <div className="flex-grow flex w-full bg-pink-200  flex-col">
          <div>
            <label htmlFor="job title">Job Title</label>
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
            <label htmlFor="company name">Company Name</label>
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
            <label htmlFor="job URL">Job URL</label>
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

          <div
            className="w-full  relative  flex flex-col"
            onMouseLeave={() => {
              setStatusDropDownToggle(false)
            }}
          >
            <div>
              <label htmlFor="status">Status</label>
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

          <div>
            <label htmlFor="priority">Priority</label>
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

          <div>
            <label htmlFor="salary">Salary</label>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="salary"
              type="text"
              placeholder=""
              alt="Salary"
              onChange={(event) => {
                newJobChangeHandler("salary", event)
              }}
            />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="location"
              type="text"
              placeholder="Location"
              alt="Location"
              onChange={(event) => {
                newJobChangeHandler("location", event)
              }}
            />
          </div>

          <div
            className="w-full  relative  flex flex-col"
            onMouseLeave={() => {
              setJobTypeDropDownToggle(false)
            }}
          >
            <div>
              <label htmlFor="job type">Job Type</label>

              <div className="w-full  border p-2 rounded mb-2 bg-pink-100 cursor-pointer">
                <div
                  onClick={() => {
                    setJobTypeDropDownToggle(!jobTypeDropDownToggle)
                  }}
                >
                  {jobTypeText}{" "}
                </div>
              </div>
            </div>

            {jobTypeDropDownToggle && (
              <div className="absolute top-full inset-x-0 z-20 flex w-full flex-col bg-amber-300">
                <DropDownButton
                  text="Fulltime"
                  onClickHandler={() => {
                    setNewJob((prev) => {
                      return { ...prev, type: "full" }
                    })
                    setJobTypeDropDownToggle(false)
                  }}
                />
                <DropDownButton
                  text="Parttime"
                  onClickHandler={() => {
                    setNewJob((prev) => {
                      return { ...prev, type: "part" }
                    })
                    setJobTypeDropDownToggle(false)
                  }}
                />
                <DropDownButton
                  text="Contract"
                  onClickHandler={() => {
                    setNewJob((prev) => {
                      return { ...prev, type: "contract" }
                    })
                    setJobTypeDropDownToggle(false)
                  }}
                />
                <DropDownButton
                  text="Internship"
                  onClickHandler={() => {
                    setNewJob((prev) => {
                      return { ...prev, type: "internship" }
                    })
                    setJobTypeDropDownToggle(false)
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="notes">Notes</label>
            <textarea
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="notes"
              placeholder="Notes"
              rows={2}
              onChange={(event) => {
                newJobChangeHandler("notes", event)
              }}
            />
          </div>

          <div>
            <label htmlFor="deadline">Application Deadline</label>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="deadline"
              type="date"
              placeholder="deadline"
              alt="Application Deadline"
              onChange={(event) => {
                newJobChangeHandler("deadline", event)
              }}
            />
          </div>

          <div>
            <label htmlFor="job apply date">Applied Date</label>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="appliedDate"
              type="date"
              alt="Applied Date"
              onChange={(event) => {
                newJobChangeHandler("appliedDate", event)
              }}
            />
          </div>

          <div>
            <label htmlFor="follow up date">Follow Up Date</label>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="followUpDate"
              type="date"
              alt="Follow Up Date"
              onChange={(event) => {
                newJobChangeHandler("followUpDate", event)
              }}
            />
          </div>

          <div>
            <label htmlFor="contact">Contact Name</label>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="contactName"
              type="text"
              placeholder="Contact Name"
              alt="Location"
              onChange={(event) => {
                newJobChangeHandler("contactName", event)
              }}
            />
          </div>

          <div>
            <label htmlFor="contact">Contact</label>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="contact"
              type="text"
              placeholder="Email, Phone, ..."
              alt="Location"
              onChange={(event) => {
                newJobChangeHandler("contact", event)
              }}
            />
          </div>

          <div>
            <label htmlFor="contact">Contact Notes</label>
            <textarea
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              id="contact"
              rows={2}
              onChange={(event) => {
                newJobChangeHandler("contactNotes", event)
              }}
            />
          </div>

          <div className=" bg-amber-100">
            <div
              onClick={() => {
                setInterviews((prev) => [...prev, "1"])
              }}
            >
              Interview
            </div>
            {interviews.length > 0 && (
              <div>
                {interviews.map((interview, index) => {
                  return (
                    <div>
                      <div>
                        <label htmlFor="Interview Round">
                          Interview Round{" "}
                        </label>
                        <input
                          className="w-full border p-2 rounded mb-2 bg-amber-100"
                          id="interviewRound"
                          type="text"
                          placeholder="Interview Round"
                          alt="Interview Round"
                          onChange={(event) => {
                            newJobChangeHandler("interviewRound", event, index)
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="Interview Date">Interview Date</label>
                        <input
                          className="w-full border p-2 rounded mb-2 bg-amber-100"
                          id="interviewDate"
                          type="date"
                          alt="interviewDate"
                          onChange={(event) => {
                            newJobChangeHandler("interviewDate", event, index)
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="Interview Notes">Interview Notes</label>
                        <textarea
                          className="w-full border p-2 rounded mb-2 bg-amber-100"
                          id="interviewNotes"
                          rows={2}
                          onChange={(event) => {
                            newJobChangeHandler("interviewNotes", event, index)
                          }}
                        />
                      </div>
                    </div>
                  )
                })}

                <Button
                  text="Add Interview"
                  onClickHandler={() => {
                    console.log("addd more form ")
                    setInterviews((prev) => {
                      return [...prev, "1"]
                    })
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
