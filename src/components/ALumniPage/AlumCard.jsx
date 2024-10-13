import { useEffect, useState } from 'react';
import './alumcard.css'
function AlumCard({data}){
    const [name,setName] = useState('');
    const [program,setProgram] = useState('NA');
    const [batch,setBatch] = useState('NA');
    const [domain,setDomain] = useState('NA');
    const [location,setLocation] = useState('');
    const [education,setEducation] = useState([]);
    const [work,setWork] = useState([]);

    useEffect(() => {
        if(data){
            console.log('data in card',data)
            setName(data.name);
            if(data.education[0]){
                setBatch(data.education[0].year);
                setProgram(data.education[0].degree);
                setEducation(data.education);
            }
            if(data.work[0]){
                setDomain(data.work[0].domain)
                setWork(data.work);
            }
            if(data.location){
                setLocation(data.location);
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
                    <a href="tel:1234567890" target=''><img src="images/phone.png"/></a>
                    <a href="mailto:skrsumit250@gmail.com" target='blank'><img src="images/mail.png"/></a>
                    <a href="https://www.linkedin.com/in/sumit-kumar-iitg/" target='blank'><img src="images/linkedin.png"/></a>
                </div>
            </div>
        </>
    )
}
export default AlumCard;