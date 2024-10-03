import '../styles/footer.css'
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="box1">
                <div className="footer-description">
                    <img src="footer/iitgLogo.png" alt="IITG Logo" />
                    <p>Department of Biosciences and Bioengineering Indian Institute of Technology, Guwahati</p>
                </div>
                <h3>Designed and Developed by BSBE students</h3>
            </div>
            <div className="box2">
                <a href="/auth">IITG Website</a>
                <a href="">BSBE Website</a>
                <div className="social">
                    <img src="footer/instagram.png"/>
                    <img src="footer/linkedin.png"/>
                    <img src="footer/twitter.png"/>
                </div>
                <div className="contact">
                    <img src="footer/phone.png" alt="" />
                    <a href="tel:+911234567890">+91 1234 567 890</a>
                </div>
                <div className="contact">
                    <img src="footer/mail.png" alt="" />
                    <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;