import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Admin() {

const base_url ='http://localhost:8000'

const [allEmployees,setAllEmployees]= useState([])

const fetchData = async()=>{
  //Api fetch - get all employee details
  const result = await axios.get( `${base_url}/get-all-employees`)//employee details
  console.log(result.data.employees);//object -> array
setAllEmployees(result.data.employees)
}
console.log(allEmployees);

const DeleteEmployee=async(id)=>{
  const result = await axios.delete( `${base_url}/delete-employee/${id}`)
  alert(result.data.message)
  fetchData()
}

useEffect(()=>{
  fetchData()
},[])


  return (
    <div>
      <h1 style={{textAlign:"center",margin:"20px"}}>Employee Management System</h1>
<div className="container">
  <p>Employee management refers to the processes used to ensure employees perform their best. It consists
     of keeping track of employees' achievements and progress, fostering healthy professional relationships
     and giving them the tools they need to succeed.An employee management system is technology designed to
     streamline core HR services and  improve workforce productivity. It accomplishes these goals largely by
     automating labor-intensive,administrative tasks and using analytics to drive business decisions.Depending
     on the vendor, the HR product suite may include talent acquisition, payroll, timekeeping, benefits
     administration and more</p>
</div>
{/* navigate to add page */}
<Link to={'/add'}>
<a style={{float:"right"}} className='btn btn-primary m-3' href="">Add</a>
</Link>
    <div className="containter">
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
           <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
        allEmployees.map((item)=>(
          <tr>
          <td>
          {item.id}
          </td>
          <td>
           {item.name}
          </td>
          <td>
           {item.age}
          </td>
          <td>{item.designation}</td>
          <td>
           {item.salary}
          </td>
<td>
  <div className='d-flex justify-content-evenly'>
    <Link to={`view/${item.id}`}>
    <i class="fa-solid fa-eye text-secondary"></i>
    </Link>
 <Link to={`edit/${item.id}`}>
 <i className="fa-solid fa-pen text-primary"></i>
 </Link>
 
    <i onClick={()=>DeleteEmployee(item.id)} className="fa-solid fa-trash text-danger"></i>
  </div>
</td>
        </tr>
        ))
       }
       
      </MDBTableBody>
    </MDBTable>
    </div>
    
    
    
    
    </div>
  )
}

export default Admin