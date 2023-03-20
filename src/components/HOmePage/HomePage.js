import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import Contact from '../Summary/Contact';
import Summary from '../Summary/Summary';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Project></Project>
            {/* <Projects></Projects> */}
            <Skill></Skill>
            <Summary></Summary>
            <Contact></Contact>
            <About />
        </div>
    );
};

export default HomePage;