import './App.css'
import './index.css'
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/landingPage.jsx';
import TeamPage from './components/Directory/teams.jsx';
import AlumList from './components/AlumniPage/AlumList.jsx';
import Login from './components/Auth/Login.jsx';
import UserProfileForm from './components/Auth/UserForm.jsx';
import Teams from './components/ALumniPage/Team.jsx';
import Profile from './components/ALumniPage/Profile.jsx';
import { BrowserRouter,HashRouter,Route, Routes} from 'react-router-dom'
function App(){
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/team' element={<Teams/>} />
          <Route path='/directory' element={<AlumList/>} />
          <Route path='/auth' element={<Login/>} />
          <Route path='/form' element={<UserProfileForm/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;

