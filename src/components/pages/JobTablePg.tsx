import { useState } from "react"
import { JobTable } from "../jobtable/JobTable"
import { Menu } from "../menu/Menu"
import { Button } from "../buttons/Button"
import { JobForm } from "../forms/JobForm"
import { MdKeyboardArrowDown } from "react-icons/md"
import { OverlayModal } from "../modals/OverlayModal"
import { loadJobsFromLocalStorage } from "../../utils/localStorageUtils"
import { jobApplicationType } from "../../utils/types"

export const JobTablePg = () => {
  const jobs = loadJobsFromLocalStorage()

  const [jobFormModalToggle, setJobFormModalToggle] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)
  const [selectSort, setSelectSort] = useState("status")

  const sortArr = [
    // "title",
    // "company",
    "status",
    "priority",
    // "deadline",
    // "appliedDate",
    // "followUpDate",
  ]
  const sortOrder = (text: string) => {
    if (text.toLowerCase() == "status") {
      return {
        saved: 0,
        applied: 0,
        interview: 0,
        offer: 0,
        rejected: 0,
      }
    }

    if (text.toLowerCase() == "priority") {
      return {
        high: 0,
        medium: 0,
        low: 0,
      }
    }
  }

  const sortJobs = () => {
    const sortedOrder = sortOrder(selectSort)
    console.log("sorted order", sortedOrder)
    // jobs.map((job) => {
    //   const sortKey = job[selectSort]
    //   console.log(sortKey, sortedOrder[sortKey])

    //   // sortedOrder
    // })

    jobs.forEach((job) => {
      const sortKey = job[selectSort as keyof typeof job] as string

      if (sortKey in sortedOrder!) {
        sortedOrder[sortKey] += 1
      }
      console.log("sortedOrder", sortedOrder)
    })
  }

  sortJobs()
  return (
    <div className="flex md:flex-row flex-col h-screen">
      <Menu />
      <div className="bg-pink-200 w-full h-full overflow-hidden flex flex-col">
        <div className="text-2xl font-bold p-6 border-2 border-l-0">
          Job Table
        </div>
        <div className="bg-amber-200 gap-6 flex flex-col h-full border-b-2 border-r-2 overflow-x-auto overflow-y-auto max-w-[100%]">
          <div className="pt-6 pr-6 flex justify-end items-center">
            <div>Sort</div>

            <div className="w-30 mr-4 ml-4 ">
              <div
                // style={{
                //   backgroundColor: toggleSort == true ? "lightBlue" : "white",
                // }}
                className="flex items-center hover:bg-lightBlue1 bg-offWhite cursor-pointer justify-between rounded-xs w-30 p-1 pl-2 pr-1"
                onClick={() => {
                  setToggleSort(!toggleSort)
                }}
              >
                <div>{selectSort}</div> <MdKeyboardArrowDown />
              </div>
              {toggleSort && (
                <OverlayModal
                  onCancelHandler={() => {
                    setToggleSort(!toggleSort)
                  }}
                >
                  {sortArr.map((item) => {
                    return (
                      <div
                        className="cursor-pointer bg-offWhite hover:bg-lightBlue1 rounded-xs w-30 p-1 pl-2 pr-2"
                        onClick={() => {
                          setSelectSort(item)
                          setToggleSort(!toggleSort)
                        }}
                      >
                        {item}
                      </div>
                    )
                  })}
                </OverlayModal>
              )}
            </div>
            <Button
              onClickHandler={() => {
                setJobFormModalToggle(true)
              }}
              text="Add a job"
            />
          </div>

          <div className="mb-5">
            <JobTable jobs={jobs} />
          </div>
        </div>
        {jobFormModalToggle && (
          <JobForm
            onCancleHandler={() => {
              setJobFormModalToggle(false)
            }}
          ></JobForm>
        )}
      </div>
    </div>
  )
}
