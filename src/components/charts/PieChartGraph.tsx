import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { reChartPieDataType } from "../../utils/types"
import { colorsMap } from "../../utils/colors"

type PieChartGraphProps = {
  dataArr: reChartPieDataType
  width?: number
  height?: number
}
export const PieChartGraph = ({
  dataArr,
  width,
  height,
}: PieChartGraphProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <Pie
          data={dataArr}
          cx="50%"
          cy="50%"
          labelLine={true}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {dataArr.map((col, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={colorsMap[col.name.toLowerCase()]}
              />
            )
          })}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
