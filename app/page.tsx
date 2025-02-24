'use client';
import { useRef, useState } from 'react';
import Image from 'next/image'
import { recklessNeue, recklessNeueLight, ppMori, ppMoriSemiBold } from './fonts/fonts'
import { FiChevronDown } from 'react-icons/fi'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <Image 
            src="/assets/logo3.png"
            alt="Logo"
            width={200}
            height={1000}
            style={{
              width: '300px',
              height: 'auto',
              maxWidth: '50%',
            }}
          />
          <div className={ppMori.className} style={{ 
            marginTop: '2rem', 
            color: 'white', 
            fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
            textAlign: 'center',
            padding: '0 1rem'
          }}>
            see how food affects <span className={ppMoriSemiBold.className}>your</span> body
          </div>
          <Image 
            src="/assets/hero.png"
            alt="Hero illustration"
            width={400}
            height={400}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              marginTop: '2rem',
              padding: '0 1rem',
            }}
          />
        </div>
        <div className="scroll-indicator">
          <FiChevronDown className="bounce" />
        </div>
      </section>

      <section className="content-section">
        <p>Every 3 seconds, someone dies of a chronic health issue.</p>
        
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
          Everyone has unique nutritional needs, but nutrition labels are generalized and confusing.</p>
        <img 
          ref={imgRef}
          src={"/assets/label4.gif"}
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

        <p className={recklessNeueLight.className}>25,000+ downloads and growing</p>       
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
