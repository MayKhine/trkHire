import { jobApplicationType, jobByStatusColumnsType } from "./types"

export const jobByStatusColumns: Array<jobByStatusColumnsType> = [
  { id: "saved", colTitle: "Saved", jobs: ["abc1", "abc3", "abc8"] },
  { id: "applied", colTitle: "Applied", jobs: ["abc2", "abc4"] },
  { id: "interview", colTitle: "Interview", jobs: ["abc6"] },
  { id: "offer", colTitle: "Offer", jobs: ["abc5"] },
  { id: "rejected", colTitle: "Rejected", jobs: ["abc7"] },
]

export const columnsForJobTables = [
  {
    id: "id",
    text: "id",
    width: 150,
  },
  {
    id: "title",
    text: "Title",
    width: 150,
  },
  {
    id: "company",
    text: "Company",
    width: 150,
  },
  {
    id: "jobLink",
    text: "Job URL",
    width: 150,
  },
  {
    id: "status",
    text: "Status",
    width: 150,
  },
  {
    id: "priority",
    text: "Priority",
    width: 150,
  },
  {
    id: "archieve",
    text: "Archieve",
    width: 150,
  },
  {
    id: "notes",
    text: "Notes",
    width: 150,
  },
  {
    id: "salary",
    text: "Salary",
    width: 150,
  },
  {
    id: "location",
    text: "Location",
    width: 150,
  },
  {
    id: "type",
    text: "Type",
    width: 150,
  },
  {
    id: "deadline",
    text: "Deadline",
    width: 150,
  },
  {
    id: "appliedDate",
    text: "Applied Date",
    width: 150,
  },
  {
    id: "followUpDate",
    text: "Follow Up Date",
    width: 150,
  },
  {
    id: "contactName",
    text: "Contact Name",
    width: 150,
  },
  {
    id: "contact",
    text: "Contact",
    width: 150,
  },
  {
    id: "contactNotes",
    text: "Contact Notes",
    width: 150,
  },
  {
    id: "interviewRound1",
    text: "interviewRound1",
    width: 150,
  },
  {
    id: "interviewDate1",
    text: "interviewDate1",
    width: 150,
  },
  {
    id: "interviewNotes1",
    text: "interviewNotes1",
    width: 150,
  },
  {
    id: "interviewRound2",
    text: "interviewRound2",
    width: 150,
  },
  {
    id: "interviewDate2",
    text: "interviewDate12",
    width: 150,
  },
  {
    id: "interviewNotes2",
    text: "interviewNotes2",
    width: 150,
  },
  {
    id: "interviewRound3",
    text: "interviewRound3",
    width: 150,
  },
  {
    id: "interviewDate3",
    text: "interviewDate3",
    width: 150,
  },
  {
    id: "interviewNotes3",
    text: "interviewNotes3",
    width: 150,
  },
]

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
