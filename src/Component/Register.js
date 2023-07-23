import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Register = () => {
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [country,setCountry] = useState('india');
    const [address,setAddress] = useState('');
    const [gender,setGender] = useState('male');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const regData = {id,name,password,email,phone,country,address,gender};

        if(validation() ){
            await fetch("  http://localhost:3001/user",{
                method:"POST",
                headers:{'content-type':"application/json"},
                body: JSON.stringify(regData),
            }).then((res) => {
                // console.log(res);
                toast.success("Registration Successfully");
                navigate('/');
            }).catch((err) => {
                toast.error("Faield Register", + err.message)
            })
        }
    }

    const validation = () => {
        let result = true;
        let errMsg = "Please enter the value in";
        if(id === '' || id === null) {
            result = false;
            errMsg += 'username';
        }
        if(name === '' || name === null){
            result = false;
            errMsg += 'name';       
        }
        if(phone === '' || phone === null){
            result = false;
            errMsg += 'Phone';       
        }
        if(!result){
            toast.warning(errMsg)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                result = false;
                toast.warning("plese enter the valid email");
            }
        }
        return result;
    }


  return (
    <div className="row">
        <div className="offset-lg-3 col-lg-6" style={{"marginTop":"100px"}}>
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>Register</h1>
                    </div>
                    <div className="card-body" style={{"textAlign":"left"}}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>UserName <span style={{"color":"red"}}> * </span></label>
                                    <input className='form-control' value={id} onChange={e => setId(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Password <span style={{"color":"red"}}> * </span></label>
                                    <input className='form-control' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>FullName <span style={{"color":"red"}}> * </span></label>
                                    <input className='form-control' value={name} onChange={e => setName(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email <span style={{"color":"red"}}> * </span></label>
                                    <input className='form-control' type='email' value={email} onChange={e => setEmail(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone <span style={{"color":"red"}}> * </span></label>
                                    <input className='form-control' value={phone} onChange={e => setPhone(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Country <span style={{"color":"red"}}> * </span></label>
                                    <select className='form-control' value={country} onChange={e => setCountry(e.target.value)}>
                                        <option>Select</option>
                                        <option value='india'>India</option>
                                        <option value='us'>US</option>
                                        <option value='australia'>Australia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                <label>Address</label>
                                    <textarea className='form-control' rows={2} value={address} onChange={e => setAddress(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group d-flex mx-2 mt-4">
                                 <label>Gender:</label>&nbsp;&nbsp;
                                    <input className='form-check mx-2' value="male" type='radio' checked={gender === 'male'} onChange={e => setGender(e.target.value)}></input>
                                    <label>Male</label>
                                    <input className='form-check mx-2' value="female" type='radio' checked={gender === 'female'} onChange={e => setGender(e.target.value)}></input>
                                    <label>Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type='submit' className='btn btn-primary mx-2'>Register</button>
                        <Link to='/' className='btn btn-danger'>Close</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register
