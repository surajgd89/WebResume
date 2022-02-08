import './footer.css';
function Footer() {

    let year = new Date().getFullYear();

    return (
        <footer className='footer' >
            &copy; {year}, Designed &amp; Developed by Suraj Patil. All rights reserved.
        </footer>
    );
}
export default Footer;