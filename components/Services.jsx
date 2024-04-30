import Image from "next/image";

const Services = () => {
  // Define the style object for h1
  const h1Style = {
    fontFamily: "Caudex, serif",
    fontSize: "45px",
    fontWeight: "700",
    lineHeight: "58px",
    color: "#FFFFFF",
    position: "absolute",
    bottom: "70px",
    left: "7%",
  };

  // Define the style object for p
  const pStyle = {
    fontFamily: "Helvetica Neue, sans-serif",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "23.86px",
    color: "#FFFFFF",
    position: "absolute",
    bottom: "20px",
    textAlign: "left"
  };

  // Navigation div style
  const navStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "96px",
    height: "96px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    fontSize: "16px",
    cursor: "pointer",
    opacity: "0.75"
  };

  const navSymbolStyle = {
    fontSize: "4rem",
    backgroundColor: "transparent"

  };


  return (
    <div className='w-screen bg-tra h-[955px] flex items-center justify-center relative'>
      <div style={{ ...navStyle, left: "30px" }} className=" text-2xl">
      <span style={navSymbolStyle}>&lt;</span>
      </div>

      <div className="flex flex-row space-x-20">
        <div className="relative flex flex-col items-center" style={{ width: "358px", height: "593px" }}>
          <Image src="/images/couples.png" layout="fill" objectFit="cover" alt="Couples" />
          <div style={{ position: "absolute", bottom: "0", width: "100%", textAlign: "center" }}>
            <h1 style={h1Style}>Couples</h1>
            <p style={pStyle} className="ml-6">Weddings, pre-wedding, engagement, anniversaries</p>
          </div>
        </div>
        
        <div className="relative flex flex-col items-center" style={{ width: "429px", height: "710px" }}>
          <Image src="/images/portait.png" layout="fill" objectFit="cover" alt="Portraits" />
          <div style={{ position: "absolute", bottom: "0", width: "100%", textAlign: "center" }}>
            <h1 style={h1Style}>Portraits</h1>
            <p style={pStyle} className=" ml-8">Lifestyle branding, headshots, birthdays, graduation, events</p>
          </div>
        </div>
        
        <div className="relative flex flex-col items-center" style={{ width: "358px", height: "593px" }}>
          <Image src="/images/corporate.png" layout="fill" objectFit="cover" alt="Corporate" />
          <div style={{ position: "absolute", bottom: "0", width: "100%", textAlign: "center" }}>
            <h1 style={h1Style}>Corporate</h1>
            <p style={pStyle} className="ml-7 mb-6">Events, headshots</p>
          </div>
        </div>
      </div>

      <div style={{ ...navStyle, right: "30px" }}>
      <span style={navSymbolStyle}>&gt;</span>
      </div>
    </div>
  );
}

export default Services;
