import './App.css'
import Login from './assets/Login';
import LandingPage from './components/landingPage';
import Navbar from './components/Navbar'
import Events from './components/Events'
import Stats from './components/stats'
function App(){
  
  return (
    <><Navbar/>
      {/* <Login/> */}
      <LandingPage/>
      <Stats/>
      <Events/>
      
    </>
  )
}
export default App;
