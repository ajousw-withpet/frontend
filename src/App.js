import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Calendar from './pages/Calendar/Calendar';
import UserInfo from './pages/UserInfo/UserInfo';
import UsageList from './pages/UsageList/UsageList';
import PetList from './pages/PetList/PetList';
import PetsitterDetial from './pages/PetsitterDetial/PetsitterDetial';
import PetsitterApply from './pages/PetsitterApply/PetsitterApply';
import PetsitterCalendar from './pages/PetsitterCalendar/PetsitterCalendar';
import PetsittersDogInfo from './pages/PetsittersDogInfo/PetsittersDogInfo';
import PetsitterNewDog from './pages/PetsitterNewDog/PetsitterNewDog';
import Profit from './pages/Profit/Profit';
import AdminMainPage from './pages/AdminMainPage/AdminMainPage';
import AdminApplyInfo from './pages/AdminApplyInfo/AdminApplyInfo';
import ApiTest from './pages/ApiTest';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 반려인 페이지 */}
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/usageList" element={<UsageList />} />
          <Route path="/petList" element={<PetList />} />
          <Route path="/petsitterdetail" element={<PetsitterDetial />} />

          {/* 펫시터 페이지 */}
          <Route path="/petsitterapply" element={<PetsitterApply />} />
          <Route path="/pesittercalendar" element={<PetsitterCalendar />} />
          <Route path="/petsittersdoginfo" element={<PetsittersDogInfo />} />
          <Route path="/petsitternewdog" element={<PetsitterNewDog />} />
          <Route path="/profit" element={<Profit />} />

          {/* 관리자 페이지 */}
          <Route path="/adminmainpage" element={<AdminMainPage />} />
          <Route path="/adminapplyInfo" element={<AdminApplyInfo />} />
        </Route>
      </Routes>
      <ApiTest />
    </>

  );
}

export default App;
