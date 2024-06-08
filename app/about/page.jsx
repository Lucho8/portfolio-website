import React from 'react'
import AboutSection from '../src/components/AboutSection'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
      </div>
      <Footer/>
    </main>
  )
}

export default page