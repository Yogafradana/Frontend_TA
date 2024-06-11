import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { assets } from "../../assets/assets";

const Banner = () => {
    return (
        <div className="container remove-padding">
            <img className="gambar-bacground-home" src="http://localhost:3001/static/media/header.907d2ef5e6c4cec6edff.png" alt="Snow" />
            {/* <div className="bottom-left">Bottom Left</div> */}
            <div className="top-left p-4">
                <Link to="/">
                    <img src={assets.logo} alt="" className="logo" />
                </Link>
            </div>
            <div className="top-right p-4"><Navbar /></div>
            {/* <div className="bottom-right">Bottom Right</div> */}
            <div className="centered">
                <h1 className="banner-header">Bug Membandel? Temukan Solusinya Sambil Ngopi di <br /><span className="banner-sub-header">Cafe Microdata</span></h1>
                <button className="button-header">
                    <span>Pesan Sekarang</span>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0001 6.5H8.2876C8.08869 6.5 7.89792 6.42098 7.75727 6.28033C7.61662 6.13968 7.5376 5.94891 7.5376 5.75C7.5376 5.55109 7.61662 5.36032 7.75727 5.21967C7.89792 5.07902 8.08869 5 8.2876 5H18.7501C18.949 5 19.1398 5.07902 19.2804 5.21967C19.4211 5.36032 19.5001 5.55109 19.5001 5.75V16.25C19.5001 16.4489 19.4211 16.6397 19.2804 16.7803C19.1398 16.921 18.949 17 18.7501 17C18.5512 17 18.3604 16.921 18.2198 16.7803C18.0791 16.6397 18.0001 16.4489 18.0001 16.25V6.5Z" fill="white" />
                        <path d="M18.219 5.21897C18.3598 5.07814 18.5508 4.99902 18.75 4.99902C18.9491 4.99902 19.1401 5.07814 19.281 5.21897C19.4218 5.3598 19.5009 5.55081 19.5009 5.74997C19.5009 5.94913 19.4218 6.14014 19.281 6.28097L6.53097 19.031C6.46124 19.1007 6.37846 19.156 6.28735 19.1938C6.19624 19.2315 6.09859 19.2509 5.99997 19.2509C5.90135 19.2509 5.8037 19.2315 5.7126 19.1938C5.62149 19.156 5.5387 19.1007 5.46897 19.031C5.39924 18.9612 5.34392 18.8785 5.30619 18.7873C5.26845 18.6962 5.24902 18.5986 5.24902 18.5C5.24902 18.4014 5.26845 18.3037 5.30619 18.2126C5.34392 18.1215 5.39924 18.0387 5.46897 17.969L18.219 5.21897Z" fill="white" />
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default Banner;