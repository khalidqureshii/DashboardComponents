import ActivityCard from './ActivityCard'
import CustomPieChart from './CustomPieChart'
import NotificationArea from './NotificationArea'
import AuctionPerformance from './AuctionPerformance'

const MiddleDashboard = () => {
  return (
    <div className="w-full grid place-content-center bg-slate-700 py-6">
      <div className="grid xl:grid-cols-[repeat(23,minmax(0,1fr))] tc:grid-cols-[repeat(17,minmax(0,1fr))] xl:grid-rows-2 tc:grid-rows-3 w-auto p-4 xl:min-h-[109vh] tc:min-h-[130vh] gap-5">
        <div className="bg-white tc:col-start-1 tc:col-end-12 tc:row-start-1 tc:row-end-2 rounded-lg tc:w-[575px] tc:max-h-[480px] w-[350px]">
          <ActivityCard />
        </div>

        <div className="bg-white tc:col-start-12 tc:col-end-[18] tc:row-start-1 tc:row-end-2 rounded-lg tc:w-[306px] tc:max-h-[480px] w-[350px]">
          <CustomPieChart /> 
        </div>
        
        <div className="bg-white xl:col-start-[18] xl:col-end-[24] xl:row-start-1 xl:row-end-3 rounded-lg tc:w-[903px] xl:w-[306px] w-[350px]
          tc:col-start-1 tc:col-end-[18] tc:row-start-3 tc:row-end-4 xl:max-h-[986px]">
          <NotificationArea />
        </div>
        
        <div className="bg-white tc:col-start-1 tc:col-end-[18] tc:row-start-2 tc:row-end-3 grid place-items-center px-5 rounded-lg tc:w-[903px] tc:max-h-[480px] w-[350px]">
          <AuctionPerformance />
        </div>
      </div>
    </div>
  )
}

export default MiddleDashboard