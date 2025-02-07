import Image from 'next/image'
import { recklessNeue } from './fonts/fonts'
import { FiChevronDown } from 'react-icons/fi'
import { FaApple } from 'react-icons/fa'

export default function Home() {
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
        <p>Every single person has unique nutritional needs determined by their body, health conditions, activity level, fitness goals, and more - but nutrition labels are generalized. They're also confusing - the average person can't even read them.</p>
        <p>This confusion is the reason why so many people are unable to solve their health problems, including acne, weight gain, chronic fatigue, poor sleep… the list goes on and on.</p>
        <p>CleanEats is the first truly personalized nutrition app. Our mission is to help millions of people make more informed choices about their diet by bringing clarity to today's convoluted food system.</p>
        
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