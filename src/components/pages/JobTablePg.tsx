import { JobTable } from "../jobtable/JobTable"
// import { Test } from "../jobtable/test"
import { MenuBar } from "../menu/MenuBar"

export const JobTablePg = () => {
  return (
    <div className="flex w-full h-full bg-amber-300">
      <MenuBar />
      <div className="flex flex-col bg-pink-700 w-full gap-4">
        <JobTable />
      </div>
    </div>
  )
}
