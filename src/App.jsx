import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[14%] h-full fixed top-0 left-0 shadow-lg overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-[86%] ml-[14%] px-16 py-4 bg-slate-50 relative">
          <Header />   
          <div className="mt-24">
            <Dashboard />
          </div>   
        </div>
      </div>
    </>
  )
}

export default App
