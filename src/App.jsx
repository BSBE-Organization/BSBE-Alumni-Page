import './App.css'
import { useState,useEffect } from "react";
function App(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://script.google.com/macros/s/AKfycbxY8Qrx1B8F390gOoDi4suCZnAp2UHpOLEdOtU42uzYRDvcZO1uCWSRi1KyBkv7k3qUQQ/exec',
          { method: 'GET', mode: 'cors' }
        );
        const jsonData = await response.json();
        console.log('Response data', jsonData);
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('Updated Data', data);
  }, [data]);
  
  return (
    <>
    <div className="home">
      <h1>Welcome to BSBE Alumni Page.</h1>
      <h2>The page is under development.</h2>
    </div>
    
    {/* {data.length > 0 ? (
      data.map((item, idx) => (
        <div key={idx}>
          <p>Date: {item.column1}</p>
          <p>Name: {item.column2}</p>
          <p>Email: {item.column3}</p>
          <p>Webmail: {item.column4}</p>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )} */}
  </>
  )
}
export default App;
