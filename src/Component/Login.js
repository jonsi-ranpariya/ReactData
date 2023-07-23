import React, { createContext, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

const Login = () => {

  const userContext = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      await fetch("http://localhost:3001/user")
        .then((res) => {
          return res.json();
        })
        .then((resp) => {         
          userContext.setData(resp);
          const matchData = resp.find(
            (user) => user.id === username && user.password === password
          );

          if (matchData) {
            sessionStorage.setItem("name" , matchData.id)
            toast.success("Login Successfully");
            navigate("/home");
          } else {
            toast.error("Please enter the valid credential");
          }
        })
        .catch((err) => {
          toast.error("Login Faield", err.message);
        });
    }
  };

  const validation = () => {
    let result = true;
    if (username === "" || username === null) {
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      toast.warning("Please Enter Username");
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <div className="container">
          <form className="card" onSubmit={handleSubmit}>
            <div className="card-header">
              <h1>Login User</h1>
            </div>
            <div className="card-body" style={{ textAlign: "left" }}>
              <div className="row">
                <div className="form-group">
                  <label>
                    UserName<span style={{ color: "red" }}> * </span>
                  </label>
                  <input
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    Password<span style={{ color: "red" }}> * </span>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              {" | "}
              <Link to={"/register"} className="btn btn-success">
                New User
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
