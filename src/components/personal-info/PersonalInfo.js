import './personal-info.css';
function PersonalInfo() {
    return (
        <section className='personal-info'>
            <h2 className='heading'>Personal Info</h2>
            <div className='data-list'>
                <div className='data-item'>
                    <h5>Full Name</h5>
                    <div>Suraj Ananda Patil</div>
                </div>
                <div className='data-item'>
                    <h5>Email</h5>
                    <div><a href="mailto:suraj.gd89@gmail.com" target="_blank">suraj.gd89@gmail.com</a></div>
                </div>
                <div className='data-item'>
                    <h5>Mobile</h5>
                    <div><a href="tel:+919594415153" target="_blank">+91 9594415153</a></div>
                </div>
                <div className='data-item'>
                    <h5>DOB</h5>
                    <div>6<sup>th</sup> Dec, 1989</div>
                </div>
                <div className='data-item'>
                    <h5>Gender</h5>
                    <div>Male</div>
                </div>
                <div className='data-item'>
                    <h5>Marital Status</h5>
                    <div>Married</div>
                </div>
                <div className='data-item'>
                    <h5>Languages</h5>
                    <div>Marathi, Hindi, English</div>
                </div>
                <div className='data-item'>
                    <h5>Hobbies</h5>
                    <div>Cooking, Listen Music</div>
                </div>
                <div className='data-item full-item'>
                    <h5>Address</h5>
                    <div>Meghmalhar, Building No. L10, Flat No.
                        302, 3rd Floor, Plot No. 2, Sector 10,
                        Ghansoli, Navi Mumbai - 400701</div>
                </div>
            </div>
        </section>
    );
}
export default PersonalInfo;