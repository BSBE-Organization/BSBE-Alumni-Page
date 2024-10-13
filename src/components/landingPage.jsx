import Stats from "./stats";
import Events from "./Events";
import '../styles/landingPage.css'
const LandingPage = () => {
  return (
    <>
      <div className="home">
        <img src="home/bg.jpg" alt="" />
        <div className="heading">
          <h2>BSBE</h2>
          <h1>Alumni Page</h1>
        </div>
      </div>
      <Stats />
      <Events />
    </>
  );
};

export default LandingPage;
