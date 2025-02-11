export type jobType = {
  id: string
  title: string
  company: string
  location: string
}

export type jobColumnType = {
  id: string
  colTitle: string
  jobs: Array<jobType>
}

export type jobByStatusColumnsType = {
  id: "saved" | "applied" | "interview" | "offer" | "rejected"
  colTitle: string
  jobs: Array<string>
}

export type JobApplicationType = {
  id: string // Unique Job Number
  title: string // Job Title (e.g., Frontend Developer)
  company: string // Company Name (e.g., Google)
  jobLink: string // Job Posting URL
  status: "saved" | "applied" | "interview" | "offer" | "rejected" // Application Status
  priority: "high" | "medium" | "low" // Priority Level
  archive: boolean // Archive Flag (True if job is archived)
  notes?: string // General Notes
  postingId?: string // Job Posting ID (if available)
  department?: string // Department (Optional)
  location?: string // Remote / Hybrid / On-site + City, State
  type?: "full" | "part" | "contract" | "internship" // Job Type
  salary?: string // Salary / Pay Range (if available)
  dateApplied?: string // Date Applied (Optional if only saved)
  deadline?: string // Application Deadline (Optional)
  contact?: {
    name?: string // Recruiter / Hiring Manager Name
    email?: string // Recruiter Email / LinkedIn
    phone?: number // Recruiter Phone
    notes?: string
  }
  followUpDate?: string // Follow-up Reminder Date
  interviewRounds?: string[] // List of Interview Rounds (Phone Screen, Technical, etc.)
  interviewDates?: string[] // List of Interview Dates
  interviewNotes?: string // Notes on Interview Process
  offerDetails?: string // Offer Details (if applicable)
}
