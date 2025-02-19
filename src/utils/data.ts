import { jobApplicationType, jobByStatusColumnsType } from "./types"

export const jobByStatusColumns: Array<jobByStatusColumnsType> = [
  { id: "saved", colTitle: "Saved", jobs: ["abc1", "abc3", "abc8"] },
  { id: "applied", colTitle: "Applied", jobs: ["abc2", "abc4"] },
  { id: "interview", colTitle: "Interview", jobs: ["abc6"] },
  { id: "offer", colTitle: "Offer", jobs: ["abc5"] },
  { id: "rejected", colTitle: "Rejected", jobs: ["abc7"] },
]

export const columnsForJobTables = {
  width: 150,
  columns: [
    {
      id: "id",
      text: "id",
    },
    {
      id: "title",
      text: "Title",
    },
    {
      id: "company",
      text: "Company",
    },
    {
      id: "jobLink",
      text: "Job URL",
    },
    {
      id: "priority",
      text: "Priority",
    },
    {
      id: "status",
      text: "Status",
    },
    {
      id: "archieve",
      text: "Archieve",
    },
  ],
}

export const jobs: Array<jobApplicationType> = [
  {
    id: "abc1",
    title: "DEVELOPERDEVELOPERDEVELOPER",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "saved",
    archive: false,
  },
  {
    id: "abc2",
    title: "Developer",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "applied",
    archive: false,
  },
  {
    id: "abc3",
    title: "Developer",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "saved",
    archive: false,
  },
  {
    id: "abc4",
    title: "Developer",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "applied",
    archive: false,
  },
  {
    id: "abc5",
    title: "Developer",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "offer",
    archive: false,
  },
  {
    id: "abc6",
    title: "Developer",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "interview",
    archive: false,
  },
  {
    id: "abc7",
    title: "Developer",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "rejected",
    archive: false,
  },
  {
    id: "abc8",
    title: "Developer",
    company: "Google",
    jobLink: "test.com",
    priority: "high",
    status: "saved",
    archive: false,
  },
]
