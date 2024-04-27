import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    (<div className="flex flex-col">
      <nav className="flex justify-between items-center py-4 px-8 bg-white">
        <span className="font-bold text-xl">OMILIA VISUALS</span>
        <div className="space-x-4">
          <Link className="hover:underline" href="#">
            ABOUT US
          </Link>
          <Link className="hover:underline" href="#">
            CLIENT GALLERY
          </Link>
          <Link className="hover:underline" href="#">
            SERVICES
          </Link>
          <Link className="hover:underline" href="#">
            CONTACT
          </Link>
        </div>
      </nav>
      <header className="relative">
        <img
          alt="Header image"
          className="w-full h-auto"
          height="600"
          src="/placeholder.svg"
          style={{
            aspectRatio: "368/600",
            objectFit: "cover",
          }}
          width="368" />
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center space-y-4 bg-black bg-opacity-50 px-4">
          <h1 className="text-4xl font-bold text-white">Photography and Videography Services</h1>
          <p className="text-white">
            We capture everything from graduation photos, music video occasions, and intimate moments through lenses.
          </p>
          <Button className="bg-white text-black">DISCOVER OUR SERVICES</Button>
        </div>
      </header>
      <section className="flex justify-center space-x-8 my-8">
        <div className="bg-gray-200 w-64 h-24" />
        <div className="bg-gray-200 w-64 h-24" />
        <div className="bg-gray-200 w-64 h-24" />
      </section>
      <section className="px-8 py-4">
        <h2 className="text-2xl font-bold">We specialize in Digital Visual Media</h2>
        <p className="text-gray-600 mt-2">
          For over 10 years, we've created magic through lenses as hobbyists and decided to turn our lens facing world
          into a professional, helping you capture mesmerizing moments. We're here for weddings, birthdays, and intimate
          events.
        </p>
        <p className="text-gray-600 mt-2">We get to know you to show you off, giving life to your imagination.</p>
        <Button className="mt-4">ABOUT US</Button>
      </section>
      <section className="bg-black py-8">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold">Best Shots</h2>
          <p className="text-gray-400">Your best shots including</p>
          <Link className="text-red-600 underline" href="#">
            BROWSE GALLERY
          </Link>
        </div>
        <div className="flex overflow-x-scroll no-scrollbar mt-4 px-8">
          <div className="min-w-[200px] mr-4">
            <img
              alt="Couples"
              className="w-full h-auto"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/300",
                objectFit: "cover",
              }}
              width="200" />
            <div className="bg-red-600 text-white p-4">
              <h3 className="font-bold">Couples</h3>
              <p>Beautiful moments together</p>
            </div>
          </div>
          <div className="min-w-[200px] mr-4">
            <img
              alt="Portraits"
              className="w-full h-auto"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/300",
                objectFit: "cover",
              }}
              width="200" />
            <div className="bg-red-600 text-white p-4">
              <h3 className="font-bold">Portraits</h3>
              <p>Individual beauty shots</p>
            </div>
          </div>
          <div className="min-w-[200px] mr-4">
            <img
              alt="Corporate"
              className="w-full h-auto"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/300",
                objectFit: "cover",
              }}
              width="200" />
            <div className="bg-red-600 text-white p-4">
              <h3 className="font-bold">Corporate</h3>
              <p>Professional corporate shots</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center space-x-8 my-8">
        <div className="bg-gray-200 w-64 h-24" />
        <div className="bg-gray-200 w-64 h-24" />
      </section>
      <footer className="bg-gray-900 text-white py-4 px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <InstagramIcon className="text-white" />
            <TwitterIcon className="text-white" />
            <YoutubeIcon className="text-white" />
          </div>
          <div className="space-x-4">
            <Link className="hover:underline" href="#">
              ABOUT US
            </Link>
            <Link className="hover:underline" href="#">
              CLIENT GALLERY
            </Link>
            <Link className="hover:underline" href="#">
              SERVICES
            </Link>
            <Link className="hover:underline" href="#">
              CONTACT
            </Link>
            <Link className="hover:underline" href="#">
              FAQ
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-4">ALL CONTENT COPYRIGHT © 2023, OMILIA VISUAL</p>
      </footer>
    </div>)
  );
}


function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}


function TwitterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}


function YoutubeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>)
  );
}
