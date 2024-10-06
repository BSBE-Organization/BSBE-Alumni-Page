import '../styles/footer.css'
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="box1">
                <div className="footer-description">
                    <img src="footer/iitgLogo.png" alt="IITG Logo" />
                    <p>Department of Biosciences and Bioengineering Indian Institute of Technology, Guwahati 781039</p>
                </div>
                <h3>Designed and Developed by BSBE students</h3>
            </div>
            <div className="box2">
                <a href="https://www.iitg.ac.in/">IITG Website</a>
                <a href="https://www.iitg.ac.in/biotech/">BSBE Website</a>
                <div className="social">
                    <a href="https://www.instagram.com/bsbe_iitguwahati/"><img src="footer/instagram.png"/></a>
                    <a href="https://www.linkedin.com/in/dept-of-biosciences-and-bioengineering-iit-guwahati-11980a325/"><img src="footer/linkedin.png"/></a>
                    <a href="https://x.com/BSBE_IITG"><img src="footer/twitter.png"/></a>
                </div>
                <div className="contact">
                    <img src="footer/phone.png" alt="" />
                    <a href="tel:0361-2582250">0361-2582250</a>
                </div>
                <div className="contact">
                    <img src="footer/mail.png" alt="" />
                    <a href="mailto:biooff@iitg.ac.in">biooff@iitg.ac.in</a>
                </div>
                <div className="contact">
                    <img src="footer/mail.png" alt="" />
                    <a href="mailto:bsbe_alum@iitg.ac.in">bsbe_alum@iitg.ac.in</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;