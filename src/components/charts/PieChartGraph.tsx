import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { legendColorArrType, reChartPieDataType } from "../../utils/types"

type PieChartGraphProps = {
  dataArr: reChartPieDataType
  width: number
  height: number
  colorArr: legendColorArrType
}
export const PieChartGraph = ({
  dataArr,
  width,
  height,
  colorArr,
}: PieChartGraphProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <Pie
          data={dataArr}
          cx="50%"
          cy="50%"
          labelLine={true}
          dataKey="value"
          nameKey="name"
          animationDuration={1000}
          stroke="black"
        >
          {dataArr.map((col, index) => {
            const curColor = colorArr.filter(
              (item) => item.id === col.name.toLowerCase()
            )
            return <Cell key={`cell-${index}`} fill={curColor[0].color} />
          })}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
