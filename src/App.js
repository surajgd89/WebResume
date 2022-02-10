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
    const [width, setWidth] = useState(window.innerWidth);

    const [breakpointXL, setBreakpointXL] = useState(false);
    const [breakpointLG, setBreakpointLG] = useState(false);
    const [breakpointMD, setBreakpointMD] = useState(false);
    const [breakpointSM, setBreakpointSM] = useState(false);
    const [isActive, setActive] = useState(false);
    const [scroll, setScroll] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 80)
        });
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
    });

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        width < 1200 ? setBreakpointXL(true) : setBreakpointXL(false);
        width < 992 ? setBreakpointLG(true) : setBreakpointLG(false);
        width < 768 ? setBreakpointMD(true) : setBreakpointMD(false);
        width < 576 ? setBreakpointSM(true) : setBreakpointSM(false);
    };

    function Sidebar(props) {
        const IsbreakpointXL = props.breakpoint;
        if (IsbreakpointXL) {
            return <Navigation togglemenu={handleToggle} />;
        } else {
            return (
                <>
                    <ProfilePicture />
                    <AboutMe />
                    <PersonalInfo />
                    <Awards />
                    <FollowMe />
                    <References />
                </>
            );
        }
    }

    function Content(props) {
        const IsbreakpointXL = props.breakpoint;
        if (IsbreakpointXL) {
            return (
                <>
                    <AboutMe />
                    <Experience />
                    <Skills />
                    <KeyResponsiblities />
                    <Projects />
                    <Awards />
                    <Education />
                    <PersonalInfo />
                    <References />
                    <FollowMe />
                </>
            );
        } else {
            return (
                <>
                    <Experience />
                    <Education />
                    <Skills />
                    <KeyResponsiblities />
                    <Projects />
                </>
            );
        }
    }

    function handleToggle() {
        setActive(!isActive);
    }

    return (
        <div className="main-container">
            <div className="container">
                <div className={isActive ? 'sidebar open' : 'sidebar'} >
                    <Sidebar breakpoint={breakpointXL} />
                </div>
                <div className="wrapper">
                    {breakpointXL ? (
                        <Header togglemenu={handleToggle} fixedHeader={scroll}
                            breakpoint={{ XL: breakpointXL, SM: breakpointSM }}
                        />
                    ) : null}

                    <div className="content">
                        {breakpointXL ? null : <Intro />}
                        {breakpointSM ? <Intro /> : null}
                        <CareerOverview />
                        <Content breakpoint={breakpointXL} />

                    </div>
                    <Declare />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
