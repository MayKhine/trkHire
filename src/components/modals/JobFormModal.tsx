import { Button } from "../buttons/Button"

type JobFormModalProps = {
  onCancleHandler: () => void
  onAddHandler: () => void
}
export const JobFormModal = ({
  onCancleHandler,
  onAddHandler,
}: JobFormModalProps) => {
  return (
    <div className="w-full h-full z-10 absolute left-0 top-0 flex justify-center bg-sky-500/30 items-center">
      <div className="w-2/5 min-h-150 bg-amber-400 flex flex-col p-10">
        <div className="flex-grow bg-pink-200 flex flex-col">
          <div>
            <div>Job Title</div>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              type="text"
              placeholder="Job Title"
            />
          </div>

          <div>
            <div>Job Title</div>
            <input
              className="w-full border p-2 rounded mb-2 bg-amber-100"
              type="text"
              placeholder="Job Title"
            />
          </div>
        </div>

        <div className="flex justify-evenly w-full bg-green-300">
          <Button text="Cancel" onClickHandler={onCancleHandler} />
          <Button text="Add" onClickHandler={onAddHandler} />
        </div>
      </div>
    </div>
  )
}
