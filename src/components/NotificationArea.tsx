import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"  
  import Notification from "./Notification"

const NotificationArea = () => {
  return (
    <div>
        <div className="flex justify-between p-5 border-b-2">
            <h1 className="text-xl font-semibold">Notifications</h1>
            <Select>
                <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup >
                    <SelectItem value="auctionCreated">Auction Created</SelectItem>
                    <SelectItem value="supplierJoined">Supplier Joined</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className="px-5 mt-3 max-h-[880px] flex-grow overflow-y-auto">
          <h1>Critical</h1>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <h1 className="mt-5">Moderate</h1>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>

          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>
          <Notification title="Submit RFX responses"/>

        </div>
    </div>
  )
}

export default NotificationArea