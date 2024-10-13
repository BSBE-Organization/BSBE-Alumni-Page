import '../styles/footer.css'
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="box1">
                <div className="footer-description">
                    <img src="footer/iitgLogo.png" alt="IITG Logo" />
                    <div className="footer-description-text">
                        <p>Department of Biosciences and Bioengineering</p>
                        <p>Indian Institute of Technology Guwahati</p>
                        <p>Guwahati 781039</p>
                    </div>
                </div>
                <h3>Designed and Developed by BSBE students</h3>
            </div>
            <div className="box2">
                <div className="box2-link"><a href="https://www.iitg.ac.in/" target="blank">IITG Website</a></div>
                <div className="box2-link"><a href="https://www.iitg.ac.in/biotech/" target="blank">BSBE Website</a></div>
                <div className="social">
                    <a href="https://www.instagram.com/bsbe_iitguwahati/" target="blank"><img src="footer/instagram.png"/></a>
                    <a href="https://www.linkedin.com/in/dept-of-biosciences-and-bioengineering-iit-guwahati-11980a325/" target="blank"><img src="footer/linkedin.png"/></a>
                    <a href="https://x.com/BSBE_IITG" target="blank"><img src="footer/twitter.png"/></a>
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
