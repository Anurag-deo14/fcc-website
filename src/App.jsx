// src/App.jsx
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './index.css';
import ScrollToTop from "react-scroll-to-top";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Sponsors, Works, StarsCanvas, Footer, EventRegistrationForm } from "./components";

const App = () => {
  const location = useLocation();
  const isRegisterPage = location.pathname.startsWith('/register');

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        {!isRegisterPage && <Navbar />}
        {!isRegisterPage && <Hero />}
      </div>
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Sponsors/>
            <Experience />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
            <Footer/>
          </>
        } />
        <Route path="/register/:eventName" element={<EventRegistrationForm />} />
      </Routes>
      <ScrollToTop className="rounded-3xl bg-[#915EFF]" smooth width="39" />
    </div>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
