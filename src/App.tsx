import { BrowserRouter, Routes, Route } from "react-router"
import { KanbanBoardPg } from "./components/pages/KanbanBoardPg.tsx"
import { HomePg } from "./components/pages/HomePg.tsx"
import { JobTablePg } from "./components/pages/JobTablePg.tsx"
import { useEffect } from "react"
import {
  loadJobsFromLocalStorage,
  saveJobsToLocalStorage,
} from "./utils/localStorageUtils.ts"

export const App = () => {
  useEffect(() => {
    fetch("/public/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        if (loadJobsFromLocalStorage().length === 0) {
          saveJobsToLocalStorage(data)
        }
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/jobtracker" element={<KanbanBoardPg />} />
        <Route path="/jobtable" element={<JobTablePg />} />
      </Routes>
    </BrowserRouter>
  )
}
