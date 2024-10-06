import Stats from "../LandingPage/stats";
import Events from "../LandingPage/Events";

const LandingPage = () => {
  return (
    <>
      <div
        className="landing-container"
        style={{
          position: "relative",
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          margin: "0",
        }}
      >
        {/* Background Image */}
        <img
          src="/home/bg.jpg"
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
        <div className="content" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "#0f6f41" }}>BSBE</h1>
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
