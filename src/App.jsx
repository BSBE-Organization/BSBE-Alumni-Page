import './App.css'
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App(){
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={Home} />
          <Route path='/directory' element={appointmentType} />
          <Route path="/team"/>
          <Route path='/auth' element={login} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;
