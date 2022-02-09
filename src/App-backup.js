import './App.css';
import React, { useState, useEffect } from 'react';
import ProfilePicture from './components/profile-picture/ProfilePicture';
import AboutMe from './components/about-me/AboutMe';
import PersonalInfo from './components/personal-info/PersonalInfo';
import Awards from './components/awards/Awards';
import FollowMe from './components/follow-me/FollowMe';
import References from './components/references/References';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import CareerOverview from './components/career-overview/CareerOverview';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import KeyResponsiblities from './components/key-responsiblities/KeyResponsiblities';
import Projects from './components/projects/Projects';
import Declare from './components/declare/Declare';
import Footer from './components/footer/Footer';

function App() {

  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
      (width < 768) ? setIsMobile(true) : setIsMobile(false)
    };
    window.addEventListener("resize", updateWidth);
  });

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='sidebar'>
          {
            isMobile ?
              <Navigation />
              :
              <>
                <ProfilePicture />
                <AboutMe />
                <PersonalInfo />
                <Awards />
                <FollowMe />
                <References />
              </>
          }
        </div>
        <div className='wrapper'>
          {isMobile ? <Header /> : null}
          <div className='content'>
            <Intro />
            <CareerOverview />
            {isMobile ? <AboutMe /> : null}
            <Experience />
            {isMobile ? null : <Education />}
            <Skills />
            <KeyResponsiblities />
            <Projects />
            {isMobile ? <Awards /> : null}
            {isMobile ? <Education /> : null}
            {isMobile ? <PersonalInfo /> : null}
            {isMobile ? <References /> : null}
            {isMobile ? <FollowMe /> : null}
            <Declare />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
