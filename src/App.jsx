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
      <img src="bg.jpg" alt="" />
      <div className="box">
        <h1>Welcome to BSBE Alumni Page.</h1>
        <h3>BSBE Alumni Meet 2024, October 26 - 27, 2024, Oct 26, 2024 to Oct 27, 2024</h3>
        <h3>Dept. of Biosciences and Bioengineering will be hosting their first alumni meet on 26th and 27th October, 2024. Regular updates will be posted on</h3>
        <a href="https://www.linkedin.com/in/dept-of-biosciences-and-bioengineering-iit-guwahati-11980a325/">LinkedIn</a>
        <a href="https://www.instagram.com/bsbe_iitguwahati/">Instagram</a>
        <a href="https://x.com/BSBE_IITG">Twitter</a>
        <h4>All the alumi are requeted to register: <a href="https://docs.google.com/forms/d/e/1FAIpQLSf1U22vyZFMzBCH9R7GeCQbGPR0Y9CsccOKWDkRsElcawCCrQ/viewform">Form</a></h4>
      </div>
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
