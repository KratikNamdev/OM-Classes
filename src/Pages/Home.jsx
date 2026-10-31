import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import AboutSection from '../Components/Home/AboutSection'
import CoursesSection from '../Components/Home/CoursesSection'
import WhyChooseSection from '../Components/Home/WhyChooseSection'
import ResultsSection from '../Components/Home/ResultsSection'
import ToppersBanner from '../Components/Home/ToppersBanner'
import StudentLifeSection from '../Components/Home/StudentLifeSection'
import AdmissionCTA from '../Components/Home/AdmissionCTA'
import FAQSection from '../Components/Home/FAQSection'
import TeachersSection from '../Components/Home/TeachersSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <CoursesSection/>
      <WhyChooseSection/>
      <TeachersSection/>
      <ResultsSection/>
      <ToppersBanner/>
      <StudentLifeSection/>
      <AdmissionCTA/>
      <FAQSection/>
    </div>
  )
}

export default Home
