/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import './App.css';
import PermanentDrawer from './components/PermanentDrawer/PermanentDrawer';
import { Routes, Route } from 'react-router-dom';
import MyClass from './pages/MyClass/MyClass';
import Transaction from './pages/Transaction/Transaction';
import AddNewCourse from './pages/AddNewCourse/AddNewCourse';
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNewSection from './pages/AddNewCourse/AddNewSection/AddNewSection';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<PermanentDrawer />} >
            <Route exact path="/myclass" element={<MyClass />} />
            <Route exact path="/transactions" element={<Transaction />} />
          </Route>
          <Route exact path="/addcourse" element={<AddNewCourse />} />
          <Route exact path="/addsection" element={<AddNewSection />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
