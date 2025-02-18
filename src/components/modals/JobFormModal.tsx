import { useState } from "react"
import { Button } from "../buttons/Button"
import { RadioButton } from "../buttons/RadioButton"
import { DropDownButton } from "../buttons/DropDownButton"
import { jobApplicationType, jobStatusType } from "../../utils/types"
import { ExpendButton } from "../buttons/ExpendButton"
import { DeleteButton } from "../buttons/DeleteButton"
import { JobFormInput } from "../forms/JobFormInput"

type JobFormModalProps = {
  onCancleHandler: () => void
  onAddHandler: () => void
  jobStatus?: jobStatusType
}

// type priorityType = "low" | "medium" | "high"
export const JobFormModal = ({
  onCancleHandler,
  onAddHandler,
  jobStatus,
}: JobFormModalProps) => {
  const [statusDropDownToggle, setStatusDropDownToggle] = useState(false)
  const [jobTypeDropDownToggle, setJobTypeDropDownToggle] = useState(false)
  const [interviewExpendToggle, setInterviewExpendToggle] = useState(false)
  const [contactExpendToggle, setContactExpendToggle] = useState(false)

  const [interviews, setInterviews] = useState<Array<string>>(["1"])

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
    status: jobStatus ? jobStatus : "saved",
    archive: false,
    type: "full",
    interviews: [{}],
  })

  const statusText = statusMap[newJob.status]
  const jobTypeText = jobTypeMap[newJob.type]

  const newJobChangeHandler = (
    key: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    interviewIndex?: number
  ) => {
    if (
      (typeof interviewIndex === "number" && key === "interviewRound") ||
      (typeof interviewIndex === "number" && key === "interviewDate") ||
      (typeof interviewIndex === "number" && key === "interviewNotes")
    ) {
      const tempKey = interviewMap[key]

      setNewJob((prev) => {
        const updatedInterviews = prev.interviews ? [...prev.interviews] : []

        updatedInterviews[interviewIndex] = {
          ...updatedInterviews[interviewIndex],
          [tempKey]: event.target.value,
        }
        return { ...prev, interviews: updatedInterviews }
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
    onAddHandler()
  }

  const deleteInterview = (indexToDelete: number) => {
    setInterviews((prev) => {
      return [...prev.filter((_, index) => index != indexToDelete)]
    })

    setNewJob((prev) => {
      return {
        ...prev,
        interviews: prev.interviews?.filter(
          (_, index) => index != indexToDelete
        ),
      }
    })
  }

  const addInterviewToNewJob = () => {
    console.log("add interview to the structure.")
    setInterviews((prev) => {
      return [...prev, "1"]
    })

    setNewJob((prev) => {
      const tempInterviews = prev.interviews
      return { ...prev, interviews: [...tempInterviews!, {}] }
    })
  }

  return (
    <div className="fixed inset-0 z-10 bg-darkGray/50 text-darkGray ">
      <div className="w-full h-full flex justify-center  items-center">
        <div className="min-w-100 w-4/5 max-w-150 max-h-[90%] bg-offWhite rounded-xl flex flex-col pt-5 pb-5 mt-10 mb-10  ">
          <div className="font-bold text-lg 0 pl-10 pb-5 border-b-1 border-lightGray">
            Add a job
          </div>
          <div className="overflow-y-scroll max-h-[90%] pb-5 ">
            <div className="flex-grow flex w-full flex-col pl-10 pr-10 pt-5">
              <JobFormInput
                id="title"
                labelText="Job Title"
                placeHolder="Job Title"
                onChangeHandler={(event) => {
                  newJobChangeHandler("title", event)
                }}
                type="text"
              />

              <JobFormInput
                id="company"
                labelText="Company Name"
                placeHolder="Company Name"
                onChangeHandler={(event) => {
                  newJobChangeHandler("company", event)
                }}
                type="text"
              />

              <JobFormInput
                id="jobLink"
                labelText="Job URL"
                placeHolder="Job URL"
                onChangeHandler={(event) => {
                  newJobChangeHandler("jobLink", event)
                }}
                type="text"
              />

              <div
                className="w-full  relative  flex flex-col"
                onMouseLeave={() => {
                  setStatusDropDownToggle(false)
                }}
              >
                <div>
                  <label htmlFor="status">Status</label>
                  <div className="w-full border border-lightGray p-2 rounded mb-2 cursor-pointer bg-offWhite mt-1">
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
                  <div className="absolute top-full inset-x-0 z-20 flex w-full flex-col bg-offWhite border-solid border-1 rounded shadow-xl overflow-hidden">
                    <DropDownButton
                      text="Saved"
                      onClickHandler={() => {
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
                <div className="flex items-center justify-around  p-2 rounded mb-2">
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

              <JobFormInput
                id="salary"
                labelText="Salary"
                placeHolder="Salary"
                onChangeHandler={(event) => {
                  newJobChangeHandler("salary", event)
                }}
                type="text"
              />

              <JobFormInput
                id="location"
                labelText="Location"
                placeHolder="Location"
                onChangeHandler={(event) => {
                  newJobChangeHandler("location", event)
                }}
                type="text"
              />

              <div
                className="w-full  relative  flex flex-col"
                onMouseLeave={() => {
                  setJobTypeDropDownToggle(false)
                }}
              >
                <div>
                  <label htmlFor="job type">Job Type</label>

                  <div className="w-full border border-lightGray p-2 rounded mb-2 cursor-pointer bg-offWhite mt-1">
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
                  <div className="absolute top-full inset-x-0 z-20 flex w-full flex-col bg-offWhite border-solid border-1 rounded shadow-xl overflow-hidden">
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
                  className="w-full border border-lightGray  p-2 rounded mb-2 bg-offWhite mt-1"
                  id="notes"
                  placeholder="Notes"
                  rows={2}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    newJobChangeHandler("notes", event)
                  }}
                />
              </div>

              <JobFormInput
                id="deadline"
                labelText="Application Deadline"
                placeHolder="Application Deadline"
                onChangeHandler={(event) => {
                  newJobChangeHandler("deadline", event)
                }}
                type="date"
              />

              <JobFormInput
                id="appliedDate"
                labelText="Applied Date"
                placeHolder="Applied Date"
                onChangeHandler={(event) => {
                  newJobChangeHandler("appliedDate", event)
                }}
                type="date"
              />

              <JobFormInput
                id="followUpDate"
                labelText="Follow Up Date"
                placeHolder="Follow Up Date"
                onChangeHandler={(event) => {
                  newJobChangeHandler("followUpDate", event)
                }}
                type="date"
              />

              <div>
                <div
                  className="flex"
                  onClick={() => {
                    setContactExpendToggle(!contactExpendToggle)
                  }}
                >
                  <label htmlFor="contact" className="cursor-pointer font-bold">
                    Contact Info
                  </label>
                  <ExpendButton
                    onClickHandler={() => {
                      setContactExpendToggle(!contactExpendToggle)
                    }}
                    expendToggle={contactExpendToggle}
                  />
                </div>
                {contactExpendToggle && (
                  <div>
                    <JobFormInput
                      id="contactName"
                      labelText="Contact Name"
                      placeHolder="Contact Name"
                      onChangeHandler={(event) => {
                        newJobChangeHandler("contactName", event)
                      }}
                      type="text"
                    />

                    <JobFormInput
                      id="contact"
                      labelText="Contact"
                      placeHolder="Email, Phone Number, ..."
                      onChangeHandler={(event) => {
                        newJobChangeHandler("contact", event)
                      }}
                      type="text"
                    />

                    <div>
                      <label htmlFor="contact">Contact Notes</label>
                      <textarea
                        className="w-full border border-lightGray  p-2 rounded mb-2 bg-offWhite mt-1"
                        id="contact"
                        rows={2}
                        onChange={(event) => {
                          newJobChangeHandler("contactNotes", event)
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div
                  className="flex"
                  onClick={() => {
                    setInterviewExpendToggle(!interviewExpendToggle)
                  }}
                >
                  <label
                    htmlFor="interview"
                    className="cursor-pointer font-bold"
                  >
                    Interview Info
                  </label>
                  <ExpendButton
                    onClickHandler={() => {
                      setInterviewExpendToggle(!interviewExpendToggle)
                    }}
                    expendToggle={interviewExpendToggle}
                  />
                </div>

                {interviewExpendToggle && (
                  <div className="flex flex-col ">
                    {interviews.map((interview, index) => {
                      return (
                        <div>
                          <div className="mb-2 flex justify-between">
                            <div> Interview Round {index + 1}</div>
                            <DeleteButton
                              onClickHandler={() => {
                                deleteInterview(index)
                              }}
                            />
                          </div>
                          <JobFormInput
                            id="interviewRound"
                            labelText="Interview"
                            placeHolder="Phone Interview"
                            onChangeHandler={(event) => {
                              newJobChangeHandler(
                                "interviewRound",
                                event,
                                index
                              )
                            }}
                            type="text"
                          />

                          <JobFormInput
                            id="interviewDate"
                            labelText="Interview Date"
                            placeHolder="Interview Date"
                            onChangeHandler={(event) => {
                              newJobChangeHandler("interviewDate", event, index)
                            }}
                            type="date"
                          />

                          <div>
                            <label htmlFor="Interview Notes">
                              Interview Notes
                            </label>
                            <textarea
                              className="w-full border border-lightGray  p-2 rounded mb-2 bg-offWhite mt-1"
                              id="interviewNotes"
                              rows={2}
                              onChange={(event) => {
                                newJobChangeHandler(
                                  "interviewNotes",
                                  event,
                                  index
                                )
                              }}
                            />
                          </div>
                        </div>
                      )
                    })}

                    <Button
                      text="Add Interview"
                      onClickHandler={() => {
                        addInterviewToNewJob()
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-evenly w-full pt-5 border-t-1 border-lightGray ">
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
    </div>
  )
}
