import { useEffect, useState } from "react";

import my from "../assets/my4.jpeg";
import design from "../assets/design.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    const [emailCopied, setEmailCopied] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        });
    }, []);

    // Handle the "Copy Email" functionality
    const handleCopyEmail = () => {
        const email = "yatendra1456@gmail.com"; // Replace with your actual email
        navigator.clipboard.writeText(email).then(() => {
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 3000); // Hide the pop-up after 3 seconds
        });
    };

    return (
        <div
            id="hero"
            className="w-full lg:px-[200px] px-8 lg:pb-[88px] pb-5 lg:pt-[150px] pt-[120px] h-full flex lg:flex-row flex-col justify-between items-center gap-[60px]"
        >
            {/* Left Section (Text) */}
            <div className="lg:w-3/5 w-full flex flex-col justify-center items-start gap-[40px]">
                <h1
                    data-aos="zoom-in"
                    className="text-white lg:text-3xl text-xl font-semibold font-poppins"
                >
                    Hi, I am <span className="text-themered">Yatendra Rajput</span>
                </h1>
                <h1
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="text-white text-4xl lg:text-5xl font-semibold font-poppins"
                >
                    Software Developer  <span className="text-themered">|</span> Web Developer
                </h1>
                <p
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    className="text-gray-300 lg:text-xl text-lg font-semibold font-poppins leading-relaxed"
                >
                    Great ideas deserve great execution. Turning complex problems into simple, sleek,
                    and user-friendly apps— <span className="text-themered">one line of code at a time</span>. Let’s build something that stands out!
                </p>
                <div
                    className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-6 mt-5"
                >


                    {/* Copy Email Button */}
                    <button
                        data-aos="zoom-in"
                        data-aos-delay="600"
                        onClick={handleCopyEmail}
                        className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-6 py-3 rounded-lg font-poppins w-full lg:w-auto"
                    >
                        Copy Email
                    </button>

                    {/* Resume Button */}
                    <a
                        href="https://drive.google.com/drive/folders/1g6CarpQrJJhYhjoz9WThUysBZ3r3OftB?usp=drive_link"  // Path to the resume file in the public folder
                        target="_blank"
                        download
                        className="bg-themered hover:bg-white text-white hover:text-themered font-semibold text-lg px-6 py-3 rounded-lg font-poppins w-full lg:w-auto"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        Resume
                    </a>
                </div>
            </div>

            {/* Right Section (Image) */}
            <div
                data-aos="zoom-in"
                data-aos-delay="800"
                className="lg:w-2/5 w-full relative flex justify-center items-center"
            >
                <img
                    src={my}
                    alt="hero image"
                    className="lg:w-[520px] w-full lg:h-[500px] h-[450px] rounded-lg relative z-20"
                />
                <img
                    src={design}
                    alt="Here is Image"
                    className="absolute -top-7 -right-7 rounded-lg z-10"
                />
                <div className="bg-[#2f2f2f] lg:w-[400px] w-full lg:h-[500px] h-[400px] rounded-lg absolute top-[30px] -left-[30px]"></div>
            </div>

            {/* Email copied pop-up */}
            {emailCopied && (
                <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
                    Email copied to clipboard!
                </div>
            )}
        </div>
    );
};

export default Hero;
