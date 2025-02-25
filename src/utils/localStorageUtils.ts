import { jobApplicationType } from "./types"

const STORAGE_KEY = "trkHireJobApplications" // Key for localStorage

export const saveJobsToLocalStorage = (jobs: Array<jobApplicationType>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs))
}

export const loadJobsFromLocalStorage = (): Array<jobApplicationType> => {
  const storedJobs = localStorage.getItem(STORAGE_KEY)
  return storedJobs ? JSON.parse(storedJobs) : []

  // const storedJobs = localStorage.getItem(STORAGE_KEY)
  // if (!storedJobs) return []

  // // Parse and validate job data
  // const parsedJobs = JSON.parse(storedJobs).map((job: jobApplicationType) => ({
  //   ...job,
  //   status: validStatuses.includes(job.status) ? job.status : "saved", // Default to "saved" if invalid
  // }))

  // return parsedJobs
}

export const addJobToLocalStorage = (newJob: jobApplicationType) => {
  const jobs = loadJobsFromLocalStorage()
  jobs.push(newJob)
  saveJobsToLocalStorage(jobs)
}

export const deleteJobFromLocalStorage = (jobId: string) => {
  const jobs = loadJobsFromLocalStorage()
  const updatedJobs = jobs.filter((job) => job.id !== jobId)
  saveJobsToLocalStorage(updatedJobs)
}

export const clearJobsFromLocalStorage = () => {
  localStorage.removeItem(STORAGE_KEY)
}
