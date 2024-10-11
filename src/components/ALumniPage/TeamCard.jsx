import './teamcard.css'
function TeamCard(){
    return(
        <>
            <div className="team-card">
                <img src="images/user.png" alt="" />
                <h1>Sumit Kumar</h1>
                <h2>Developer</h2>
                <h3>B.Tech 2025</h3>
                <div className="team-social">
                    <a href="tel:1234567890" target=''><img src="images/phone.png"/></a>
                    <a href="mailto:skrsumit250@gmail.com" target='blank'><img src="images/mail.png"/></a>
                    <a href="https://www.linkedin.com/in/sumit-kumar-iitg/" target='blank'><img src="images/linkedin.png"/></a>
                </div>
            </div>
        </>
    )
}
export default TeamCard;