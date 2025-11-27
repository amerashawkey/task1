import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";


export default function MasterLayout() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-9">
                    <Navbar/>
                    <Outlet/>
                </div>
            </div>
        </div>
      
    </div>
  )
}
