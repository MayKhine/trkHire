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
        <div className="text-2xl font-bold p-6 border-b-2">Job Tracker</div>
        <div className="bg-amber-200 p-6 gap-6 flex flex-col h-full">
          <div className="flex justify-end">
            <Button
              onClickHandler={() => {
                setJobFormModalToggle(true)
              }}
              text="Add a job"
            />
          </div>

          <div className="overflow-x-scroll max-w-[100%] h-full border-2">
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
