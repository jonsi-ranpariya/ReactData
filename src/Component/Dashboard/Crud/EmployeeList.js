import React, { useEffect, useState } from "react";
import Header from "../Header";
import { toast } from "react-toastify";
import { Link, useNavigate,  } from "react-router-dom";

const EmployeeList = () => {
  const [empData, setEmpdate] = useState(null);

  const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3001/employee")
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          setEmpdate(resp);
        })
        .catch((err) => {
          toast.error("Faield Fatch" + err.message);
        });

    },[])
    const loadEdit = (id) => {
        navigate('/employee/edit/' + id);   
    }

    
    const loadDetail = (id) => {
        navigate('/employee/detail/' + id);   

    }
  
    const removeData = (id) => {
        if(window.confirm("Do you want to remove")){
            fetch("http://localhost:3001/employee/" + id ,{
                method:"DELETE",
            }).then((res) => {
                console.log(res)
                toast.success("Deleted Suceesfully")
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }  
    }

  return (
    <div>
      <Header/>
      <div className="container-fluid" style={{"marginTop":"80px"}}>
        <div className="card">
          <div className="catd-title">
            <h1><ins>Emplotyee List</ins></h1><hr></hr>
          </div>
          <div className="card-body mt-5">
          <Link className="btn btn-primary float-start mb-4" to='/employee/add'>ADD(+)</Link>
          <table className="table table-bordred">
            <thead className="bg-dark text-white" style={{"backgroundColor":"lightblue"}}>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
            {empData &&
               empData.map((item) => (
                 <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                        <a onClick={() => {loadEdit(item.id)}} className="btn btn-success mx-2">Edit</a>
                        <a onClick={() => {removeData(item.id)}} className="btn btn-danger mx-2">Delete</a>
                        <a onClick={() => {loadDetail(item.id)}} className="btn btn-secondary mx-2">View</a>
                    </td>
                 </tr>
               ))
            }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
