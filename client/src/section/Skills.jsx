import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


// Import skill images
import cplusplus from "../assets/cplusplus.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tail from "../assets/tail.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import html from "../assets/html.png";
// import java from "../assets/java.png";
// import python from "../assets/python.png";
// import angular from "../assets/angular.png";
// import vue from "../assets/vue.png";
import javascript from "../assets/javascript.png";

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);

    return (
        <div id="skills" className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[60px]">
            {/* Skills Heading */}
            <div className="text-center mb-12">
                <h1
                    data-aos="zoom-in"
                    className="text-white text-4xl font-semibold font-poppins"
                >
                    Technologies and Frameworks
                </h1>
                <div data-aos="zoom-in" className="bg-themered h-[3px]  mx-auto  mt-4 "></div>
                <p
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="text-gray-300 text-xl font-poppins mt-4"
                >
                    Here are some of the technologies and skills I am proficient in. These are the tools I use to build efficient and scalable applications.
                </p>
            </div>

            {/* Skill Cards */}
            <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 justify-center">

                {/* Skill Card 1 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={cplusplus} alt="C++" className="w-[60px] h-[60px] object-contain" />
                </div>
                {/* Skill Card 2 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={node} alt="Node.js" className="w-[60px] h-[60px] object-contain" />
                </div>
                {/* Skill Card 3 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={react} alt="React" className="w-[60px] h-[60px] object-contain" />
                </div>
                {/* Skill Card 4 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={javascript} alt="React" className="w-[60px] h-[60px] object-contain" />
                </div>
                {/* Skill Card 5 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={tail} alt="React" className="w-[60px] h-[60px] object-contain" />
                </div>
                {/* Skill Card 6 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={mongo} alt="React" className="w-[60px] h-[60px] object-contain" />
                </div>
                {/* Skill Card 7 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={express} alt="React" className="w-[60px] h-[60px] object-contain" />
                </div>
                {/* Skill Card 8 */}
                <div data-aos="zoom-in" className="bg-gray-800 p-6 rounded-lg flex justify-center items-center hover:scale-105 transition-all">
                    <img src={html} alt="React" className="w-[60px] h-[60px] object-contain" />
                </div>



            </div>
        </div>
    );
};

export default Skills;
