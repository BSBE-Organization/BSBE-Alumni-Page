import './profile.css'
import { useState, useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom"
import { server_URL } from '../../Var'

function Profile(){
    const location = useLocation();
    const data = location.state?.data;
    console.log('data',data);

    const [formData, setFormData] = useState({
        uid: data.uid,
        name: data.name,
        email: data.email,
        degree: data.degree,
        YearOfGraduation: data.YearOfGraduation,
        phone: data.phone, 
        location: data.location,
        linkedin: data.linkedin,
        education: data.education,
        work:data.work,
    });

    const [education, setEducation] = useState([{ university: "IIT Guwahati", degree: "", year: "" }]);
    const [work,setWork] = useState([{domain: "", role: "", company: "", location: ""}]);
    
    const addEducation = ()=>{
        setEducation([...education,{university:"", degree:"", year:""}]);
    };
    const removeEducation = (index)=>{
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };
    const addWork = ()=>{
        setWork([...work,{domain:"", role:"", company:"", location:""}]);
    };
    const removeWork = (index)=>{
        const updatedWork = work.filter((_, i) => i !== index);
        setWork(updatedWork);
    };

    const handleSubmit = async ()=>{
        formData.education = education;
        formData.work = work;
        console.log(formData);
        console.log(education);
        console.log(work);

        const response = await fetch(`${server_URL}profile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if(data.success){
            console.log('Response Data:',data);
            console.log('Message:',data.message);
        } 
        else{
            console.error('Error', data.error);
        }
    }
    return(
        <>
        <div className="profile">
            <img id='profile-bg' src="images/profileBG.png" alt="" />
            <div className="profile-box">
                <h1>Profile</h1>
                <div className="profile-form">
                    <h2>Personal Information</h2>
                    <div className="profile-form-3">
                        <div className="profile-form-field type1">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder={formData.name} onChange={(e) => formData.name = e.target.value}/>
                        </div>      
                    </div>
                    <div className="profile-form-2">
                        <div className="profile-form-field type3">
                            <label htmlFor="">Contact Number</label>
                            <input type="text" placeholder={formData.phone} onChange={(e) => formData.phone = e.target.value}/>
                        </div>
                        <div className="profile-form-field type3">
                            <label htmlFor="">Mail</label>
                            <input type="mail" placeholder={formData.email} onChange={(e) => formData.email = e.target.value} disabled/>
                        </div>
                    </div>
                    <div className="profile-form-2">
                        <div className="profile-form-field type3">
                            <label htmlFor="">Current Location</label>
                            <input type="text" placeholder={formData.location} onChange={(e) => formData.location = e.target.value}/>
                        </div>
                        <div className="profile-form-field type3">
                            <label htmlFor="">LinkedIn</label>
                            <input type="text" placeholder={formData.linkedin} onChange={(e) => formData.linkedin = e.target.value}/>
                        </div>
                    </div>

                    <hr></hr>

                    <h2>Education</h2>
                    {education.map((field,index)=>(
                        <div className="profile-form-3" key={index}>
                            <div className="profile-form-field type1">
                                <label htmlFor=''>University</label>
                                <input type="text" onChange={(e) => education[index].university = e.target.value} placeholder={field.university}/>
                            </div>
                            <div className="profile-form-field type2">
                                <label htmlFor="">Degree</label>
                                <select name="" id="" onChange={(e) => education[index].degree = e.target.value} placeholder={field.degree}>
                                <   option value="Degree">Degree</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="PhD">PhD</option>
                                </select>
                            </div>
                            <div className="profile-form-field type2">
                                <label htmlFor="">Year of Graduation</label>
                                <input type="text" onChange={(e) => education[index].year = e.target.value} placeholder={field.year}/>
                            </div> 
                            <div className="profile-form-field">
                                <label htmlFor=""></label>
                                <img src="images/delete.png" alt="" onClick={() => removeEducation(index)}/>
                            </div>
                            
                        </div>
                    ))}

                    <div className="profile-button button1">
                        <button onClick={addEducation}>Add More +</button>
                    </div>
                    <hr></hr>

                    <h2>Work</h2>
                    {work.map((field,index)=>(
                        <>
                            <div className="profile-form-2">
                               <div className="profile-form-field type3">
                                   <label htmlFor="">Domain</label>
                                   <select name="" id="" onChange={(e) => work[index].domain = e.target.value}>
                                       <option value="Domain">Domain</option>
                                       <option value="Software">Software</option>
                                       <option value="Consulting">Consulting</option>
                                       <option value="Product">Product</option>
                                       <option value="AI/M">AI/ML</option>
                                       <option value="Analyst">Analyst</option>
                                       <option value="Research">Research</option>
                                       <option value="Other">Other</option>
                                   </select>
                               </div>
                               <div className="profile-form-field type3">
                                   <label htmlFor="">Role</label>
                                   <input type="text" onChange={(e) => work[index].role = e.target.value}/>
                               </div>  
                           </div>
                           <div className="profile-form-3">
                               <div className="profile-form-field type3">
                                   <label htmlFor="">Company</label>
                                   <input type="text" onChange={(e) => work[index].company = e.target.value}/>
                               </div>
                               <div className="profile-form-field" id='resbtn1'>
                                   <label htmlFor=""></label>
                                   <img src="images/delete.png" alt="" onClick={()=>removeWork(index)}/> 
                               </div>
                               <div className="profile-form-field type3" >
                                   <label htmlFor="">Location</label>
                                   <input type="text" onChange={(e) => work[index].location = e.target.value}/>
                               </div>
                               <div className="profile-form-field" id='resbtn2'>
                                   <label htmlFor=""></label>
                                   <img src="images/delete.png" alt="" onClick={()=>removeWork(index)}/> 
                               </div>
                           </div>
                        </>
                    ))}
                 
                    <div className="profile-button button1">
                        <button onClick={addWork}>Add More +</button>
                    </div>
                    
                    <hr></hr>

                    <div className="profile-button button2">
                        <button onClick={handleSubmit}>Submit</button>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Profile;