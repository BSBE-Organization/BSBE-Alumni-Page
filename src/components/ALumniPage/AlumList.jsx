import './alumlist.css'
import AlumCard from './AlumCard';
import { useEffect, useState } from 'react';
function AlumList(){
    const [alumni,setAlumni] = useState([]);
    useEffect(()=>{
        const server_URL = "https://alumni-server-lcxk.onrender.com/";
        const fetchUser = async () => {
            try {
                const response = await fetch(`${server_URL}directory`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const result = await response.json();
                console.log('result',result);
                if(result.success){
                    console.log('response',result.alumni);
                    setAlumni([...result.alumni]);
                    console.log("Data",alumni);
                } 
                else{
                    console.error('Error', result.error);
                }
            } 
            catch (err) {
              console.error(err);
            }
        };
        fetchUser();
    },[]);

    useEffect(() => {
        console.log("Updated Alumni Data", alumni);
    }, [alumni]);

    return(
        <>  
            <div className="alum-list">
                <h1 id='alumni-heading'>Alumni Directory</h1>
                <div className="alum-box">
                    {alumni.length > 0 && alumni.map((userdata, index) => (
                        <AlumCard data={userdata} key={index} />
                    ))}
                    <AlumCard/>
                </div>
            </div> 
        </>
    )
}
export default AlumList;