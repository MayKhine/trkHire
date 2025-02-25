type JobFromInputProps = {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  labelText: string
  placeHolder: string
  id: string
  type: string
  required: boolean
  value?: string
  error?: string
}
export const JobFormInput = ({
  onChangeHandler,
  labelText,
  placeHolder,
  id,
  type,
  value,
  required,
  error,
}: JobFromInputProps) => {
  return (
    <div>
      {required && (
        <div className="flex gap-.5">
          <label htmlFor={labelText}>{labelText} </label>{" "}
          <div className="text-red-500">*</div>
        </div>
      )}
      {!required && (
        <div className="flex gap-.5">
          <label htmlFor={labelText}>{labelText} </label>{" "}
        </div>
      )}
      <div className="h-17">
        <input
          className="w-full h-11 box-border outline-none border pl-2 border-lightGray hover:border-blue hover:border-2 focus:border-blue/10 focus:border-2 bg-offWhite rounded mt-1"
          id={id}
          type={type}
          placeholder={placeHolder}
          alt={labelText + " input"}
          onChange={(event) => {
            onChangeHandler(event)
          }}
          value={value}
          required={required}
        />
        {error && <div className="mt-0 text-xs text-red-500">{error} </div>}
      </div>
    </div>
  )
}
