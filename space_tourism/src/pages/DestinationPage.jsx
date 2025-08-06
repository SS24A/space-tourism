import { Outlet, Link } from 'react-router-dom'

export default function DestinationPage() {
    return (
        <section>
            <div>
                <span>01</span>
                <span>Pick your destination</span>
            </div>
            <ul>
                <li>
                    <Link to="/destination/moon">Moon</Link>
                </li>
                <li>
                    <Link to="/destination/mars">Mars</Link>
                </li>
                <li>
                    <Link to="/destination/europa">Europa</Link>
                </li>
                <li>
                    <Link to="/destination/titan">Titan</Link>
                </li>
            </ul>
            <Outlet />
        </section>
    )
}
