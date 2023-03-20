import React from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
const Contact = () => {
    const sendEmail = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        // emailjs.sendForm('<YOUR SERVICE ID>', '<YOUR TEMPLATE ID>', '#myForm')
        emailjs.sendForm('service_nnkigki', 'template_vi5j3gu', event.target, 'Wq7nK9ir6Paqbrgpz')
            .then(res => console.log(res)).catch(err => console.log(err));
    }
    return (
        <div id='contact' data-aos="fade-up" class="container mt-10 contact-area section-padding">
            <div class="container">
                <div class="section-title text-center">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
                </div>
                <div class="row">
                    <div class="col-lg-7">
                        <div class="contact">
                            <form onSubmit={sendEmail} class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <input type="text" name="name" class="form-control" placeholder="Name" required="required" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="email" name="email" class="form-control" placeholder="Email" required="required" />
                                    </div>
                                    {/* <div class="form-group col-md-12">
                                        <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" />
                                    </div> */}
                                    <div class="form-group col-md-12">
                                        <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
                                    </div>
                                    <div class="col-md-12 text-center">
                                        <button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="single_address">
                            <i class="fa fa-map-marker"></i>
                            <h4>Our Address</h4>
                            <p>Chittagong, Bangladesh</p>
                        </div>
                        <div class="single_address">
                            <i class="fa fa-envelope"></i>
                            <h4>Send your message</h4>
                            <p>sishahin093@gmail.com</p>
                        </div>
                        <div class="single_address">
                            <i class="fa fa-phone"></i>
                            <h4>Call us on</h4>
                            <p>(+880) 01774623000</p>
                        </div>
                        <div class="single_address">
                            <i class="fa fa-clock-o"></i>
                            <h4>Work Time</h4>
                            <p>Mon - Fri: 08.00 - 16.00. <br />Sat: 10.00 - 14.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;