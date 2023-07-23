import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Link, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { empid } = useParams();

  const [empData, setEmpdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Header />
        <div className="card">
          <div className="card-title">
            Employee Details
          </div>
          <div className="card-body">
            {empData &&
              <div>
                <h1>Employee Name: {empData.name} ({empData.id})</h1>
                <h2>Email:{empData.email}</h2>
                <h2>Phone:{empData.phone}</h2>
                <Link to="/employee" className="btn btn-danger" >Back</Link>
              </div>
            }
          </div>
        </div>
    </div>
  );
};

export default EmployeeDetail;
