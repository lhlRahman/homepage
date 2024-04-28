import Image from "next/image";
import React from "react";

const BestShots = () => {
  // Define the RGBA color with 80% opacity
  const textColor = 'rgba(55, 54, 51, 0.8)'; // #373633 with 80% opacity

  return (
    <div className='relative w-screen h-[709px] bg-black' style={{ zIndex: -100 }}>
        <Image
          src="/images/bestshot.png" width={1000000} height={10000000} className="w-screen h-[470px]" />
        <div className="absolute right-0 bottom-[137px] h-[275px] w-[600px] bg-white flex flex-col items-start justify-center p-8" style={{ boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 className="font-caudex font-bold text-[45px] leading-[58px]" style={{ color: textColor, fontWeight: 700 }}>
                Best Shots
            </h1>
            <p className="font-helvetica text-[22px] leading-[26px] max-w-md mt-4" style={{ color: textColor, fontWeight: 400 }}>
                Explore the artistry behind each frame and discover why we're the trusted choice for capturing life's most precious moments.
            </p>
        </div>
        <div className="absolute bg-transparent right-[600px]" style={{
            width: 0,
            height: 0,
            bottom: '137px',
            borderTop: '137.5px solid transparent',
            borderRight: '155px solid white',
            borderBottom: '137.5px solid transparent',
        }}></div>
    </div>
  );
};

export default BestShots;
