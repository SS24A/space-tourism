import { Link } from 'react-router-dom'
import logoImage from '../assets/shared/logo.svg'

export default function Header() {
    return (
        <section>
            <div>
                <img src={logoImage} alt="logo" />
            </div>
            <div></div>
            <ul>
                <li>
                    <Link to="/">
                        <span>00</span>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/destination/moon">
                        <span>01</span>
                        <span>Destination</span>
                    </Link>
                </li>
                <li>
                    <Link to="/crew/commander">
                        <span>02</span>
                        <span>Crew</span>
                    </Link>
                </li>
                <li>
                    <Link to="/technology/vehicle">
                        <span>03</span>
                        <span>Technology</span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
