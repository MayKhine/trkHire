import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router"
import { KanbanBoardPg } from "./components/pages/KanbanBoardPg.tsx"
import { HomePg } from "./components/pages/HomePg.tsx"
import { JobTablePg } from "./components/pages/JobTablePg.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/jobtracker" element={<KanbanBoardPg />} />
        <Route path="/jobtable" element={<JobTablePg />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
