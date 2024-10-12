import LinkedIn from 'next-auth/providers/linkedin';
import './team.css'
import TeamCard from './TeamCard';
function Teams(){
    const teamData = [
        { name:"Aditya Jindal", role:"Coordinator", batch:"B.Tech 2025", phone:"+91-8447753616", mail:"adityajindal19@gmail.com", LinkedIn:"aditya-jindal-"},
        { name:"Sumit Kumar", role:"Lead Developer", batch:"B.Tech 2025", phone:"+91-8294677640", mail:"skrsumit250@gmail.com", LinkedIn:"sumit-kumar-iitg"},
        { name:"Sumeet Deepak Ahire", role:"Designer", batch:"B.Tech 2025", phone:"+91-9022801127", mail:"a.sumeet@iitg.ac.in", LinkedIn:"sumeet-ahire-98042922a"},
        { name:"N Nonglen Aditya Singha", role:"Developer", batch:"B.Tech 2026", phone:"+91-6002409602", mail:"nonglenadi@gmail.com", LinkedIn:"nonglen-aditya-singha-00a030247"},
        { name:"Dhiyanesh G", role:"Developer", batch:"B.Tech 2026", phone:"+91-7092695851", mail:"dhiyaneshg05@gmail.com", LinkedIn:"dhiyanesh-g-2115432a9"},
        { name:"Udai Bhati", role:"Developer", batch:"B.Tech 2026", phone:"+91-9057562991", mail:"udaibhati07@gmail.com", LinkedIn:"udai-bhati-761254245"},
    ]
    return(
        <>
            <div className="teams">
                <h1>Our Team</h1>
                <div className="team-row">
                    <h1>Heads</h1>
                    <div className="team-row-card">
                        <TeamCard data={teamData[0]}/>
                        <TeamCard data={teamData[1]}/>
                        <TeamCard data={teamData[2]}/>
                    </div>
                </div>
                <div className="team-row">
                    <h1>Developers</h1>
                    <div className="team-row-card">
                        <TeamCard data={teamData[3]}/>
                        <TeamCard data={teamData[4]}/>
                        <TeamCard data={teamData[5]}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Teams;