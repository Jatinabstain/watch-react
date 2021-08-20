import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import Link from 'next/link'
import 'jquery'
import { useRouter } from 'next/router'

export const Header = () => {
    const router = useRouter()
    return (
        <nav className="navbar header navbar-expand-lg sticky-top navbar-light">
            <div className="container">
                <Link className="navbar-brand" href="#home">
                    <a><Image src={logo} alt="logo" className="img-fluid logo" width={200} /></a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className={router.pathname == "/" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="#home">
                                <a className="nav-link nav_link">Home</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "#feature" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="#feature">
                                <a className="nav-link nav_link">Feature</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "#about" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="#about">
                                <a className="nav-link nav_link">About</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "#products" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="#products">
                                <a className="nav-link nav_link">Products</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "#testimonial" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="#testimonial">
                                <a className="nav-link nav_link">Testimonial</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "#pricing" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="#pricing">
                                <a className="nav-link nav_link">Pricing</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "#contact" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="#contact">
                                <a className="nav-link nav_link">Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
const handleClick = (e) => {
    var element = document.getElementById("navbarSupportedContent");
    element.classList.toggle("show");
}
export default Header