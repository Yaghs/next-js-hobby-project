import {JSX} from "react"
import Image from "next/image"

export default function Home():JSX.Element {
  return (
    <div className="bg-black">
      <nav className="bg-bl">
        <Image
          src="/image.png"
          alt="logo-image"
          width={200}
          height = {50}
        />
        <a href="#">Models</a>
        <a href="#">About</a>
      </nav>
    </div>
  );
}
