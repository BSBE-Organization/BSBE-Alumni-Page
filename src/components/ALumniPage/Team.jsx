import './team.css'
import TeamCard from './TeamCard';
function Teams(){
    return(
        <>
            <div className="teams">
                <h1>Our Team</h1>
                <div className="team-row">
                    <h1>Heads</h1>
                    <div className="team-row-card">
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                    </div>
                </div>
                <div className="team-row">
                    <h1>Developers</h1>
                    <div className="team-row-card">
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Teams;