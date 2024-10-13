import { useEffect, useState } from 'react';
import '../styles/alumcard.css'
function AlumCard({data}){
    const [name,setName] = useState('');
    const [program,setProgram] = useState('NA');
    const [batch,setBatch] = useState('NA');
    const [domain,setDomain] = useState('NA');
    const [location,setLocation] = useState('');
    const [education,setEducation] = useState([]);
    const [work,setWork] = useState([]);
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [linkedin,setLinkedin] = useState('');


    useEffect(() => {
        if(data){
            setName(data.name);
            if(data.education && data.education[0]){
                setBatch(data.education[0].year);
                setProgram(data.education[0].degree);
                setEducation(data.education);
            }
            if(data.work && data.work[0]){
                setDomain(data.work[0].domain)
                setWork(data.work);
            }
            if(data.location){
                setLocation(data.location);
            } 
            if(data.linkedin){
                setLinkedin(data.linkedin);
            }
            if(data.phone){
                setPhone(data.phone);
            }
            if(data.email){
                setEmail(data.email);
            }
        }
        
    }, [data]);
    return(
        <>
            <div className="dircard">
                <h1>{name}</h1>
                <div className="IITG-eudcation">
                    <h4>{program} |</h4>
                    <h3>Class of {batch} </h3>
                </div>
                <div className="title">
                    <h3>{domain}</h3>

                </div>
                <hr></hr>

                <div className="alum-experience">
                    <h3>Work Experience</h3>
                    {work.length==0 && <li>NA</li>}
                    {work.map((value,index)=>(
                        <li key={index}>{value.role} at {value.company}, {value.location}</li>
                    ))}
                </div>
                
                <hr></hr>

                <div className="alum-education">
                    <h3>Education</h3>
                    {education.length==0 && <li>NA</li>}
                    {education.map((value,index)=>(
                        <div className="education-list" key={index}>
                        <li>{value.degree} at {value.university}</li>
                        <h3>{value.year}</h3>
                    </div>
                    ))}   
                </div>
                <div className="alum-social">
                    <a href={phone} target=''><img src="images/phone.png"/></a>
                    <a href={email} target='blank'><img src="images/mail.png"/></a>
                    <a href={linkedin} target='blank'><img src="images/linkedin.png"/></a>
                </div>
            </div>
        </>
    )
}
export default AlumCard;