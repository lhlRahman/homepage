import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="h-[250px] w-[1260px] mx-auto font-caudex text-white py-6">
        <hr className="border-t border-white py-4" />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <Image src={"/svg/instagram.svg"} height={24} width={24} />
            <Image src={"/svg/linkedin.svg"} height={24} width={24} />
            <Image src={"/svg/tiktoc.svg"} height={24} width={24} />
          </div>
          <div className="flex space-x-8">
            <Link className="hover:text-white" href="#">
              ABOUT US
            </Link>
            <Link className="hover:text-white" href="#">
              CLIENT GALLERY
            </Link>
            <Link className="hover:text-white" href="#">
              SERVICES
            </Link>
            <Link className="hover:text-white" href="#">
              CONTACT
            </Link>
            <Link className="hover:text-white" href="#">
              FAQS
            </Link>
          </div>
        </div>
        <div className="text-sm py-4">ALL CONTENT COPYRIGHT © 2024 OMILIA VISUALS</div>
      </div>
    </footer>
  )
}
