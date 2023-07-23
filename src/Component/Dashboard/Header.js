import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        sessionStorage.clear();
        navigate('/');
    }
  return (
    <div>
      <nav class="navbar navbar-expand-lg " style={{"backgroundColor":"rgb(12 16 99)"}}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

     <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0"  style={{"marginRight":"85%"}}>
      <li class="nav-item active">
      <Link className='text-white mx-3' to='/home' style={{"textDecoration":"none"}}>Home</Link>
      <Link className='text-white' to='/employee' style={{"textDecoration":"none"}}>Employee</Link>

      </li>
    </ul>
    <button class="btn btn-outline-secondary text-white " onClick={handleSubmit}>LogOut</button>

  </div>
</nav>
    </div>
  )
}

export default Header
