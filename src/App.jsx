/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import './App.css';
import PermanentDrawer from './components/PermanentDrawer/PermanentDrawer';
import { Routes, Route } from 'react-router-dom';
import MyClass from './pages/MyClass/MyClass';
import Transaction from './pages/Transaction/Transaction';
import Register from './pages/Auth/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PermanentDrawer />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PermanentDrawer />}>
          <Route path="/myclass" element={<MyClass />} />
          <Route path="/transactions" element={<Transaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
