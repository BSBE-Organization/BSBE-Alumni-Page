import './App.css'
import './index.css'
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/landingPage.jsx';
import Home from './components/Home.jsx';
import TeamPage from './components/Directory/teams.jsx';
import Alumnipage from './components/Directory/alumni.jsx'
import Login from './components/Auth/Login.jsx';
import UserProfileForm from './components/Auth/UserForm.jsx';
import { BrowserRouter,HashRouter,Route, Routes} from 'react-router-dom'
function App(){
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/team' element={<TeamPage/>} />
          <Route path='/directory' element={<Alumnipage/>} />
          <Route path='/auth' element={<Login/>} />
          <Route path='/form' element={<UserProfileForm/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;

