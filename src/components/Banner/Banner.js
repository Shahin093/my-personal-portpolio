import Aos from 'aos';
import React, { useEffect } from 'react';
import shahin from '../../images/shahin.png';
import './Banner.css'
const Banner = () => {
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid transparent}";
        document.body.appendChild(css);
    };
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])
    return (
        <div data-aos="fade-up" className="static-slider4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 ">
                        <img src={shahin} alt="my pic" className="img-fluid imgbg" />
                    </div>
                    <div className="col-md-6   mt-3  mx-auto align-middle">



                        <h1 className="title">I’m a Shidul Flintoff <b className="font-weight-bold">Development & <span className="text-info-gradiant typewrite" data-period="2000" data-type='[ "Front end developer", "MERN Stack Expert", "Node Expert"]'></span></b></h1>
                        <p>I am a Frontend Web Developer (React.Js) & MERN Stack who loves to take on new challenges on every new project. I am constantly trying to work on new frameworks, language. I Learn, Practice and Implement HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React to develop for Frontend web application. Behind I use React.js, Node.js, Express.js, MongoDB as a database for MERN stack Project.</p>
                        <div className='d-flex ml-2'>
                            <a className=" mr-2 btn btn-outline-info btn-md mt-3 btn-primary" href="https://drive.google.com/file/d/1ghCV5owvQRrFXSEy-YV-IGAPg5rBCyGj/view?usp=sharing" target="blank"><span>DownLoad Resume</span></a>

                            {/* <a className="btn btn-outline-info btn-md mt-3 btn-primary" href="home#contact"><span>Contact With ME</span></a> */}
                        </div>


                    </div>

                </div>
            </div>
            {/* <div className="bg-info-gradiant">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 info-box">
                            <div className="d-flex">
                                <div className="display-5 text-white mr-3"><i className="font-weight-bold icon-control-play"></i></div>
                                <div className="text-left">


                                    <h4 className=" text-left  font-weight-light mb-0"><a href="#" data-toggle="modal" data-target="#static-slide3" className="text-white"><b className="font-weight-bold">10 React Development Tips for your Project </b><br />05:30 By Angelina Flintoff</a></h4>
                                </div>
                                <div className="modal fade" id="static-slide3">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h6 className="modal-title">Watch video</h6>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body" id="yt-player">
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/DDwbjWCgxVM?" frameborder="0" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;