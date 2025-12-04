import { useContext } from 'react'
import style from './Navbar.module.css'
export default function Navbar() {
  // let{loginData}=useContext(AuthContext);
  return (
    <>
    <div className={style.nav}>
     
        <i className="fa-regular fa-circle-play fa-rotate-180 fa-2xl" style={{color:'#C4C4C4'}} ></i>
       <div className="d-flex">
         <input type="search" placeholder="Search..." aria-label="Search" 
         style={{color:'#C4C4C4' ,
          width:"212px",
          height:"37px",
          border:"1px solid #C4C4C4",
           borderRadius: '8px'
         }}
         />
      
        <i className="fa-regular fa-bell fa-2xl"  style={{color:'#C4C4C4'}}></i>
        
       </div>
   
  </div>
   


    </>
  )
}
