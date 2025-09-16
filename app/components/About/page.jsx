"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./about.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function About() {
  return (
    <>
      {/* --- Mobile View --- */}
      <div className="Mobile">
        <div className={`carouselContainer ${inter.className}`}>
          <div className="backgroundWrapper">
            <Image
              src="/gulshan.jpeg" // place inside /public
              alt="Karachi skyline"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="overlayGradient"></div>
          </div>

          <div className="headerText">
            <h1 className="MobileH1">NOUSHAD KHAN</h1>
            <p className="Mobilep">Since 1998, delivered trusted real estate expertise in Karachi.</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="customSwiper"
          >
            {/* ... (Your SwiperSlides for Mobile) ... */}
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/gulshan.jpeg"
                  alt="Gulshan Iqbal"
                  fill
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                  priority
                />
                <div className="slideOverlay">
                  <h2>Gulshan-e-Iqbal</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/defence.jpeg"
                  alt="Defence"
                  fill
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
                <div className="slideOverlay">
                  <h2>Defence</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/jauhar.jpeg"
                  alt="jauhar"
                  fill
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
                <div className="slideOverlay">
                  <h2>Gulistan-e-jauhar</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/korangi.jpeg"
                  alt="korangi"
                  fill
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
                <div className="slideOverlay">
                  <h2>Korangi</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/north.jpeg"
                  alt="north"
                  fill
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
                <div className="slideOverlay">
                  <h2>North Nazimabad</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/scheme33.jpeg"
                  alt="scheme33"
                  fill
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
                <div className="slideOverlay">
                  <h2>Scheme33</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="infoSection">
            <h3>Over 25 Years of Real Estate Excellence</h3>
            <ul>
              <li>Trusted Expertise</li>
              <li>Local Mastery</li>
              <li>Client-First Approach</li>
            </ul>
            <h4>Ready to Find Your Perfect Property?</h4>
            <p>Contact today for a personalized consultation.</p>
            <a
              href="https://wa.me/923013351923"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contactBtn">CONTACT</button>
            </a>
          </div>
        </div>
      </div>

      {/* --- Desktop View --- */}
      <div className="Desktop">
        <div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="customSwiper"
          >
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/5.jpg"
                  alt="Gulshan Iqbal"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className={`overlayGradient ${inter.className}`}></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/2.jpg"
                  alt="Defence"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={`overlayGradient ${inter.className}`}></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/3.jpg"
                  alt="jauhar"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={`overlayGradient ${inter.className}`}></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/north.jpeg"
                  alt="north"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={`overlayGradient ${inter.className}`}></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideContent">
                <Image
                  src="/scheme33.jpeg"
                  alt="scheme33"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={`overlayGradient ${inter.className}`}></div>
              </div>
            </SwiperSlide>
            <div className={`globalOverlay ${inter.className}`}>
              <h1>NOUSHAD <br /> KHAN</h1>
              <p>Delivering trusted real estate <br /> expertise since 1998 </p>
            </div>
          </Swiper>
        </div>

        {/* The main container for the bottom section */}
        <div className={`infoSection1 ${inter.className}`}>
          {/* Info Section content */}
          <div className="infosection_cover">     <h3>Over 25 Years of Real Estate <br />Excellence</h3>
          <ul>
            <li>Trusted Expertise</li>
            <li>Local Mastery</li>
            <li>Client-First Approach</li>
          </ul>
          <h4>Ready to Find Your Perfect Property?</h4>
          <p>Contact today for a personalized consultation.</p></div>
     
          {/* Removed the standalone contact button here */}

          {/* The Clients Card is now nested within infoSection1 */}
          <div className="clientsCard">
            <h6>What Clients Say</h6>
            <p>
              “Noushad helped us find our dream home in DHA. His honesty and deep market knowledge made all the difference.” — Ayesha R., Karachi
            </p>
            <p>
              “I’ve worked with many agents, but Noushad’s professionalism stands out. Highly recommended!” — Imran M., Investor
            </p>
            {/* The new button for the card */}
            <div className="cardButtonWrapper">
              <a
                href="https://wa.me/923013351923"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cardContactBtn">CONTACT</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}