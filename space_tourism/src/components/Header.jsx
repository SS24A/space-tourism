import { Link } from 'react-router-dom'
import logoImage from '../assets/shared/logo.svg'

export default function Header() {
    return (
        <section className="header">
            <div>
                <img src={logoImage} alt="logo" />
            </div>
            <div></div>
            <ul className="header-nav">
                <li>
                    <Link to="/">
                        <span>00</span>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/destination">
                        <span>01</span>
                        <span>Destination</span>
                    </Link>
                </li>
                <li>
                    <Link to="/crew">
                        <span>02</span>
                        <span>Crew</span>
                    </Link>
                </li>
                <li>
                    <Link to="/technology">
                        <span>03</span>
                        <span>Technology</span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
