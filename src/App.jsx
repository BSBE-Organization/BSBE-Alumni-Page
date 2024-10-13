import './App.css'
import './index.css'
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer';
import LandingPage from './components/landingPage.jsx';
import AlumList from './components/AlumList.jsx';
import Login from './components/Login.jsx';
import Teams from './components/Team.jsx';
import Profile from './components/Profile.jsx';
import { BrowserRouter,HashRouter,Route, Routes} from 'react-router-dom'
function App(){
  
  return (
    <>
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/team' element={<Teams/>} />
          <Route path='/directory' element={<AlumList/>} />
          <Route path='/auth' element={<Login/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  )
}
export default App;

