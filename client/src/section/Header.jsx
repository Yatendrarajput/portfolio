import { useState, useEffect } from "react";
import { Link } from "react-scroll"; // For smooth scrolling to sections
import { GiHamburgerMenu } from "react-icons/gi"; // Importing the hamburger icon

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // For responsive nav toggle

    useEffect(() => {
        // Optional: Any effects can be initialized here
    }, []);

    return (
        <header className="w-full fixed top-0 left-0 bg-[#202020] z-50">
            <div className="w-full py-4 px-8 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <h1 className="text-white text-2xl font-semibold ml-2">
                        <span className="text-themered">Y</span>R.
                    </h1>
                </div>

                {/* Navigation for Desktop */}
                <nav className="hidden lg:flex gap-8 text-white text-lg">
                    <Link to="hero" smooth={true} duration={500} spy={true} activeClass="text-themered" className="hover:text-themered">
                        Home
                    </Link>
                    <Link to="services" smooth={true} duration={500} spy={true} activeClass="text-themered" className="hover:text-themered">
                        Experience
                    </Link>
                    <Link to="skills" smooth={true} duration={500} spy={true} activeClass="text-themered" className="hover:text-themered">
                        Technology
                    </Link>
                    <Link to="projects" smooth={true} duration={500} spy={true} activeClass="text-themered" className="hover:text-themered">
                        Projects
                    </Link>
                    <Link to="footer" smooth={true} duration={500} spy={true} activeClass="text-themered" className="hover:text-themered">
                        Contact
                    </Link>
                </nav>

                {/* Hamburger for Mobile */}
                <div
                    className="lg:hidden flex items-center cursor-pointer text-white text-2xl"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <GiHamburgerMenu />
                </div>
            </div>

            {/* Mobile Navigation */}
            {isNavOpen && (
                <div className="lg:hidden bg-[#202020] text-white py-4 px-8 absolute top-0 left-0 w-full z-50">
                    <nav className="flex flex-col items-center gap-6">
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-themered"
                            className="hover:text-themered"
                            onClick={() => setIsNavOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-themered"
                            className="hover:text-themered"
                            onClick={() => setIsNavOpen(false)}
                        >
                            Experience
                        </Link>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-themered"
                            className="hover:text-themered"
                            onClick={() => setIsNavOpen(false)}
                        >
                            Technology
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-themered"
                            className="hover:text-themered"
                            onClick={() => setIsNavOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link
                            to="footer"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-themered"
                            className="hover:text-themered"
                            onClick={() => setIsNavOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
