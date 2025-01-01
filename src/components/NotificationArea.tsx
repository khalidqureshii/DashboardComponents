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
    <div className="flex flex-col h-full">
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
        <div className="flex justify-center items-center">
          <div className="px-5 mt-3 xl:max-h-[880px] tc: max-h-[390px] flex-shrink overflow-y-auto flex flex-col overflow-hidden">
            <div className="flex"><h1>Critical</h1></div>
            <div className="flex flex-wrap gap-4">
              <Notification title="Submit RFX responses"/>
              <Notification title="Submit RFX responses"/>
              <Notification title="Submit RFX responses"/>
            </div>
            <div className="flex"><h1>Moderate</h1></div>
            <div className="flex flex-wrap gap-4 pb-6">
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
        </div>
    </div>
  )
}

export default NotificationArea