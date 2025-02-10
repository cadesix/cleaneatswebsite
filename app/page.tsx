'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { recklessNeue, recklessNeueLight } from './fonts/fonts'
import { FiChevronDown } from 'react-icons/fi'
import { FaApple } from 'react-icons/fa'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <Image 
            src="/assets/logov2.png"
            alt="Logo"
            width={200}
            height={1000}
            style={{
              width: '200px',
              height: 'auto',
            }}
            priority
          />
        </div>
        <div className="scroll-indicator">
          <FiChevronDown className="bounce" />
        </div>
      </section>

      <section className="content-section">
        <p>Every 3 seconds, someone does of a chronic health issue.</p>
        
        <img 
          src="/assets/3seconds.gif"
          alt="3 Seconds Counter"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            margin: '0 auto',
            display: 'block'
          }}
        />

        <p>
          Our food system is slowly killing us. <span className={recklessNeueLight.className}>But why?</span><br></br>
          Everyone has unique nutritional needs, but nutrition labels are generalized, opaque, and confusing.</p>
        <img 
          ref={imgRef}
          src={"/assets/label2.gif"}
          alt="Nutrition Label"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            margin: '0 auto',
            display: 'block'
          }}
        />
        
        <p>We built CleanEats as the solution: the first truly <span className={recklessNeueLight.className}>personalized</span> nutrition app.</p>

        <img 
          ref={imgRef}
          src={"/assets/analysis.png"}
          style={{
            width: '300px',
            height: 'auto',
            margin: '0 auto',
            display: 'block'
          }}
        />

        <p>Our mission is to help millions of people make more informed choices about their diet by bringing clarity to today's convoluted food system.</p>
        
        <div className="button-container">
          <div className="button-wrapper">
            <a href="/join" className="button join-button">Join Our Team</a>
            <a href="https://apps.apple.com/us/app/cleaneats-food-scanner/id6741033862">
              <Image 
                src="/assets/app-store-badge.svg"
                alt="Download on the App Store"
                width={140}
                height={47}
                className="app-store-badge"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}