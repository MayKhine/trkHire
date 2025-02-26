export const DateFormat = (dateStr: string) => {
  if (dateStr.length < 10) {
    return ""
  }
  const dateObj = new Date(dateStr)
  // const dateStr = "2025-02-26";
  const month = String(dateObj.getMonth() + 1).padStart(2, "0")
  const day = String(dateObj.getDate()).padStart(2, "0")
  const year = dateObj.getFullYear()

  // const formattedDate = `${month}/${day}/${year}`
  return `${month}/${day}/${year}`
}
