import './alumcard.css'
function AlumCard(){
    return(
        <>
            <div className="dircard">
                <h1>Sumit Kumar</h1>
                <div className="IITG-eudcation">
                    <h4>PhD.</h4>
                    <h3>Class of 2016</h3>
                </div>
                <div className="title">
                    <h3>Software Development</h3>
                </div>
                <hr></hr>
                <div className="alum-experience">
                    <h3>Current Position</h3>
                    <h2>SDE-II at Flipkart, Bangalore</h2>
                </div>
                <hr></hr>

                <div className="alum-education">
                    <h3>Education</h3>
                    <div className="education-list">
                        <h2>M.Tech at IIT Guwahati</h2>
                        <h3>2018</h3>
                    </div>
                    <div className="education-list">
                        <h2>B.Tech at IIT Guwahati</h2>
                        <h3>2016</h3>
                    </div>
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