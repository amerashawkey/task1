import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import photo from '../../../assets/image/image.png'
import style from './sidebar.module.css'

export default function SideBar() {
  return (
  <>

  <div className={style.sidebarcontainer } >
    <Sidebar>
  <Menu>
    <h2 className='my-5 ms-3'>UMS</h2>
          <div className='m-4 text-center'  >
                <img className='rounded-circle' src={photo} alt="sora" 
                style={{width:'100%'}}
      /> 
         <h5 className='my-3' >Karthi Madesh </h5>
         <h6 className='my-2 text-warning'> Admin</h6>
         </div>
      <MenuItem className='my-1' icon={<i className='fa fa-home'></i>} component={<Link to="/" />}> Home </MenuItem>
      <MenuItem className='my-1' icon={<i className='fa fa-home'></i>}  component={<Link to="/home/users-list" />} > Users </MenuItem>
  
    <MenuItem className='my-1' icon={<i className='fa fa-home'></i>}  component={<Link to="/home/user-data" />} > AddUser </MenuItem>
    <MenuItem className='my-1' icon={<i className='fa fa-home'></i>}  component={<Link to="/home/user-profile" />} > Profile </MenuItem>
  </Menu>
</Sidebar>
</div>

</>
  )
}
