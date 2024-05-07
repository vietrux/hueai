import ListHistory from "../ListHistory"
import ChatBox from "../ChatBox"

export default function HueGPT() {
  return (
    <div className="flex">
      <div className="w-2/5 md:w-1/5 h-[100vh] flex flex-col justify-between">
        <div className="p-8 text-xl">
          <i className="fa-solid fa-robot"></i> kimhueAI
        </div>
        <div className="h-full p-2 overflow-y-auto">
          <ListHistory />
        </div>
        <div className="py-8 px-4 text-center">Settings</div>
      </div>
      <div className="w-4/5">
        <ChatBox />
      </div>
    </div>
  )
}