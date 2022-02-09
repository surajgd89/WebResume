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

  const [isTabDevice, setisTabDevice] = useState(false);
  const [isMobileDevice, setisMobileDevice] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    (width <= 1200) ? setisTabDevice(true) : setisTabDevice(false);
    (width <= 768) ? setisMobileDevice(true) : setisMobileDevice(false);

  }, [width]);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
      (width <= 1200) ? setisTabDevice(true) : setisTabDevice(false);
      (width <= 768) ? setisMobileDevice(true) : setisMobileDevice(false);
    };
    window.addEventListener("resize", updateWidth);
  });

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='sidebar'>
          {isTabDevice ? <Navigation /> : null}
          {isTabDevice ? null : <ProfilePicture />}
          {isTabDevice ? null : <AboutMe />}
          {isTabDevice ? null : <PersonalInfo />}
          {isTabDevice ? null : <Awards />}
          {isTabDevice ? null : <FollowMe />}
          {isTabDevice ? null : <References />}
        </div>
        <div className='wrapper'>
          {isTabDevice ? <Header showIntro={isMobileDevice} /> : null}
          <div className='content'>
            {isMobileDevice ? null : <Intro />}
            <CareerOverview />
            {isTabDevice ? <AboutMe /> : null}
            <Experience />
            {isTabDevice ? null : <Education />}
            <Skills />
            <KeyResponsiblities />
            <Projects />
            {isTabDevice ? <Awards /> : null}
            {isTabDevice ? <Education period={isMobileDevice} /> : null}
            {isTabDevice ? <PersonalInfo /> : null}
            {isTabDevice ? <References /> : null}
            {isTabDevice ? <FollowMe /> : null}
            <Declare />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
