export const Navigation = () => {
    return (
      <div className={`h-[290px] bg-[#D9D9D9] font-caudex text-[#373633] text-2xl`}>
          <ul className="w-screen px-60 h-full flex justify-between items-center">
              <li className="flex flex-row items-center md:flex-col">
                  <span>01</span>
                  <span>ABOUT US</span>
              </li>
              <li className="flex flex-col items-center">
                  <span>02</span>
                  <span>CLIENT GALLERY</span>
              </li>
              <li className="flex flex-col items-center">
                  <span>03</span>
                 <h2>SERVICES</h2>
              </li>
          </ul>
      </div>
    )
  }