import axios from "axios"
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './UsersList.module.css'


export default function UsersList() {
  let navigate =useNavigate();
  const[users,setUsers]=useState([]);
  const [show, setShow] = useState(false);
  const[userId,setuserId] = useState(0);
  const[userName,setuserName]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setuserId(user.id);
    setuserName(user.username);
    setShow(true);
  }
  const deleteUser=async()=>{
   try{
          let response = await axios.delete(`https://dummyjson.com/users/${userId}`);
        console.log(response);

  handleClose();
  toast.success('delete is done ')
   }catch(error){
    toast.error('delete is failer')

   }

  }
  const getUsers=async()=>{
 try{
     let response = await axios.get('https://dummyjson.com/users');
   setUsers(response.data.users);
 }catch(error){
  toast.error('magash..')
 }

  }
  useEffect(()=>{
    getUsers();

  },[]);

  
  return (
    <>

  
     <div style={{backgroundColor:'#E5E5E5'}}>

      <Modal show={show} onHide={handleClose}>
    
        <Modal.Body>Are you sure you want to  delet this {userName}?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteUser}>
          yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
           no 
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="comp-title d-flex justify-content-between p-5">
        <h3>Users List </h3>

        <button className="btn btn-warning" 
        onClick={()=>navigate("/home/users-data")}
        
        >Add new user</button>

        </div>

        <div className="table-container p-4">
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    
      <th></th>
    </tr>
  </thead>
  <tbody>
  
    {users.map(user=>
        <tr>
      <th scope="row"><img className="w-25" src={user.image} /></th>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
       
             <button

  className="btn p-0 border-0 bg-transparent"
  onClick={() => navigate(`/home/users-data/${user.id}`)}
>
   <i className="fa-solid fa-edit text-warning px-3" aria-hidden="true"
     
   
   
   ></i>

</button>

      <button
      onClick={()=>handleShow(user)}
  className="btn p-0 border-0 bg-transparent"
>
  <i className="fa-solid fa-trash text-warning"></i>
</button>

      </td>
    </tr>
    )}
   
  </tbody>
</table>

      </div>
      </div>
   
    </>
  )
}
