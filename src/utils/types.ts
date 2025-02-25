export type jobColumnType = {
  id: string
  colTitle: string
  jobs: Array<jobApplicationType>
}

export type jobStatusType =
  | "saved"
  | "applied"
  | "interview"
  | "offer"
  | "rejected"

export type legendColorArrType = Array<{ id: jobStatusType; color: string }>

export type jobByStatusColumnsType = {
  id: "saved" | "applied" | "interview" | "offer" | "rejected"
  colTitle: string
  jobs: Array<string>
}

export type interviewType = { round?: string; date?: string; notes?: string }

export type jobApplicationType = {
  id: string // Unique Job Number
  title: string // Job Title (e.g., Frontend Developer)
  company: string // Company Name (e.g., Google)
  jobLink: string // Job Posting URL
  status: string //jobStatusType //"saved" | "applied" | "interview" | "offer" | "rejected" // Application Status
  priority: string // "high" | "medium" | "low" // Priority Level
  archive: boolean // Archive Flag (True if job is archived)
  notes?: string // General Notes
  postingId?: string // Job Posting ID (if available)
  department?: string // Department (Optional)
  salary?: string // Salary / Pay Range (if available)
  location?: string // Remote / Hybrid / On-site + City, State
  type?: string //"full" | "part" | "contract" | "internship" // Job Type
  deadline?: string // Application Deadline (Optional)
  appliedDate?: string // Date Applied (Optional if only saved)
  followUpDate?: string // Follow-up Reminder Date
  contactName?: string
  contact?: string
  contactNotes?: string
  interviewRound1?: string
  interviewDate1?: string
  interviewNotes1?: string
  interviewRound2?: string
  interviewDate2?: string
  interviewNotes2?: string
  interviewRound3?: string
  interviewDate3?: string
  interviewNotes3?: string
}

export type reChartPieDataType = [{ name: string; value: number }]
