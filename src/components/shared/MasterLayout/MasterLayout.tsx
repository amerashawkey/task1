import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/sideBar";







export default function MasterLayout() {
  return (
    <div>
 
            {/* <div className="row">
                <div className="col-md-3">
                  <SideBar/>
                </div>
                <div className="col-md-9">
                    <Navbar/>
                    <Outlet/>
                </div>
            </div> */}
            <div className="d-flex" >
          <div className="nn"  >
             <SideBar/>
          </div>
          <div className="w-100 ">
             <Navbar/>
              <Outlet/>
          </div>

        </div>
      
    </div>
  )
}
