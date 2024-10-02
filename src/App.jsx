import './App.css'
import Footer from './components/Footer';
import LandingPage from './components/LandingPage/landingPage.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App(){
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;

