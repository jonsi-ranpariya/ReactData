import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmployeeEdit = () => {

  const { empid } = useParams();

  // const [empData, setEmpdata] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/employee/" + empid)
      .then((res) => {
          return res.json();
      })
      .then((resp) => {
          setId(resp.id);
          setName(resp.name);
          setEmail(resp.email);
          setPhone(resp.phone);
          setActive(resp.active);
      })
      .catch((err) => {
          console.log(err.message);
      });
  }, []);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [validation,setValidation] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const empData = { id, name, email, phone, active };
    
    fetch("http://localhost:3001/employee/" + empid , {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((resp) => {
        console.log(resp);
        toast.success("Update Add Sucessfully");
        navigate("/employee");
      })
      .catch((err) => {
        toast.error("Failed ADD", + err.message);
      });
  };


  return (
    <div>
      <Header/>
      <div className="row">
        <div className="offset-lg-3 col-lg-6" style={{"marginTop":"80px"}}>
          <form className="container" onSubmit={handleSubmit} >
            <div className="card">
              <div className="card-title">
                <h1>Employee Add</h1>
              </div>
              <div className="card-body" style={{"textAlign":"left"}}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        className="form-control"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        disabled="disabled"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        value={name}
                        onMouseDown={e => setValidation(true)}
                        required
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                      {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}

                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group d-flex mt-3">
                      <input
                        type="checkbox"
                        className="form-check mx-2"
                        checked={active}
                        onChange={(e) => setActive(e.target.value)}
                      ></input>
                      <label>Active</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary mx-2">Save</button>
                <Link to="/employee" className="btn btn-danger">Close</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default EmployeeEdit
