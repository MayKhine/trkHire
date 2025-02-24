import { useState } from "react"
import { HexColorPicker } from "react-colorful"

type ColorPickerProps = {
  // rejected: string
  // offer: string
  // saved: string
  // applied: string
  // interview: string
  text: string
  color: string
  onColorChangeHandler: (val: string) => void
}
export const ColorPicker = ({
  text,
  color,
  onColorChangeHandler,
}: ColorPickerProps) =>
  //   {
  //   rejected,
  //   offer,
  //   saved,
  //   applied,
  //   interview,
  // }: LegendProps

  {
    // const [color, setColor] = useState(initalColor)
    const [colorPickerOpen, setColorPickerOpen] = useState(false)

    return (
      <div className="bg-green-300 m-4 p-4">
        <div className="flex flex-col justify-center items-center">
          <div
            className="w-10 h-10 border-2 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => {
              setColorPickerOpen(!colorPickerOpen)
            }}
          />
          {text}
        </div>
        {colorPickerOpen && (
          <div
            onClick={() => {
              setColorPickerOpen(!colorPickerOpen)
            }}
          >
            <div className="z-15 w-full h-full fixed left-0 top-0 "></div>
            <div
              className="z-20 absolute"
              onClick={(event) => event.stopPropagation()}
            >
              <HexColorPicker
                style={{ cursor: "pointer" }}
                color={color}
                onChange={(val) => {
                  onColorChangeHandler(val)
                }}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
