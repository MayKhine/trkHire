import { useState } from "react"
import { JobTable } from "../jobtable/JobTable"
import { Menu } from "../menu/Menu"
import { Button } from "../buttons/Button"
import { JobForm } from "../forms/JobForm"
import { MdKeyboardArrowDown } from "react-icons/md"
import { OverlayModal } from "../modals/OverlayModal"

export const JobTablePg = () => {
  const [jobFormModalToggle, setJobFormModalToggle] = useState(false)
  const [toggleSort, setToggleSort] = useState("")

  return (
    <div className="flex md:flex-row flex-col h-screen">
      <Menu />
      <div className="bg-pink-200 w-full h-full overflow-hidden flex flex-col">
        <div className="text-2xl font-bold p-6 border-2 border-l-0">
          Job Table
        </div>
        <div className="bg-amber-200 gap-6 flex flex-col h-full border-b-2 border-r-2 overflow-x-auto overflow-y-auto max-w-[100%]">
          <div className="pt-6 pr-6 flex justify-end">
            <div>Sort</div>

            <div className="mr-4">
              <div
                className="flex items-center bg-offWhite p-2 cursor-pointer"
                onClick={() => {
                  setToggleSort("status")
                }}
              >
                <div>Status</div> <MdKeyboardArrowDown />
              </div>
              {toggleSort.length > 0 && (
                <OverlayModal
                  onCancelHandler={() => {
                    setToggleSort("")
                  }}
                >
                  <div className="bg-pink-400 flex items-end justify-end p-2">
                    Hello sort
                  </div>
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
            <JobTable />
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
