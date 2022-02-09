import './education.css';
function Education(props) {


    return (
        <section className='education'>
            <h2 className='heading'>Education</h2>
            <div className='list'>
                <div className='item'>
                    <div className='col-one'>
                        <h3>Degree</h3>
                        <div>2019</div>
                    </div>
                    <div className='col-two'>
                        <h3>Bachlor of Arts</h3>
                        <div> Yashwantrao Chavan Maharashtra Open University</div>
                    </div>
                </div>

                <div className='item'>
                    <div className='col-one'>
                        <h3>Diploma</h3>
                        <div>2012</div>
                    </div>
                    <div className='col-two'>
                        <h3>Web &amp; Graphic Designing</h3>
                        <div>NIDT Multimedia Animation Institute, Chembur</div>
                    </div>
                </div>

                <div className='item'>
                    <div className='col-one'>
                        <h3>College</h3>
                        <div>2007</div>
                    </div>
                    <div className='col-two'>
                        <h3>H.S.C</h3>
                        <div>K. C. College, Talmavale</div>
                    </div>
                </div>

                <div className='item'>
                    <div className='col-one'>
                        <h3>School</h3>
                        <div>2005</div>
                    </div>
                    <div className='col-two'>
                        <h3>S.S.C</h3>
                        <div>S. V. M. High School, Talmavale</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Education;