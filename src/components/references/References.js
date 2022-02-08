import './references.css';
function References() {
    return (
        <section className='references'>
            <h2 className='heading'>References</h2>
            <div className='list'>
                <div className='item'>
                    <div className='info'>
                        <h4 className='name'>Sarafaraz Shaikh</h4>
                        <div className='designation'>
                            Manager - UI Development
                            @ Infibeam Avenues
                        </div>
                    </div>
                    <div className='data-list'>
                        <div className='data-item'>
                            <h5>Email</h5>
                            <div><a href="mailto:sarfaraz.shaikh@avenues.info" target="_blank">sarfaraz.shaikh@avenues.info</a></div>
                        </div>
                        <div className='data-item'>
                            <h5>Mobile</h5>
                            <div><a href="tel:+919819914956" target="_blank">+91 9819914956</a></div>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='info'>
                        <h4 className='name'>Ateeque Shaikh</h4>
                        <div className='designation'>
                            HOD - Design &amp; Development
                            @ OsourceGlobal
                        </div>
                    </div>
                    <div className='data-list'>
                        <div className='data-item'>
                            <h5>Email</h5>
                            <div><a href="mailto:ateeque.shaikh@osourceindia.com" target="_blank">ateeque.shaikh@osourceindia.com</a></div>
                        </div>
                        <div className='data-item'>
                            <h5>Mobile</h5>
                            <div><a href="tel:+919224467299" target="_blank">+91 9224467299</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default References;