import '../styles/profile.css'
import { useState, useEffect } from "react";
import { useNavigate,useLocation, Navigate  } from "react-router-dom"
import { server_URL } from './Var'

function Profile(){
    const location = useLocation();
    const storedUserData = localStorage.getItem('userData');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        uid: "",
        name: "",
        email: "",
        degree: "",
        phone: "", 
        location: "",
        linkedin: "",
        education: "",
        work: "",
    });

    const [education, setEducation] = useState([{ university: "IIT Guwahati", degree: "NA", year: "NA" }]);
    const [work,setWork] = useState([{domain: "NA", role: "NA", company: "NA", location: "NA"}]);
    useEffect(()=>{
        if (storedUserData) {
            const data = JSON.parse(storedUserData);
            // console.log(data);
            setFormData(
                {
                    uid: data.uid,
                    name: data.name,
                    email: data.email,
                    degree: data.degree,
                    phone: data.phone, 
                    location: data.location,
                    linkedin: data.linkedin,
                    education: data.education,
                    work:data.work,
                }
            )
        }
    },[storedUserData]);

    useEffect(() => {
        // console.log('formData:', formData);
        if(formData){
            if(formData.education && formData.education.length>0){
                setEducation(formData.education);
                // console.log("edu",formData.education);
            }
            if(formData.work && formData.work.length>0){
                setWork(formData.work);
                // console.log("work",formData.work);
            }
        } 
      }, [formData]);

    const addEducation = ()=>{
        setEducation([...education,{university:"NA", degree:"NA", year:"NA"}]);
    };
    const removeEducation = (index)=>{
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };
    const addWork = ()=>{
        setWork([...work,{domain:"NA", role:"NA", company:"NA", location:"NA"}]);
    };
    const removeWork = (index)=>{
        const updatedWork = work.filter((_, i) => i !== index);
        setWork(updatedWork);
    };

    const handleSubmit = async ()=>{
        formData.education = education;
        formData.work = work;
        // console.log(formData);
        // console.log(education);
        // console.log(work);

        const response = await fetch(`${server_URL}profile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        
        if(data.success){
            // console.log('Response Data:',data);
            // console.log('Message:',data.message);
            localStorage.setItem('userData', JSON.stringify(data.user));
            navigate('/');
        } 
        else{
            console.error('Error', data.error);
        }
    }
    return(
        <>
        <div className="profile">
            <img id='profile-bg' src="home/bg.jpg" alt="" />
            <div className="profile-box">
                <h1>Profile</h1>
                <div className="profile-form">
                    <h2>Personal Information</h2>
                    <div className="profile-form-3">
                        <div className="profile-form-field type1">
                            <label htmlFor="">Name</label>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
                        </div>      
                    </div>
                    <div className="profile-form-2">
                        <div className="profile-form-field type3">
                            <label htmlFor="">Contact Number</label>
                            <input type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
                        </div>
                        <div className="profile-form-field type3">
                            <label htmlFor="">Mail</label>
                            <input type="mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled/>
                        </div>
                    </div>
                    <div className="profile-form-2">
                        <div className="profile-form-field type3">
                            <label htmlFor="">Current Location</label>
                            <input type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })}/>
                        </div>
                        <div className="profile-form-field type3">
                            <label htmlFor="">LinkedIn</label>
                            <input type="text" value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}/>
                        </div>
                    </div>

                    <hr></hr>

                    <h2>Education</h2>
                    {education.map((field,index)=>(
                        <div className="profile-form-3" key={index}>
                            <div className="profile-form-field type1">
                                <label htmlFor=''>University</label>
                                <input type="text" onChange={(e) => {
                                                    const newEducation = [...education];
                                                    newEducation[index].university = e.target.value;
                                                    setEducation(newEducation);
                                                   }}  
                                                   value={field.university}/>
                            </div>
                            <div className="profile-form-field type2">
                                <label htmlFor="">Degree</label>
                                <input type="text" placeholder="B.Tech,PhD,..." onChange={(e) => {
                                                    const newEducation = [...education];
                                                    newEducation[index].degree = e.target.value;
                                                    setEducation(newEducation);
                                                   }}  
                                                   value={field.degree}/>
                            </div>
                            <div className="profile-form-field type2">
                                <label htmlFor="">Year of Graduation</label>
                                <input type="text"  onChange={(e) => {
                                                        const newEducation = [...education];
                                                        newEducation[index].year = e.target.value;
                                                        setEducation(newEducation);
                                                    }} 
                                                    value={field.year}/>
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
                                   <select name="" onChange={(e) => {
                                                    const newWork = [...work];
                                                    newWork[index].domain = e.target.value;
                                                    setWork(newWork);
                                                   }}  
                                                   value={field.domain}>
                                       <option value="NA">Domain</option>
                                       <option value="Software">Software</option>
                                       <option value="Consulting">Consulting</option>
                                       <option value="Product">Product</option>
                                       <option value="AI/ML">AI/ML</option>
                                       <option value="Analyst">Analyst</option>
                                       <option value="Research">Research</option>
                                       <option value="Design">Design</option>
                                       <option value="Civil Services">Civil Services</option>
                                       <option value="Other">Other</option>
                                   </select>
                               </div>
                               <div className="profile-form-field type3">
                                   <label htmlFor="">Role</label>
                                   <input type="text" onChange={(e) => {
                                                        const newWork = [...work];
                                                        newWork[index].role = e.target.value;
                                                        setWork(newWork);
                                                        }}  
                                                      value={field.role}/>
                               </div>  
                           </div>
                           <div className="profile-form-3">
                               <div className="profile-form-field type3">
                                   <label htmlFor="">Company</label>
                                   <input type="text" onChange={(e) => {
                                                    const newWork = [...work];
                                                    newWork[index].company = e.target.value;
                                                    setWork(newWork);
                                                   }}  
                                                   value={field.company}/>
                               </div>
                               <div className="profile-form-field" id='resbtn1'>
                                   <label htmlFor=""></label>
                                   <img src="images/delete.png" alt="" onClick={()=>removeWork(index)}/> 
                               </div>
                               <div className="profile-form-field type3" >
                                   <label htmlFor="">Location</label>
                                   <input type="text" onChange={(e) => {
                                                    const newWork = [...work];
                                                    newWork[index].location = e.target.value;
                                                    setWork(newWork);
                                                   }}  
                                                   value={field.location}/>
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