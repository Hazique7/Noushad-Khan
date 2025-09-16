// components/Banner/page.jsx (renamed from home page)
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./style.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function HomePage() {
  return (
    <div className={`container ${inter.className}`}>
      {/* MOBILE-ONLY elements */}
      <div className="textOverlay mobile-only">
        <h1 className="mainHeading">FIND YOUR DREAM HOME</h1>
        <h6 className="subHeading">Turning Dreams into Addresses</h6>
      </div>
      <div className="imageWrapper mobile-only">
        <Image
          src="/buildings.png"
          alt="Modern tall buildings against a warm sky"
          fill
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
          priority
        />
      </div>

      {/* DESKTOP-ONLY elements */}
      <div className="textOverlay desktop-only">
        <h1 className="mainHeading">FIND YOUR DREAM HOME</h1>
        <h6 className="subHeading">Turning Dreams into Addresses</h6>
      </div>
      <div className="imageWrapper desktop-only">
        {/* You'll need to add a new image file for the single building */}
        <Image
          src="/buildings.png"
          alt="A single modern tall building"
          fill
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
          priority
        />
      </div>

      <Link href="/components/About">
        <button className={`MYBUTTON ${inter.className}`}>CONTINUE</button>
      </Link>
    </div>
  );
}