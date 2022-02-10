import './footer.css';
function Footer() {

    let year = new Date().getFullYear();

    return (
        <footer className='footer' >
            &copy; {year}, Designed &amp; Developed by <strong>Suraj Patil</strong>. All rights reserved.
        </footer>
    );
}
export default Footer;