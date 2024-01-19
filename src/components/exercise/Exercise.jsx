import { Outlet } from "react-router-dom"
import { Panel } from "./panel"

const Exercise = () => {
  return (
    <div className="flex flex-row h-fit">
      <Panel />
      <Outlet />
    </div>
  )
}

export default Exercise