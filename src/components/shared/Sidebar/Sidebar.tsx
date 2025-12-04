import React, { useContext } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import style from './sidebar.module.css'
import { AuthContext } from '../../context/AuthContext';

export default function SideBar() {
  let{loginData}=useContext(AuthContext);
  return (
  <>

  <div className={style.sidebarcontainer } >
    <Sidebar className={style.sidebar}>
  <Menu>
    <h2 className='my-3 '>UMS</h2>
          <div className='m-4 text-center'  >
                <img className='rounded-circle' src={loginData?.image} alt="sora" 
                style={{width:'100%'}}
      /> 
         <h5 className='my-3' >{loginData?.firstName} </h5>
         <h6 className='my-2 text-warning'> Admin</h6>
         </div>
      <MenuItem className='my-1' icon={<i className='fa fa-home'></i>} component={<Link to="/" />}> Home </MenuItem>
     
      <MenuItem className='my-1' icon={<i className="fa-solid fa-draw-polygon fa-rotate-90"></i>}   component={<Link to="/home/users-list" />} > Users </MenuItem>
  
    <MenuItem className='my-1' icon={<i className="fa-solid fa-graduation-cap"></i>}  component={<Link to="/home/user-data" />} > AddUser </MenuItem>
    <MenuItem className='my-1' icon={<i className="fa-regular fa-user"></i>}  component={<Link to="/home/user-profile" />} > Profile </MenuItem>
  </Menu>
</Sidebar>
</div>

</>
  )
}
