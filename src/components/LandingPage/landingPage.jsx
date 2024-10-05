import "./styles/landingPage.css";
import Stats from "../LandingPage/stats";
import Events from "../LandingPage/Events";
const LandingPage = () => {
  return (
    <>
      <div className="landing-container">
        <div className="content">
          <h1 style={{ color: "#0f6f41" }}>BSBE</h1> {/* Changed here */}
          <h1 className="text-6xl md:text-6xl lg:text-8xl text-[#000000]">
            Alumni Page
          </h1>
        </div>
      </div>
      <Stats />
      <Events />
    </>
  );
};
export default LandingPage;
