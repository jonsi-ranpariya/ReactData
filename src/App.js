import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Component/PrivateRoute';
import Home from './Component/Dashboard/Home';
import EmployeeList from './Component/Dashboard/Crud/EmployeeList';
import EmployeeAdd from './Component/Dashboard/Crud/EmployeeAdd';
import EmployeeEdit from './Component/Dashboard/Crud/EmployeeEdit';
import EmployeeDetail from './Component/Dashboard/Crud/EmployeeDetail';

function App() {
  return (
    <div className="App">
    <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/' element={<PrivateRoute/>}>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/employee' element={<EmployeeList/>}></Route>
            <Route path='/employee/add' element={<EmployeeAdd/>}></Route>
            <Route path='/employee/edit/:empid' element={<EmployeeEdit/>}></Route>
            <Route path='/employee/detail/:empid' element={<EmployeeDetail/>}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
