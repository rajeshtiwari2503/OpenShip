"use client"
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchivementSection from './components/AchivementSection'
 
import Product from './components/Product'
import OpenShipCal from './components/OpenShipCal'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import WareHouseOnsite from './components/WareHouseOnsite'
import OpenShipFooter from './components/OpenShipFooter'
 

 
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <main className="flex min-h-screen flex-col  ">
      {/* <Navbar /> */}
      <OpenShipCal />
      <WareHouseOnsite />
      <OpenShipFooter />
      {/* <div className='container mt-14 mx-auto px-12 py-4'> */}
      {/* <Product /> */}
     
        {/* <HeroSection />
        <AchivementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </main>
  )
}
