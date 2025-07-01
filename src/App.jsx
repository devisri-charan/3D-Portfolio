import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Education, Testimonials, Hero, Navbar, Skills, Projects, StarsCanvas, ResumeModal } from "./components";
import { useState } from "react";

const App = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleResumeClick = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar onResumeClick={handleResumeClick} />
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <About />
              <Experience />
              <Education />
              <Skills />
              <Projects />
              <Testimonials />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </>
          } />
        </Routes>
        {/* Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={handleCloseResumeModal}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
