type JobFromInputProps = {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  labelText: string
  placeHolder: string
  id: string
  type: string
  value?: string
}
export const JobFormInput = ({
  onChangeHandler,
  labelText,
  placeHolder,
  id,
  type,
  value,
}: // val,
JobFromInputProps) => {
  return (
    <div>
      <label htmlFor={labelText}>{labelText}</label>
      <input
        className="w-full h-11 box-border outline-none border pl-2 border-lightGray hover:border-blue hover:border-2 focus:border-blue/10 focus:border-2 bg-offWhite rounded mb-2  mt-1"
        id={id}
        type={type}
        placeholder={placeHolder}
        alt={labelText + " input"}
        onChange={(event) => {
          onChangeHandler(event)
        }}
        value={value}
      />
    </div>
  )
}
