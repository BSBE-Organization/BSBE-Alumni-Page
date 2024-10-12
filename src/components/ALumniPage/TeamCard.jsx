import './teamcard.css'
import { useEffect,useState } from 'react';
function TeamCard({data}){
    console.log(data);
    const [userData, setUserData] = useState({ name:"", role:"", batch:"", phone:"", mail:"", LinkedIn:""});

    useEffect(()=>{
        if(data){
            setUserData({ name:data.name, role:data.role, batch:data.batch, phone:"tel:"+data.phone, mail:"mailto:"+data.mail, LinkedIn:"https://www.linkedin.com/in/"+data.LinkedIn})
        }
    },[data])
    return(
        <>
            <div className="team-card">
                <img src="images/people.png" alt="" />
                <h1>{userData.name}</h1>
                <h2>{userData.role}</h2>
                <h3>{userData.batch}</h3>
                <div className="team-social">
                    <a href={userData.phone} target=''><img src="images/phone.png"/></a>
                    <a href={userData.mail} target='blank'><img src="images/mail.png"/></a>
                    <a href={userData.LinkedIn} target='blank'><img src="images/linkedin.png"/></a>
                </div>
            </div>
        </>
    )
}
export default TeamCard;