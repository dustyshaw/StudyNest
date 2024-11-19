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
  value: number;
};

// Sample data for the chart
const data: ChartData[] = [
  { name: "React", value: 300 },
  { name: "Philosophy", value: 400 },
  { name: "History", value: 150 },
];

const BarChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      {/* <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart> */}
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          //   minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          //   clockWise={true}
          dataKey="value"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="bottom"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
