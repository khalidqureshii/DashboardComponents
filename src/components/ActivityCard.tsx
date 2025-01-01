import { useState } from "react"
import InfoCard from "./InfoCard"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"  


const ActivityCard = () => {
    const [index, setIndex] = useState<number>(0);

    const data4 = ["65%", "55%", "50%"];
    const data5 = ["30 Lacs", "300 Lacs", "2 Crs"];
    const data6 = ["4056", "40,171", "211,508"]

  return (
    <div className="w-full h-full flex flex-col">
        <div className="flex justify-between my-7 items-center px-5">
            <h1 className="text-xl font-semibold">Recent Activity</h1>
            <Select defaultValue="lastMonth" onValueChange={(value) => {
                        if (value === "lastMonth") setIndex(0);
                        else if (value === "lastYear") setIndex(1);
                        else if (value === "allTime") setIndex(2);
                    }}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Time Period" />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup >
                    <SelectItem value="lastMonth">Last 30 Days</SelectItem>
                    <SelectItem value="lastYear">Last Year</SelectItem>
                    <SelectItem value="allTime">All Time</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className="mt-3 max-h-[360px] flex-shrink overflow-y-auto px-5 pb-5">
            <InfoCard title="Cycle time reduction V/s conventional negotiations" color1="bg-[#FFF4F0]" color2="bg-rejectedbg" index={index} data={data4}/>
            <InfoCard title="Cumulative Savings achieved" color1="bg-[#E7F7FF]" color2="bg-draftbg" index={index} data={data5}/>
            <InfoCard title="Total item of values Sold through auction" color1="bg-[#FDF4F7]" color2="bg-quotedbg" index={index} data={data6}/>
            <InfoCard title="Cycle time reduction V/s conventional negotiations" color1="bg-[#FFF4F0]" color2="bg-rejectedbg" index={index} data={data4}/>
            <InfoCard title="Cycle time reduction V/s conventional negotiations" color1="bg-[#FFF4F0]" color2="bg-rejectedbg" index={index} data={data4}/>
        </div>
    </div>
  )
}

export default ActivityCard