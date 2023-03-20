import Aos from 'aos';
import React, { useEffect } from 'react';
import './Projects.css';
import service from '../../images/fixit-service.PNG';
import { Link } from 'react-router-dom';
import Project from '../Project/Project';
const Projects = ({ Projects }) => {
    // console.log(Projects.photo)
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, []);
    return (
        <div data-aos="fade-up" class="mt-10 container" >
            {/* <h2 className='text-center'>MY BEST PROJECTS</h2> */}
            {/* <div class="card-group gap-3"> */}

            {/* <Link to='/about'>Projects</Link> */}


            <div class="card">
                {/* <img src="http://iamubaidah.com/html/solvit/assets/images/why-choose-img.png" alt="my pic" className="img-fluid" /> */}
                <div class="pic-ctn">
                    {
                        Projects?.photo.map(photo => <img src={photo} alt="" class="pic img-fluid" />)
                    }
                </div>
                <div class="card-body">
                    <h5 class="card-title  ">{Projects?.name}</h5>
                    <p class="card-text">{Projects?.description}</p>
                    <div class="btn-group btn-group-toggle  grid grid-cols-3 " data-toggle="buttons">
                        <label class="btn btn-secondary active"> Technology :
                        </label>
                        {
                            Projects?.technologies.map(tech =>
                                <label class="btn btn-secondary"> {tech}
                                </label>
                            )
                        }


                    </div>
                </div>
                <div className=" items-center  justify-around">
                    {/* <a className="btn btn-outline-info btn-md mt-3 btn-primary" href="https://fixit-repair-assign-12.web.app/" target="blank"><span>Live Demo</span></a> */}
                    {/* <a className="btn btn-outline-info btn-md mt-3 btn-primary" href="https://fixit-repair-assign-12.web.app/" target="blank"><span>Details</span></a> */}
                    <div>
                        {/* <Link className="btn btn-outline-info btn-md mt-3 btn-primary" to={`/project/${Projects?._id}`} > Details Project</Link> */}
                        <a className="btn btn-outline-info btn-md mt-3 btn-primary" href={Projects?.demoSite} target="blank"><span>Live Demo</span></a>
                    </div>

                </div>
            </div>



            {/* <div data-aos="fade-up" class="card">
                    <img height={300} src="https://htmldemo.net/barly/assets/images/products/product-7.jpg" alt="my pic" className="" />
                    <div class="card-body">
                        <h5 class="card-title">Web Development</h5>
                        <p class="card-text">This Project is Based on a Warehouse Service. This Project is Full-Stack Website. How to keep Books in Book warehouse, how to keep books accounts, everything is shown on this website. User can login with email and password, google on this project.</p>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary active"> Technology :
                            </label>
                            <label class="btn btn-secondary"> React Js
                            </label>
                            <label class="btn btn-secondary">Javascript
                            </label>
                            <label class="btn btn-secondary"> React Router
                            </label>
                            <label class="btn btn-secondary"> Firebase
                            </label>
                            <label class="btn btn-secondary"> Node js
                            </label>
                            <label class="btn btn-secondary"> Mongodb
                            </label>
                            <label class="btn btn-secondary"> Express js
                            </label>
                            <label class="btn btn-secondary"> Bootstrap
                            </label>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a className="btn btn-outline-info btn-md mt-3 btn-primary" href="https://fasion-management-warehouse.web.app/" target="blank"><span>Live Demo</span></a>
                    </div>
                </div> */}
            {/* <div data-aos="fade-up" class="card">
                    <img src="https://e7.pngegg.com/pngimages/866/565/png-clipart-chair-dental-engine-health-care-dentistry-medicine-chair-furniture-service.png" alt="my pic" className="img-fluid" />
                    <div class="card-body">
                        <h5 class="card-title">Web Development</h5>
                        <p class="card-text">This Project Is Based on a Independent Service Provider. User can login with email and password, google on this project. Shows how to order to take pictures on this website. There is a part called gallery where all the pictures are given together.</p>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary active"> Technology :
                            </label>
                            <label class="btn btn-secondary"> React Js
                            </label>
                            <label class="btn btn-secondary">Javascript
                            </label>
                            <label class="btn btn-secondary"> React Router
                            </label>
                            <label class="btn btn-secondary"> Bootstrap
                            </label>
                            <label class="btn btn-secondary"> HTML & CSS
                            </label>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a className="btn btn-outline-info btn-md mt-3 btn-primary" href="https://dentist-in-shahin.web.app/" target="blank"><span>Live Demo</span></a>
                    </div>
                </div> */}
            {/* // </div> */}
        </div >
    );
};

export default Projects;