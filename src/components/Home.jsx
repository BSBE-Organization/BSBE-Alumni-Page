import '../styles/home.css'
function Home(){
    return(
        <>
            <div className="home">
                <img src="bg.jpg" alt="" />
                <div className="overlay">
                    <div className="description">
                        <h2>BSBE</h2>
                        <h1>Alumni Page</h1>
                    </div>
                    <div className="count">
                        <div className="count-card">
                            <h1>4000 +</h1>
                            <h3>Continuing Student</h3>
                        </div>
                        <div className="count-card" id="mid-card">
                            <h1>5000 +</h1>
                            <h3>Graduated Student</h3>
                        </div>
                        <div className="count-card">
                            <h1>1000 +</h1>
                            <h3>Opted for Abroad Studies</h3>
                        </div>
                    </div>
                    <div className="event">
                        <h1>Upcoming Event</h1>
                        <img src="event.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
