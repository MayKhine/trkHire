import { useState } from "react"
import { HexColorPicker } from "react-colorful"

type LegendProps = {
  // rejected: string
  // offer: string
  // saved: string
  // applied: string
  // interview: string
  text: string
  initalColor: string
}
export const Legend = ({ text, initalColor }: LegendProps) =>
  //   {
  //   rejected,
  //   offer,
  //   saved,
  //   applied,
  //   interview,
  // }: LegendProps

  {
    const [color, setColor] = useState(initalColor)
    const [colorPickerOpen, setColorPickerOpen] = useState(false)

    return (
      <div className="bg-green-300 m-4">
        <div>
          <div
            className="w-10 h-10 border-2 m-6"
            style={{ backgroundColor: color }}
            onClick={() => {
              setColorPickerOpen(!colorPickerOpen)
            }}
          />
          {text}
        </div>
        {colorPickerOpen && (
          <div
            // className="z-15 w-full h-full fixed left-0 top-0 bg-red-300/20"
            onClick={() => {
              setColorPickerOpen(!colorPickerOpen)
            }}
          >
            <div className="z-15 w-full h-full fixed left-0 top-0 bg-red-300/20"></div>
            <div
              className="z-20 absolute"
              onClick={(event) => event.stopPropagation()}
            >
              <HexColorPicker
                color={color}
                onChange={(val) => {
                  setColor(val)
                }}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
