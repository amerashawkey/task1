import style from './Navbar.module.css'
export default function Navbar() {
  return (
    <>
    <div className={style.nav}>
      <div className="icon">
        <i className="fa-regular fa-circle-play fa-rotate-180 fa-2xl" style={{color:'#C4C4C4'}} ></i>

</div>

  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" style={{color:'#C4C4C4'}}/>
      
        <i className="fa-regular fa-bell fa-2xl"  style={{color:'#C4C4C4'}}></i>
        
      </form>
  </div>
   


    </>
  )
}
