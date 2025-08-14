import { Link } from 'react-router-dom'

import logoImage from '../assets/shared/logo.svg'

export default function Header({ selectedPage }) {
    return (
        <section className="header">
            <div className="header-logo">
                <img src={logoImage} alt="logo" />
            </div>
            <div></div>
            <ul className="header-nav">
                <li
                    className={
                        selectedPage === 'home' ? 'page-active' : 'page-idle'
                    }
                >
                    <Link to="/">
                        <span>00</span>
                        <span>Home</span>
                    </Link>
                </li>
                <li
                    className={
                        selectedPage === 'destination'
                            ? 'page-active'
                            : 'page-idle'
                    }
                >
                    <Link to="/destination">
                        <span>01</span>
                        <span>Destination</span>
                    </Link>
                </li>
                <li
                    className={
                        selectedPage === 'crew' ? 'page-active' : 'page-idle'
                    }
                >
                    <Link to="/crew">
                        <span>02</span>
                        <span>Crew</span>
                    </Link>
                </li>
                <li
                    className={
                        selectedPage === 'technology'
                            ? 'page-active'
                            : 'page-idle'
                    }
                >
                    <Link to="/technology">
                        <span>03</span>
                        <span>Technology</span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
