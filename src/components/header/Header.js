import './header.css';
import ResumeFile from '../../Resume.pdf';
import ProfilePicture from '../../components/profile-picture/ProfilePicture';
import Intro from '../../components/intro/Intro';
function Header(props) {

    const isShow = props.showIntro;
    return (
        <header className='header'>
            <div className='toggle'><i className='fal fa-bars'></i></div>
            <ProfilePicture />
            {isShow ? <Intro /> : null}
            <div className='action'>
                <a href="mailto:suraj.gd89@gmail.com"><i className='fal fa-envelope'></i></a>
                <a href="tel:919594415153"><i className='fal fa-phone-alt'></i></a>
                <a href={ResumeFile} download={true}><i className='fal fa-arrow-to-bottom'></i></a>
            </div>
        </header >
    );
}
export default Header;