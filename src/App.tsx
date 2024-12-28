import ActivityCard from "./components/ActivityCard.js";
import AuctionPerformance from "./components/AuctionPerformance.js";
import CustomPieChart from "./components/CustomPieChart.js";
import NotificationArea from "./components/NotificationArea.js";

function App() {
  return (
    <div className="h-[115vh] w-full grid place-items-center bg-slate-700">
      <div className="grid grid-cols2 grid-cols-[repeat(23,minmax(0,1fr))] grid-rows-2 w-[66%] p-4 h-[109vh] gap-6">
        <div className="bg-white col-start-1 col-end-12 row-start-1 row-end-2 grid place-items-center rounded-lg">
          <ActivityCard />
        </div>

        <div className="bg-white col-start-12 col-end-[18] row-start-1 row-end-2 rounded-lg">
          <CustomPieChart />
        </div>
        
        <div className="bg-white col-start-[18] col-end-[24] row-start-1 row-end-3 rounded-lg">
          <NotificationArea />
        </div>
        
        <div className="bg-white col-start-1 col-end-[18] row-start-2 row-end-3 grid place-items-center px-5 rounded-lg">
          <div className="w-full flex justify-between">
            <h1>Comparison of Auction Performance Over Time</h1>
            <h1>Jan 2023 - Dec 2023</h1>
          </div>
          <AuctionPerformance />
        </div>
      </div>
    </div>
  )
}

export default App;