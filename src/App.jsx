/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import './App.css';
import PermanentDrawer from './components/PermanentDrawer/PermanentDrawer';
import { Routes, Route } from 'react-router-dom';
import MyClass from './pages/MyClass/MyClass';
import Transaction from './pages/Transaction/Transaction';
import Course from './pages/Course/Course';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={<div></div>}/>
        <Route path="/" element={<PermanentDrawer />} />
        <Route path="/mycourses/:my_course_id" element={<Course />} />

        <Route element={<PermanentDrawer />}>
          <Route path="/myclass" element={<MyClass />} />
          <Route path="/transactions" element={<Transaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
