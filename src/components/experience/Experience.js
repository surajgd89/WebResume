import './experience.css';
function Experience() {
    return (
        <section className='experience'>
            <h2 className='heading'>Experience</h2>
            <div className='list'>
                <div className='item'>
                    <div className='col-one'>
                        <h3>2017 - Present</h3>
                        <div> &gt; 4 Years</div>
                    </div>
                    <div className='col-two'>
                        <h3>Infibeam Avenues Ltd.</h3>
                        <div>Sr. UI Developer</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='col-one'>
                        <h3>2013 - 2017</h3>
                        <div>3.5 Years</div>
                    </div>
                    <div className='col-two'>
                        <h3>Osource Global Ltd.</h3>
                        <div>Creative Designer</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Experience;