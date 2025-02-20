import { useState } from "react"
import { JobTable } from "../jobtable/JobTable"
import { MenuBar } from "../menu/MenuBar"
import { JobFormModal } from "../modals/JobFormModal"
import { Button } from "../buttons/Button"

export const JobTablePg = () => {
  const [jobFormModalToggle, setJobFormModalToggle] = useState(false)

  return (
    <div className="flex h-screen">
      <MenuBar />
      <div className="bg-pink-200 w-full h-full overflow-hidden flex flex-col">
        <div className="text-2xl font-bold p-6 border-2 border-l-0">
          Job Table
        </div>
        <div className="bg-amber-200 gap-6 flex flex-col h-full border-b-2 border-r-2">
          <div className="pt-6 pr-6 flex justify-end">
            <Button
              onClickHandler={() => {
                setJobFormModalToggle(true)
              }}
              text="Add a job"
            />
          </div>

          <div className="overflow-x-scroll max-w-[100%] h-full">
            <JobTable />
          </div>
        </div>
        {jobFormModalToggle && (
          <JobFormModal
            onAddHandler={() => {
              console.log("Tod o . add job")
            }}
            onCancleHandler={() => {
              setJobFormModalToggle(false)
            }}
          ></JobFormModal>
        )}
      </div>
    </div>
  )
}
