import '../styles/alumlist.css'
import AlumCard from './AlumCard';
import SkeletonCard from './Skeleton';
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
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        const storedAlumni = localStorage.getItem('alumni');
        if (storedAlumni) {
            const data = JSON.parse(storedAlumni);
            const expirationTime = data.expirationTime;
            if (expirationTime > Date.now()) {
                setAlumni(data.alumni);
            } else {
                localStorage.removeItem('alumni');
            }
        } else {
            const fetchUser   = async () => {
                try {
                    const response = await fetch(`${server_URL}directory`, {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                    });
                    const result = await response.json();
                    if(result.success){
                        const expirationTime = Date.now() + 5 * 60 * 1000; // 10 minutes
                        const dataToStore = { alumni: result.alumni, expirationTime };
                        localStorage.setItem('alumni', JSON.stringify(dataToStore));
                        setAlumni(result.alumni);
                    } 
                    else{
                        console.error('Error', result.error);
                    }
                } 
                catch (err) {
                  console.error(err);
                }
            };
            fetchUser  ();
        }
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
    
        const threeChunks = groupArrayInChunks(filteredAlumni, 3); // Create chunks of 3
        const nineChunks = groupArrayInChunks(threeChunks, 3); // Group those into pages of 9
        setChunkData(nineChunks);
    }, [filteredAlumni]);


    const handleNext = () => {
        if (currentPage < chunkData.length) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            window.scrollTo(0, 0);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            window.scrollTo(0, 0);
        }
    };

    const GotoPage = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const lastPage = chunkData.length;
    

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
                        <option value="Design">Design</option>
                        <option value="Civil Services">Civil Services</option>
                        <option value="Others">Other</option>
                    </select>
                    <input type="text" placeholder='Year' value={year} onChange={(e) => setYear(e.target.value)}/>
                </div>
            
                {alumni.length==0 && 
                    <div className="alum-box">
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </div>
                }
                {alumni.length>0 && keyword && <h1 id='loading'>Search Results {keyword && <>for {keyword}</>} ({filteredAlumni.length})</h1>}
                {chunkData.length > 0 && (
                    <div className="alum-box-container">
                        {chunkData[currentPage - 1].map((chunk, chunkIndex) => (
                            <div className="alum-box" key={chunkIndex}>
                                {chunk.map((item, idx) => (
                                    <AlumCard data={item} key={idx} />
                                ))}
                            </div>
                        ))}
                    </div>
                )}
                <div className="alumni-page">
                    <div className="page-box" onClick={handlePrevious} style={{ cursor: currentPage > 1 ? 'pointer' : 'not-allowed' }}>
                        <img src="images/left.png" alt="Previous" />
                    </div>
                    <div className="page-box" style={{backgroundColor:'#AFFFD8'}}><h1>{currentPage}</h1></div>
                    {currentPage < lastPage && (<div className="page-box" onClick={()=>GotoPage(currentPage+1)}><h1>{currentPage + 1}</h1></div>)}
                    {currentPage < lastPage-1 && 
                        (<>
                            <div className="page-box"><h1>...</h1></div>
                            <div className="page-box" onClick={()=>GotoPage(lastPage)}><h1>{lastPage}</h1></div>
                        </>)
                    }
                    <div className="page-box" onClick={handleNext} style={{ cursor: currentPage < lastPage ? 'pointer' : 'not-allowed' }}>
                        <img src="images/right.png" alt="Next" />
                    </div>
                </div>
            </div> 
        </>
    )
}
export default AlumList;