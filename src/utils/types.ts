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
