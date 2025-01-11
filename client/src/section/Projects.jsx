import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Project Images
import projectImage1 from "../assets/Project1.png"; // Example project images
import projectImage2 from "../assets/Project2.png"; // Example project images
// import projectImage3 from "../assets/project3.png"; // Add more projects if needed
// import projectImage4 from "../assets/project4.png"; // Add more projects if needed

const Projects = () => {

    const [showAllProjects, setShowAllProjects] = useState(false); // State to toggle projects

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);

    // Projects data (add more projects here)
    const projects = [
        {
            image: projectImage1,
            title: "BUYSPHERE",
            description:
                (
                    <>
                        <p>
                            A <span className="text-themered"> MERN</span> stack-based e-commerce website offering seamless user registration,
                            efficient shopping cart functionality, and secure payment integration, with enhanced performance via targeted SEO and the useLocation hook.
                        </p>
                    </>
                ),

            liveLink: "#",
            githubLink: "https://github.com/Yatendrarajput/eCommerce-BuySphere-",
        },
        {
            image: projectImage2,
            title: "TASKSPARK",
            description:
                (
                    <>
                        <p>
                            A Chrome extension for streamlined task management, featuring task addition, editing, deletion, and completion toggles.
                            It ensures persistent data with local storage and delivers a user-friendly interface built
                            using <span className="text-themered">ReactJS</span> and <span className="text-themered"> Tailwind CSS</span>.
                        </p>
                    </>
                ),

            liveLink: "#",
            githubLink: "https://github.com/Yatendrarajput/TaskSpark?tab=readme-ov-file",
        },
        // {
        //     image: projectImage3,
        //     title: "Project Title 3",
        //     description:
        //         "This is another project description. This project focuses on something new and innovative.",
        //     liveLink: "#",
        //     githubLink: "#",
        // },
        // {
        //     image: projectImage4,
        //     title: "Project Title 4",
        //     description:
        //         "This project is about building scalable web applications. It includes frontend and backend features.",
        //     liveLink: "#",
        //     githubLink: "#",
        // },
    ];

    // Function to toggle visibility of all projects
    // const toggleProjects = () => setShowAllProjects((prev) => !prev);

    return (
        <div id="projects" className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[60px]">
            {/* Projects Heading */}
            <div className="text-center mb-12">
                <h1 data-aos="zoom-in" className="text-white text-4xl font-semibold font-poppins">
                    My Projects
                </h1>
                <div data-aos="zoom-in" className="bg-themered h-[3px] mx-auto mt-4"></div>
                <p data-aos="zoom-in" data-aos-delay="400" className="text-gray-300 text-xl font-poppins mt-4">
                    Here are some of the projects I have worked on. Click the links to view the live project or check out the code on GitHub.
                </p>
            </div>

            {/* Display Projects */}
            {(showAllProjects ? projects : projects.slice(0, 2)).map((project, index) => (
                <div
                    data-aos="zoom-in"
                    className={`flex ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col items-center mb-12 gap-10`}
                    key={index}
                >
                    {/* Image Section */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="800"
                        className="lg:w-2/5 w-full relative flex justify-center items-center"
                    >
                        <img
                            src={project.image}
                            alt="hero image"
                            className="lg:w-[480px] w-full lg:h-[360px] h-[320px] rounded-lg relative z-20"
                        />
                        <div className="bg-[#2f2f2f] lg:w-[400px] w-full lg:h-[360px] h-[320px] rounded-lg absolute top-[30px] -left-[30px]"></div>
                    </div>

                    {/* Theory Section */}
                    <div className="lg:w-1/2 w-full flex flex-col justify-center gap-6">
                        <h2 className="text-white text-3xl font-semibold font-poppins">{project.title}</h2>
                        <p className="text-gray-300 text-lg font-poppins">{project.description}</p>
                        <div className="flex gap-6">

                            {/* Similary jese niche <a> tag use kiya h yha pr bhi kro  */}
                            <button className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-8 py-3 rounded-lg">
                                Live Project
                            </button>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-lg px-8 py-3 rounded-lg">
                                    GitHub Link
                                </button>
                            </a>



                        </div>
                    </div>
                </div>
            ))}

            {/* uncomment this when added more projects */}
            {/* "More Projects" Button */}
            {/* <div className="text-center">
                <button data-aos="zoom-in" data-aos-delay="400"
                    onClick={toggleProjects}
                    className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-8 py-3 rounded-lg mt-8"
                >
                    {showAllProjects ? "Show Less Projects" : "More Projects"}
                </button>
            </div> */}
        </div>
    );
};

export default Projects;
