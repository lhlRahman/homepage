import StarIcon from "./ui/Star";
import Image from "next/image";

const Reviews = () => {
  const pStyles = {
    fontFamily: 'Helvetica Neue',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '23.86px',
    color: '#FFFFFF'
  };

  const h3Styles = {
    fontFamily: 'Helvetica Neue',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24.42px',
    color: '#FFFFFF'
  };

  const navStyle = {
    top: "50%",
    right: "100px",
    transform: "translateY(-50%)",
    width: "61px",
    height: "61px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "100%",
    fontSize: "16px",
    cursor: "pointer"
  };

  const navSymbolStyle = {
    fontSize: "4rem",
    backgroundColor: "transparent"

  };

  return (
    <div className="h-[550px] w-screen px-40">
      <div className="flex items-center justify-between p-8">
        <div className="flex space-x-8">
          <div>
            <div className="flex flex-row">
                <Image src={"/images/reviews/left1.png"} width={150} height={150}/>
                <Image src={"/images/reviews/left2.png"} width={150} height={150}/>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />

            </div>
            <h3 className="mt-2 text-lg font-semibold" style={h3Styles}>Amazing pictures!</h3>
            <p style={pStyles}>
              Omilia Visuals and the team did an exceptional job covering our wedding ceremony and reception. The
              enthusiasm and execution was *chefs kiss* and I absolutely love...
              <a className="text-white ml-1 underline" href="#">
                read more
              </a>
            </p>
            <p className="mt-2 text-sm italic" style={{ color: '#FFFFFF' }}>– [client name]</p>
          </div>
          <div>
          <div className="flex flex-row">
                <Image src={"/images/reviews/right1.png"} width={150} height={150}/>
                <Image src={"/images/reviews/right2.png"} width={150} height={150}/>
                <Image src={"/images/reviews/right3.png"} width={150} height={150}/>

            </div>
            <div className="flex items-center mt-2">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className=" justify-center items-center">
            <div className="w-16 h-16 opacity-75 bg-white right-32 rounded-full absolute flex items-center justify-center">
                <h4 className="">&gt;</h4>
            </div>
            </div>
            <h3 className="mt-2 text-lg font-semibold" style={h3Styles}>Lovely team and fantastic results!</h3>
            <p style={pStyles}>
              I was blown away by the professionalism and creativity of Omilia Visuals. From the initial consultation to
              the final product, they exceeded all my expectations...{` `}
              <a className="text-white ml-1 underline" href="#">
                read more
              </a>
            </p>
            <p className="mt-2 text-sm italic" style={{ color: '#FFFFFF' }}>– [client name]</p>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Reviews;
