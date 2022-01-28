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
import Feedback from './pages/Feedback/Feedback';
import FeedbackReqCourse from './pages/FeedbackReqCourse/FeedbackReqCourse';
import FeedbackReqCouns from './pages/FeedbackReqCouns/FeedbackReqCouns';
import RequestCourse from './pages/RequestCourse/RequestCourse';
import RequestCounselling from './pages/RequestCounselling/RequestCounselling';
import Landing from './pages/Landing/Landing';
import Categories from './pages/Categories/Categories';
import CategoriesDetails from './pages/CategoriesDetails/CategoriesDetails';
import Drawer from './components/Drawer/Drawer';
import CoursePreview from './pages/CoursePreview/CoursePreview';
import Payments from './pages/Payments/Payments';
import AddNewLesson from './pages/AddNewCourse/AddNewSection/AddNewLesson/AddNewLesson';
import AddNewQuiz from './pages/AddNewCourse/AddNewSection/AddNewLesson/AddNewQuiz/AddNewQuiz';
import AddNewExercise from './pages/AddNewCourse/AddNewSection/AddNewLesson/AddNewQuiz/AddNewExercise/AddNewExercise';
import AllCourse from './pages/AllCourse/AllCourse';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Drawer />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/allcategories" element={<Categories />} />
          <Route path="/allcourses" element={<AllCourse />} />
          <Route path="/categories/:category_id" element={<CategoriesDetails />} />
          <Route exact path="/courses/:course_id" element={<CoursePreview />} />
          <Route exact path="/payments/course/:course_id" element={<Payments />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/req-courses" element={<RequestCourse />} />
        <Route exact path="/help/courses/:course_id" element={<RequestCounselling />} />
        <Route path="/mycourses/:my_course_id" element={<Course />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<PermanentDrawer />} >
            <Route exact path="/myclass" element={<MyClass />} />
            <Route exact path="/transactions" element={<Transaction />} />
            <Route exact path="/settings" element={<UserSettings />} />
            <Route element={<Feedback />} >
              <Route exact path="/feedback/reqCourse" element={<FeedbackReqCourse />} />
              <Route exact path="/feedback/reqCounselling" element={<FeedbackReqCouns />} />
            </Route>
          </Route>
          <Route exact path="/addcourse" element={<AddNewCourse />} />
          <Route exact path="/addsection" element={<AddNewSection />} />
          <Route exact path="/addlesson" element={<AddNewLesson />} />
          <Route exact path="/addquiz" element={<AddNewQuiz />} />
          <Route exact path="/addexercise" element={<AddNewExercise />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
