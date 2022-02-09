import './App.css';
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
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='sidebar'>
          <ProfilePicture />
          <AboutMe />
          <PersonalInfo />
          <Awards />
          <FollowMe />
          <References />
          <Navigation />
        </div>
        <div className='wrapper'>
          <Header />
          <div className='content'>
            <Intro />
            <CareerOverview />
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
            <Declare />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
