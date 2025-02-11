import {
  JobApplicationType,
  jobByStatusColumnsType,
  jobColumnType,
} from "./types"

export const jobColumns: jobColumnType[] = [
  {
    id: "saved",
    colTitle: "Saved",
    jobs: [
      { id: "1", title: "developer", company: "Google", location: "Boston" },
      {
        id: "2",
        title: "developer 2",
        company: "Google",
        location: "Boston",
      },
    ],
  },

  {
    id: "applied",
    colTitle: "Applied",
    jobs: [
      {
        id: "3",
        title: "front end developer",
        company: "Amazon",
        location: "Boston",
      },
      {
        id: "4",
        title: "developer 2",
        company: "Google",
        location: "NY",
      },
    ],
  },
  {
    id: "interview",
    colTitle: "Interview",
    jobs: [
      {
        id: "6",
        title: "front end developer",
        company: "Amazon",
        location: "Boston",
      },
    ],
  },
  {
    id: "offer",
    colTitle: "Offer",
    jobs: [
      {
        id: "7",
        title: "front end developer",
        company: "Amazon",
        location: "Boston",
      },
    ],
  },
  {
    id: "rejected",
    colTitle: "Rejected",
    jobs: [
      {
        id: "5",
        title: "senior developer",
        company: "Amazon",
        location: "Boston",
      },
    ],
  },
]

export const jobByStatusColumns: Array<jobByStatusColumnsType> = [
  { id: "saved", colTitle: "Saved", jobs: ["abc1", "abc3", "abc8"] },
  { id: "applied", colTitle: "Applied", jobs: ["abc2", "abc4"] },
  { id: "interview", colTitle: "Interview", jobs: ["abc6"] },
  { id: "offer", colTitle: "Offer", jobs: ["abc5"] },
  { id: "rejected", colTitle: "Rejected", jobs: ["abc7"] },
]

export const jobs: Array<JobApplicationType> = [
  {
    id: "abc1",
    title: "Developer",
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
