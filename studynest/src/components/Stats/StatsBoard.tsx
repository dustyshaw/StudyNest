import React from "react";
import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

// Define the type for our data
type ChartData = {
  name: string;
  hrs: number;
  // pv: number;
  fill: string;
};

const data: ChartData[] = [
  {
    "name": "React",
    "hrs": 31.47,
    // "pv": 2400,
    "fill": "#8884d8"
  },
  {
    "name": "Philosophy",
    "hrs": 26.69,
    // "pv": 4567,
    "fill": "#83a6ed"
  },
  {
    "name": "History",
    "hrs": 15.69,
    // "pv": 1398,
    "fill": "#8dd1e1"
  },
]

const BarChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <RadialBarChart
        width={430}
        height={250}
        innerRadius="30%"
        outerRadius="100%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey='hrs' />
        <Legend iconSize={10} width={120} height={278} layout='centric' verticalAlign='bottom' align="left" />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
