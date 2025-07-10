import React from "react";
import Nextimage from "public/OIP.webp";
import Image from "next/image";

function HeroPage() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={Nextimage}
          fill
          alt="Next image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center pt-32">
        <h1 className="font-bold text-4xl text-white">Next Js is React Framework</h1>
      </div>
    </div>
  );
}

export default HeroPage;
