import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="relative font-caudex w-screen h-[100vh]">
      <Image src="/images/background.png" layout="fill" objectFit="cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center space-y-4 bg-black bg-opacity-50 px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-4xl font-bold text-white mx-auto text-center sm:text-right sm:mr-24" style={{
          fontWeight: '400',
          fontSize: '60px',
          lineHeight: "77.34px",
        }}>Photography and
        <br />
        Videography Services</h1>
        <p className="text-white text-center sm:text-right sm:mx-auto sm:mr-24"
        style={{
          fontFamily: 'Helvetica Neue',
          weight: '400',
          size: '25px',
          lineHeight: '30px',
        }}>
          We capture everything from graduation photos, music video occasions,
          <br />
          and intimate moments through lenses.
        </p>
        <Link href="#" className="bg-white text-[#593419] px-6 py-4 rounded-3xl opacity-75 mx-auto sm:text-right sm:mr-24"
        style={{
          boxShadow: 'rgba(69, 42, 124, 0.15)'
        }}>
          <h3 className="opacity-100">BROWSE OUR SERVICES</h3>
        </Link>
      </div>
    </header>  
  )
}