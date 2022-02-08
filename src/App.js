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

  console.log();
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='sidebar'>
          <ProfilePicture isShow={true} />
          <AboutMe isShow={true} />
          <PersonalInfo isShow={true} />
          <Awards isShow={true} />
          <FollowMe isShow={true} />
          <References isShow={true} />
          <Navigation isShow={false} />
        </div>
        <div className='wrapper'>
          <Header isShow={false} />
          <div className='content'>
            <Intro isShow={true} />
            <CareerOverview isShow={true} />
            <AboutMe isShow={false} />
            <Experience isShow={true} />
            <Skills isShow={true} />
            <KeyResponsiblities />
            <Projects isShow={true} />
            <Awards isShow={true} />
            <Education isShow={true} />
            <PersonalInfo isShow={false} />
            <References isShow={false} />
            <FollowMe isShow={false} />
            <Declare isShow={true} />
          </div>
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default App;
