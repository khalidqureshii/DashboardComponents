import { Pie, PieChart, Cell } from "recharts"

const CustomPieChart = () => {
    const data = [
        { name: "high", value: 30, color: "#00906F" },
        { name: "Medium", value: 50, color: "#5D84ED" },
        { name: "Low", value: 20, color: "#FFC756" },
    ];

    return (
    <div className="px-4 py-5 flex flex-col h-full flex-grow overflow-y-auto">
        <h1 className="text-left font-semibold text-xl">Average Bidding Activity</h1>
        <div className="w-full grid place-content-center">
        <PieChart width={270} height={270}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              cornerRadius={9}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color}  />
              ))}
            </Pie>

            <text
              x="50%" 
              y="42%"
              textAnchor="middle" 
              dominantBaseline="middle" 
              style={{ fontSize: "15px", fontWeight: "normal", fill: "#111111" }}
            >
              Total Auctions
            </text>
            <text
              x="50%" 
              y="54%" 
              textAnchor="middle" 
              dominantBaseline="middle"
              style={{ fontSize: "24px", fontWeight: "bolder", fill: "#000" }}
            >
              460
            </text>
        </PieChart>
        </div>
        
        <div className="flex border-b border-gray-200 mb-2">
          <div className="w-1/12">
            <div className="bg-white w-3.5 h-3.5 rounded-full mb-[0.94rem]"></div>
          </div>

          <div className="w-7/12">
            <h1 className="text-[0.95rem] text-gray-700 mb-1.5">Bidding Activity Level</h1>
          </div>

          <div className="w-4/12"> 
            <h1 className="text-[0.95rem] text-gray-700 text-right mb-1.5">% of Actions</h1>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-1/12">
            <div className="bg-[#00906F] w-3.5 h-3.5 rounded-full mb-[1.21rem] mt-1"></div>
            <div className="bg-[#5D84ED] w-3.5 h-3.5 rounded-full mb-[1.21rem]"></div>
            <div className="bg-[#FFC756] w-3.5 h-3.5 rounded-full mb-[0.94rem]"></div>
          </div>

          <div className="w-7/12">
            <h1 className="text-[0.95rem] mb-2.5">High</h1>
            <h1 className="text-[0.95rem] mb-2.5">Medium</h1>
            <h1 className="text-[0.95rem] mb-2.5">Low</h1>
          </div>

          <div className="w-4/12"> 
            <h1 className="text-[0.95rem] text-right mb-2.5 font-semibold">30%</h1>
            <h1 className="text-[0.95rem] text-right mb-2.5 font-semibold">50%</h1>
            <h1 className="text-[0.95rem] text-right mb-2.5 font-semibold">20%</h1>
          </div>
        </div>
    </div>
  )
}

export default CustomPieChart;