import React, { useEffect, useState } from 'react';
import Projects from '../Projects/Projects';
import Aos from 'aos';
const Project = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, []);
    // http://localhost:5000/api/v1/project
    const [projects, setProject] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);

    console.log(projects);
    return (
        <div data-aos="fade-up" class="mt-10 container" >
            <h2 className='text-center text-xl'>MY BEST PROJECTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 card-group gap-2'>
                {projects.map(project =>
                    <Projects Projects={project}></Projects>
                )}
            </div>
        </div>
    );
};

export default Project;