import '../styles/alumlist.css'
import AlumCard from './AlumCard';
import { useEffect, useState } from 'react';
import { server_URL } from './Var'
function AlumList(){

    const [alumni,setAlumni] = useState([]);
    const [chunkData,setChunkData] = useState([]);
    const [filteredAlumni, setFilteredAlumni] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [degree, setDegree] = useState('');
    const [domain, setDomain] = useState('');
    const [year, setYear] = useState('');

    useEffect(()=>{

        const fetchUser = async () => {
            try {
                const response = await fetch(`${server_URL}directory`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const result = await response.json();
                // console.log('result',result);
                if(result.success){
                    // console.log('response',result.alumni);
                    setAlumni([...result.alumni]);
                    // console.log("Data",alumni);
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
        const filterAlumni = () => {
            let filtered = alumni;
            if (degree) {
                filtered = filtered.filter(alum => alum.education && alum.education.some(edu => edu.degree == degree));
            }
            if (domain) {
                filtered = filtered.filter(alum => alum.work && alum.work.some(job => job.domain == domain));
            }
            if (year) {
                filtered = filtered.filter(alum => alum.education && alum.education.some(edu => edu.year == year));
            }
            if (keyword) {
                filtered = filtered.filter(alum => 
                    (alum.name && alum.name.toLowerCase().includes(keyword.toLowerCase())) || 
                    (alum.email && alum.email.toLowerCase().includes(keyword.toLowerCase())) || 
                    (alum.phone && alum.phone.includes(keyword)) || 
                    (alum.location && alum.location.toLowerCase().includes(keyword.toLowerCase())) ||
                    (alum.linkedin && alum.linkedin.toLowerCase().includes(keyword.toLowerCase())) || 
                    (alum.education && alum.education.some(edu => 
                        (edu.university && edu.university.toLowerCase().includes(keyword.toLowerCase())) ||
                        (edu.degree && edu.degree.toLowerCase().includes(keyword.toLowerCase())) ||
                        (edu.year && edu.year.toLowerCase().includes(keyword.toLowerCase()))
                        
                    )) ||
                    (alum.work && alum.work.some(job => 
                        (job.domain && job.domain.toLowerCase().includes(keyword.toLowerCase())) || 
                        (job.role && job.role.toLowerCase().includes(keyword.toLowerCase())) || 
                        (job.company && job.company.toLowerCase().includes(keyword.toLowerCase())) 
                    ))
                );
            }
            setFilteredAlumni(filtered);
        };
        // console.log('filter data',filteredAlumni);
        filterAlumni();
    }, [keyword,degree, domain, year, alumni]);

    useEffect(() => {
        const groupArrayInChunks = (arr, chunkSize) => {
            const chunks = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                chunks.push(arr.slice(i, i + chunkSize));
            }
            return chunks;
        };

        setChunkData(groupArrayInChunks(filteredAlumni, 3));
    }, [filteredAlumni]);

    return(
        <>  
            <div className="alum-list">
                <h1 id='alumni-heading'>Alumni Directory</h1>
                <div className="filter">
                    <div className="search">
                        <img src="images/search.png" alt="" />
                        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
                    </div>
                    <select name="" id="" value={degree} onChange={(e) => setDegree(e.target.value)}>
                        <option value="">Degree</option>
                        <option value="B.Tech" >B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="PhD">PhD</option>
                    </select>
                    <select name="" id="" value={domain} onChange={(e) => setDomain(e.target.value)}>
                        <option value="">Domain</option>
                        <option value="Software">Software</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Product">Product</option>
                        <option value="AI/ML">AI/ML</option>
                        <option value="Analyst">Analyst</option>
                        <option value="Research">Research</option>
                        <option value="Others">Other</option>
                    </select>
                    <input type="text" placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)}/>
                </div>
                {alumni.length==0 && <h1 id='loading'>Loading.....</h1>}
                {alumni.length>0 && <h1 id='loading'>Search Results {keyword && <>for {keyword}</>} ({filteredAlumni.length})</h1>}
                {chunkData.map((chunk,index)=>(
                    <div className="alum-box" key={index}>
                        {chunk.map((item,idx)=>(
                            <AlumCard data={item} key={idx} />
                        ))}
                    </div>
                ))}
                
            </div> 
        </>
    )
}
export default AlumList;