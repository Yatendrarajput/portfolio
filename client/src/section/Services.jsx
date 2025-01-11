
import { FaArrowRight } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { Link } from 'react-scroll';
import { FaLaptopCode } from "react-icons/fa";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);

    return (
        <div
            id="services"
            className="w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full flex flex-col gap-[40px]"
        >
            {/* Header + Cards Container */}
            <div className="w-full flex lg:flex-row flex-col justify-between items-start lg:gap-[50px] gap-12">
                {/* Services Heading Section */}
                <div
                    className="lg:w-1/3 w-full flex flex-col justify-center items-start gap-6"
                    data-aos="zoom-in"
                >
                    <h1 className="text-4xl uppercase text-white font-poppins font-semibold">
                        Education
                    </h1>
                    <div className="bg-themered h-[3px] w-20"></div>
                    <p className="text-gray-300 text-lg font-poppins">
                        Final-year B.Tech student at <span className='text-themered'>MNNIT Allahabad</span>, specializing in Competetive programming and full-stack development.
                        Passionate about building seamless, user-centric solutions with modern technologies.
                    </p>
                </div>

                {/* Branding Section */}
                <div
                    className="lg:w-1/3 w-full flex flex-col justify-center items-start gap-6"
                    data-aos="zoom-in"
                >
                    <div className="bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
                        <MdOutlineDesignServices className="fill-white size-9" />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <h1 className="text-white font-semibold text-[26px]">Programming</h1>
                        <p className="text-gray-300 text-[17px] font-poppins">
                            I enjoy competitive programming in <span className='text-themered'>C++</span> on various platforms and explore problem-solving across domains.
                            Proficient in <span className='text-themered'>Python</span> and <span className='text-themered'>JavaScript</span>, I love tackling challenges with code.
                        </p>
                    </div>
                    <button className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2">
                        See Details <span> <FaArrowRight /></span>
                    </button>
                </div>

                {/* Development Section */}
                {/* Development Section */}
                <div
                    className="lg:w-1/3 w-full flex flex-col justify-center items-start gap-6"
                    data-aos="zoom-in"
                >
                    <div className="bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110">
                        <FaLaptopCode className="fill-white size-9" />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <h1 className="text-white font-semibold text-[26px]">Development</h1>
                        <p className="text-gray-300 text-[17px] font-poppins">
                            Skilled in development with a focus on the <span className='text-themered'>MERN</span> stack, I build dynamic, scalable web applications.
                            From crafting intuitive frontends to efficient backends, I love creating seamless digital experiences.
                        </p>
                    </div>
                    <Link
                        to="projects" // ID of the Projects section
                        smooth={true} // Enables smooth scrolling
                        duration={500} // Animation duration in ms
                        className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2 cursor-pointer"
                    >
                        See Details <span> <FaArrowRight /></span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Services;
