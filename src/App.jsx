/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import './App.css';
import PermanentDrawer from './components/PermanentDrawer/PermanentDrawer';
import { Routes, Route } from 'react-router-dom';
import MyClass from './pages/MyClass/MyClass';
import Transaction from './pages/Transaction/Transaction';
import UserSettings from './pages/UserSettings/UserSettings';
import AddNewCourse from './pages/AddNewCourse/AddNewCourse';
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/Login';
import Course from './pages/Course/Course';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNewSection from './pages/AddNewCourse/AddNewSection/AddNewSection';
import Landing from './pages/Landing/Landing';
import Categories from './pages/Categories/Categories';
import CategoriesDetails from './pages/CategoriesDetails/CategoriesDetails';
import Drawer from './components/Drawer/Drawer';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Drawer />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/allcategories" element={<Categories />} />
          <Route path="/categories/:category_id" element={<CategoriesDetails />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route path="/mycourses/:my_course_id" element={<Course />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<PermanentDrawer />} >
            <Route exact path="/myclass" element={<MyClass />} />
            <Route exact path="/transactions" element={<Transaction />} />
            <Route exact path="/settings" element={<UserSettings />} />
          </Route>
          <Route exact path="/addcourse" element={<AddNewCourse />} />
          <Route exact path="/addsection" element={<AddNewSection />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
