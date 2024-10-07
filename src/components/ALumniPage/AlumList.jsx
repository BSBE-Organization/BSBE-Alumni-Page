import './alumlist.css'
import AlumCard from './AlumCard';
function AlumList(){
    return(
        <>  
            <div className="alum-list">
                <div className="alum-box">
                    <AlumCard/>
                    <AlumCard/>
                    <AlumCard/>
                </div>
                <div className="alum-box">
                    <AlumCard/>
                    <AlumCard/>
                    <AlumCard/>
                </div>
                <div className="alum-box">
                    <AlumCard/>
                    <AlumCard/>
                    <AlumCard/>
                </div>
            </div> 
        </>
    )
}
export default AlumList;