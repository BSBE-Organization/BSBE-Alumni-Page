import './App.css'
import LandingPage from './components/landingPage';
import Navbar from './components/Navbar'
import Events from './components/Events'
import Stats from './components/stats'
function App(){
  
  return (
    <>
    <Navbar/>
      <LandingPage/>
      <Stats/>
      <Events/>
    </>
  )
}
export default App;
