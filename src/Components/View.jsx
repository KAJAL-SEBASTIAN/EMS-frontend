import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function View() {

  const base_url ='http://localhost:8000'

  //get an id from the url
  const {id}=useParams()
  console.log(id);

const [employeeData,setEmployeeData]=useState({})

//api fetching - function
const fetchAnEmployee=async(id)=>{
  const result = await axios.get(`${base_url}/get-an-employee/${id}`)
  console.log(result.data.employees);//object
  setEmployeeData(result.data.employees)
}

console.log(employeeData);//object with employee

useEffect(()=>{
  fetchAnEmployee(id)
},[])

  return (
    <div>
      <h3 className='text-center m-4'> View Employee Details</h3>
      <div className="row container mt-3 p-5">
        <div className="col-8">
          {/* card */}
          <MDBCard className='shadow'>
      <MDBCardBody>
        <MDBCardTitle className='text-center m-3'>Employee Details</MDBCardTitle>
        <MDBCardText>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem>Employee Id:{employeeData.id}
      </MDBListGroupItem>
      <MDBListGroupItem>Employee Name:{employeeData.name}</MDBListGroupItem>
      <MDBListGroupItem>Employee Age:{employeeData.age}</MDBListGroupItem>
      <MDBListGroupItem>Employee Designation:{employeeData.designation}</MDBListGroupItem>
      <MDBListGroupItem>Employee Salary:{employeeData.salary}</MDBListGroupItem>
    </MDBListGroup>
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="col-4">
          {/* image user icon */}
<img style={{width:"550px"}} src="https://cdn.dribbble.com/users/1223630/screenshots/8115260/media/8145a871d9c4d67ec06e047ccc6574b4.gif" alt="" />
        </div>
        <div className='text-center'>
          <Link to={'/'} className="text-center">
          <MDBBtn className='mb-3 '>Back to Home</MDBBtn>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View