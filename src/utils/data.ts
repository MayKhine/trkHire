import { jobColumnType } from "./types"

export const jobColumns: jobColumnType[] = [
  {
    id: "toApply",
    colTitle: "To Apply",
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
