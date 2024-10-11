import { Plus, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom";

export default function UserProfileForm() {
  const location = useLocation();
  const data = location.state?.data;
  console.log('data',data);

  const [formData, setFormData] = useState({
    uid: data.uid,
    name: data.name,
    email: data.email,
    degree: data.degree,
    YearOfGraduation: data.YearOfGraduation,
    phone: data.phone || "Phone", 
    location: data.location,
    linkedin: data.linkedin,
    education: data.education,
    work:data.work,
  });



  const [educationFields, setEducationFields] = useState([{ university: "", degree: "", year: "" }]);
  const [work,setWork] = useState([{domain: "software-development", currentPosition: "", company: "", experience: ""}])

  const addEducationField = () => {
    setEducationFields([
      ...educationFields,
      { university: "", degree: "", year: "" }
    ])
  };

  const addWorkField = () => {
    setWork([
      ...work,
      {domain: "software-development", currentPosition: "", company: "", experience: ""}
    ])
  }

  const handleRemoveEducationField = (index) => {
    const updatedFields = educationFields.filter((_, i) => i !== index);
    setEducationFields(updatedFields);
  };
  const handleRemoveWorkField = (index) => {
    const updatedFields = work.filter((_, i) => i !== index);
    setWork(updatedFields);
  };

  const server_URL = "http://localhost:8000/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.education = educationFields;
    formData.work = work;
    console.log(formData);
    console.log(educationFields);
    console.log(work);
    const response = await fetch(`${server_URL}profile`, {
      method: 'POST',
      credentials: 'include',
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
  };

  
  return (
    <div
      className="min-h-screen bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: "url('home/bg.jpg')",
        margin:"110px 0 0 0",
        padding:"0 0 50px 0"
      }}
    >
      <div className="w-full pt-10 pb-4 text-center text-black">
              <h1 className="text-5xl font-semibold mb-6">Add your Details</h1>
      </div>
      <main className="container mx-auto px-4">
        {/* Form Section with "Add your Details" at the top left */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-6 overflow-hidden">
          <div className="p-6">

            <form onSubmit={handleSubmit} className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder={formData.name}
                    onChange={(e) => formData.name = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                    <input 
                    type="text" 
                    id="degree" 
                    name="degree"
                    onChange={(e) => formData.degree = e.target.value}
                    placeholder={formData.degree}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
                    <input 
                    type="text" 
                    id="graduationYear"
                    name="graduationYear" 
                    placeholder={formData.YearOfGraduation}
                    onChange={(e) => formData.YearOfGraduation = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Contact Info</label>
                    <div className="flex">
                      <select className="w-20 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="91">+91</option>
                        <option value="1">+1</option>
                      </select>
                      <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      placeholder={formData.phone} 
                      onChange={(e) => formData.phone = e.target.value}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder={formData.email}
                    onChange={(e) => formData.email = e.target.value}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input 
                    type="text" 
                    id="location"
                    name="location"
                    placeholder={formData.location}
                    onChange={(e) => formData.location = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                    <input 
                    type="text" 
                    id="linkedin" 
                    name="linkedin"
                    placeholder={formData.linkedin} 
                    onChange={(e) => formData.linkedin = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
                {formData.education.map((field, index) => (
                  <div key={index} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor={`university-${index}`} className="block text-sm font-medium text-gray-700 mb-1">University</label>
                        <input
                          type="text"
                          id={`university-${index}`}
                          placeholder={field.university}
                          disabled
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                        <input
                          type="text"
                          id={`degree-${index}`}
                          placeholder={field.degree}
                          disabled
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor={`year-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
                        <div className="relative">
                          <input
                            type="text"
                            id={`year-${index}`}
                            placeholder={field.year}
                            disabled
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          { (
                            <button
                              type="button"
                              className="absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none"
                              onClick={() => handleRemoveEducationField(index)}
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {educationFields.map((field, index) => (
                  <div key={index} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor={`university-${index}`} className="block text-sm font-medium text-gray-700 mb-1">University</label>
                        <input
                          type="text"
                          id={`university-${index}`}
                          onChange={(e) => educationFields[index].university = e.target.value}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor={`degree-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                        <input
                          type="text"
                          id={`degree-${index}`}
                          onChange={(e) => educationFields[index].degree = e.target.value}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor={`year-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
                        <div className="relative">
                          <input
                            type="text"
                            id={`year-${index}`}
                            onChange={(e) => educationFields[index].year = e.target.value}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          { (
                            <button
                              type="button"
                              className="absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none"
                              onClick={() => handleRemoveEducationField(index)}
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center w-full mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={addEducationField}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add More
                  </button>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Experience</h2>
                {formData.work.map((field,index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`domain-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
                    <input 
                    type="text"
                    id={`domain-${index}`}
                    placeholder={field.domain}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor={`currentPosition-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Current Position</label>
                    <input 
                    type="text"
                    id={`currentPosition-${index}`}
                    placeholder={field.currentPosition}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor={`company-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input 
                    type="text"
                    id={`company-${index}`}
                    placeholder={field.company}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor={`experience-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <div className="relative">
                    <input 
                    type="text"
                    id={`experience-${index}`}
                    placeholder={field.experience}
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    {(
                            <button
                              type="button"
                              className="absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none"
                              onClick={() => handleRemoveWorkField(index)}
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                    )}
                    </div>
                  </div>
                </div>
                ))}
                {work.map((field,index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`domain-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
                    <select 
                    id={`domain-${index}`} 
                    value={field.domain || "software-development"} 
                    onChange={(e) => {
                      const updatedWork = [...work];
                      updatedWork[index].domain = e.target.value; 
                      setWork(updatedWork); 
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="software-development">Software Development</option>
                      <option value="data-analysis">Data Analysis</option>
                      <option value="project-management">Project Management</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`currentPosition-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Current Position</label>
                    <input 
                    type="text"
                    id={`currentPosition-${index}`}
                    onChange={(e) => work[index].currentPosition = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor={`company-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input 
                    type="text"
                    id={`company-${index}`}
                    onChange={(e) => work[index].company = e.target.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor={`experience-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <div className="relative">
                    <input 
                    type="text"
                    id={`experience-${index}`}
                    onChange={(e) => work[index].experience = e.target.value} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                    { (
                            <button
                              type="button"
                              className="absolute right-2 top-2 text-red-500 hover:text-red-700 focus:outline-none"
                              onClick={() => handleRemoveWorkField(index)}
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                    )}
                    </div>
                  </div>
                </div>
                ))}
                

                <div className="flex justify-center w-full mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={addWorkField}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add More
                  </button>
                </div>
              </section>

              <div className="flex justify-end w-full">
                <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
