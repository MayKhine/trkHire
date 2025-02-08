export const App = () => {
  type jobProps = {
    title: string
    company: string
    location: string
  }
  const jobList = [
    { title: "Developer", company: "Google", location: "Boston" },
    { title: "Front-End Developer", company: "Amazon", location: "Boston" },
    { title: "Developer", company: "Ritz", location: "Boston" },
  ]
  return <div className="bg-pink-300 h-full"> HI </div>
}
