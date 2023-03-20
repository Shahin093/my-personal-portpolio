import React from 'react';
import SkillBar from 'react-skillbars';
import './Skill.css'
const Skill = () => {
    const SKILLS6 = [
        {
            type: "React",
            level: 100,
            color: { bar: "#3498db", title: { text: "#fff", background: "#2980b9" } }
        },
        {
            type: "Javascript",
            level: 85,
            color: { bar: "#4288d0", title: { text: "#fff", background: "#2980b9" } }
        },
        {
            type: "Bootsrap",
            level: 75,
            color: { bar: "#2c3e50", title: { text: "#fff", background: "#2c3e50" } }
        },
        {
            type: "Tailwind",
            level: 50,
            color: { bar: "#5a68a5", title: { text: "#fff", background: "#46465e" } }
        },
        {
            type: "Java",
            level: 35,
            color: { bar: "#525252", title: { text: "#fff", background: "#333333" } }
        },
        {
            type: "JavaSwing",
            level: 25,
            color: { bar: "black", title: { text: "#111", background: "#fff" } }
        },
        {
            type: "NoSQL",
            level: 10,
            color: { bar: "#2ecc71", title: { text: "#fff", background: "#27ae60" + "10%" } }
        }
    ];

    return (
        <div data-aos="fade-up" class=" container mt-5" id="elementAllBarAllTextAllBg">
            <h2>Skills : </h2>
            <SkillBar level={SKILLS6.level} skills={SKILLS6} />
        </div>
    );
};

export default Skill;