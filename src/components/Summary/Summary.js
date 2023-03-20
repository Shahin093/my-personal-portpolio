import Aos from 'aos';
import React, { useEffect } from 'react';

const Summary = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])
    return (
        <div data-aos="fade-up" className='container mt-10'>
            <div class="row g-3">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h1>My Education</h1>
                            <h3 class="card-title">Diploma in Computer Engineering</h3>
                            <b>Harvard University / 2015 - 2017</b>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.</p>
                            <hr className="2px dotted red"></hr>
                            <p>dlfdj</p>
                        </div>

                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Summary;