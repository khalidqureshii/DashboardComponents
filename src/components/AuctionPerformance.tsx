// import React from "react";
// import {
//   Line,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   CartesianGrid,
//   ResponsiveContainer,
//   ComposedChart,
//   LabelList,
// } from "recharts";

// interface DataPoint {
//   name: string;
//   totalValue: number;
//   numberOfAuctions: number;
// }

// const AuctionPerformance: React.FC = () => {
//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   const totalValuesSold = [100000, 150000, 200000, 120000, 100000, 250000, 180000, 300000, 80000, 150000, 350000, 50000];
//   const numberOfAuctions = [25, 30, 40, 20, 18, 35, 18, 38, 10, 20, 35, 10];

//   const data: DataPoint[] = months.map((month, index) => ({
//     name: month,
//     totalValue: totalValuesSold[index],
//     numberOfAuctions: numberOfAuctions[index],
//   }));

//   return (
//     <div style={{ width: "100%", height: 400 }}>
//       <ResponsiveContainer>
//         <ComposedChart
//           data={data}
//           margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis
//             yAxisId="left"
//             tickFormatter={(value: number) => `₹${value / 1000}K`}
//             ticks={[50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000]}
//             stroke="#5D84ED"
//           />
//           <YAxis
//             yAxisId="right"
//             orientation="right"
//             hide={true} // Do not display this axis
//           />
//           <Tooltip
//             formatter={(value: number, name: string) => {
//               if (name === "Total Values of item sold") {
//                 return [`₹${(value / 1000).toFixed(0)}K`, "Total Values of item sold"];
//               }
//               return [value, "Number of Auctions"];
//             }}
//           />
//           <Legend verticalAlign="bottom" layout="horizontal" align="center" height={36} />
//           {/* Bar Graph */}
//           <Bar
//             yAxisId="right"
//             dataKey="numberOfAuctions"
//             fill="#5D84ED"
//             name="Number of Auctions"
//             barSize={20}
//           >
//             <LabelList
//               dataKey="numberOfAuctions"
//               position="top"
//               formatter={(value: number) => `${value}`}
//               style={{ fill: "#5D84ED", fontWeight: "bold", fontSize: 12 }}
//             />
//           </Bar>
//           {/* Line Graph */}
//           <Line
//             yAxisId="left"
//             type="monotone"
//             dataKey="totalValue"
//             stroke="#7E5DED"
//             name="Total Values of item sold"
//             strokeWidth={2}
//             dot={false}
//           />
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default AuctionPerformance;

import React from "react";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  LabelList,
} from "recharts";

interface DataPoint {
  name: string;
  totalValue: number;
  numberOfAuctions: number;
}

const AuctionPerformance: React.FC = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const totalValuesSold = [100000, 150000, 200000, 120000, 100000, 250000, 180000, 300000, 80000, 150000, 350000, 50000];
  const numberOfAuctions = [25, 30, 40, 20, 18, 35, 18, 38, 10, 20, 35, 10];

  const data: DataPoint[] = months.map((month, index) => ({
    name: month,
    totalValue: totalValuesSold[index],
    numberOfAuctions: numberOfAuctions[index],
  }));

  // Calculate maximum number of auctions to scale the right axis
  const maxAuctions = Math.max(...numberOfAuctions);
  const scaledMax = Math.ceil(maxAuctions * 1.2); // Scale it to 120% of the max to get 60-70% of axis

  return (
    <>

    <div className="w-full flex justify-between">
    <h1>Comparison of Auction Performance Over Time</h1>
    <h1>Jan 2023 - Dec 2023</h1>
  </div>
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            yAxisId="left"
            tickFormatter={(value: number) => `₹${value / 1000}K`}
            ticks={[50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000]}
            stroke="#5D84ED"
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            hide={true} // Do not display this axis
            domain={[0, scaledMax]} // Set the max value for auctions to 120% of max auctions
          />
          <Tooltip
            formatter={(value: number, name: string) => {
              if (name === "Total Values of item sold") {
                return [`₹${(value / 1000).toFixed(0)}K`, "Total Values of item sold"];
              }
              return [value, "Number of Auctions"];
            }}
          />
          <Legend verticalAlign="bottom" layout="horizontal" align="left" height={36} />
          {/* Bar Graph */}
          <Bar
            yAxisId="right"
            dataKey="numberOfAuctions"
            fill="#5D84ED"
            name="Number of Auctions"
            barSize={20}
          >
            <LabelList
              dataKey="numberOfAuctions"
              position="top"
              formatter={(value: number) => `${value}`}
              style={{ fill: "#5D84ED", fontWeight: "bold", fontSize: 12 }}
            />
          </Bar>
          {/* Line Graph */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="totalValue"
            stroke="#7E5DED"
            name="Total Values of item sold"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    </>
  );
};

export default AuctionPerformance;
